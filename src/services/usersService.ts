import { userApi } from '../utils/userApi';

const GetUsers = 'getUsers';

const usersServices = userApi.injectEndpoints({
    endpoints: (builder) => ({
        [GetUsers]: builder.query<object[], void>({ query: () => '/api/get_all_employees_data_from_bob' })
    }),
});

export const {
    useGetUsersQuery
} = usersServices;
