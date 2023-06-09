import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useCreateLendMutation } from '../../services/lendService.ts';
import { ILendInputs, IProduct } from '../../types/types.ts';
import { useForm, Controller } from 'react-hook-form';
import { imagePlaceholder } from '../../utils/imagePlaceholder.ts';
import { useGetEmployeesQuery } from '../../utils/userApi.ts';
import { toast } from 'react-toastify';
import Modal from '../../components/Modal.tsx';
import {
    TextField,
    Autocomplete,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CircularProgress,
    FormHelperText,
} from '@mui/material';

type LendModalProps = {
    product: IProduct;
    setProducts: Dispatch<SetStateAction<IProduct[]>>;
    showLendModal: boolean;
    setShowLendModal: Dispatch<SetStateAction<boolean>>;
};

const LendModal = ({
    product,
    setProducts,
    showLendModal,
    setShowLendModal,
}: LendModalProps) => {
    const [createLend] = useCreateLendMutation();
    const [employees, setEmployees] = useState<{ label: string; value: string }[]>([]);
    const { data: users } = useGetEmployeesQuery();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
    } = useForm<ILendInputs>({
        defaultValues: {
            email: null,
            quantity: null,
        },
        mode: 'onChange',
    });

    useEffect(() => {
        if (users) {
            setEmployees(
                users.map(e => ({
                    label: e.name,
                    value: e.email,
                }))
            );
        }
    }, [users]);

    const onSubmit = async (data: ILendInputs): Promise<void> => {
        const email = (data.email as { label: string; value: string; }).value;
        const response = await createLend({
            productId: product.id,
            email: email,
            quantity: data.quantity,
        });
        if ('data' in response) {
            setProducts((oldProducts) =>
                oldProducts.map((p) =>
                    p.id === product.id ? {
                        ...p,
                        quantityForLend: (p.quantityForLend as number) - (data.quantity as number),
                        quantity: (p.quantity as number) - (data.quantity as number),
                    } : p
                )
            );
            toast.success('Lent successfully!');
            setShowLendModal(false);
            reset();
        }
    };

    return (
        <Modal showModal={showLendModal} setShowModal={setShowLendModal}>
            <form className='modalContent' onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='leftModal'>
                        <h2>Lend Item</h2>
                        <Controller
                            control={control}
                            name='email'
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Email field is required'
                                }
                            }}
                            render={({ field: { onChange, value } }) => (
                                <Autocomplete
                                    className='formInput'
                                    options={employees}
                                    value={value as { label: string; value: string; }}
                                    onChange={(e, item) => {
                                        e;
                                        onChange(item);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            error={Boolean(errors.email)}
                                            helperText={errors.email?.message}
                                            className='formInput'
                                            variant='standard'
                                            label='Email *'
                                            {...params}
                                        />
                                    )}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name='quantity'
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Quantity field is required',
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <FormControl variant='standard' className='formInput'>
                                    <InputLabel focused={false}>Quantity *</InputLabel>
                                    <Select
                                        value={value || ''}
                                        onChange={onChange}
                                        error={Boolean(errors.quantity)}
                                    >
                                        {Array(product.quantityForLend)
                                            .fill(1)
                                            .map((n, i) => n + i)
                                            .map((o) => (
                                                <MenuItem value={o} key={o}>
                                                    {o}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                    <FormHelperText error>
                                        {errors.quantity && errors.quantity.message}
                                    </FormHelperText>
                                </FormControl>
                            )}
                        />
                    </div>
                    <div className='rightModal'>
                        <img
                            className='currentImg'
                            src={product.imageUrl || imagePlaceholder}
                        />
                    </div>
                </div>
                {isSubmitting ? (
                    <CircularProgress className='circular' />
                ) : (
                    <button type='submit'>Lend</button>
                )}
            </form>
        </Modal>
    );
};

export default LendModal;
