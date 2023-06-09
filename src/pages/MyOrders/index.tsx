import { useGetMyOrdersQuery } from '../../services/ordersService.ts';
import { useState, useEffect } from 'react';
import { IOrder } from '../../types/types.ts';
import MyOrderComponent from './MyOrderComponent.tsx';

const MyOrders = () => {
    const { data, isLoading } = useGetMyOrdersQuery();
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        data && setOrders(data);
    }, [data]);

    return (
        <main id='myOrdersMain'>
            <div id='headingSection'>
                <span className='nameColumn'>Name</span>
                <span className='qtyColumn'>QTY</span>
                <span className='priceColumn'>Price</span>
                <span className='orderDateColumn'>Order Date</span>
                <span className='orderStatus'>Status</span>
            </div>
            {orders?.length !== 0 && (
                orders?.map((order: IOrder) => (
                    <MyOrderComponent order={order} setOrders={setOrders} key={order.id} />
                ))
            )}
            {(orders?.length === 0 || !orders) && !isLoading && <div className='order'>No Orders</div>}
            {isLoading && <div className='order'>Loading...</div>}
        </main>
    );
};

export default MyOrders;
