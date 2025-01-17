import { apiSlice } from "../services/apiSlice";
interface User{
    first_name: string;
	last_name: string;
	email: string;
}
const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
		retrieveUser: builder.query<User, void>({
			query: () => '/users/me/',
		}),
        login: builder.mutation({
			query: ({ email, password }) => ({
				url: '/login/',
				method: 'POST',
				body: { email, password },
			}),
		}),
		register: builder.mutation({
			query: ({
				first_name,
				last_name,
				email,
				password,
				re_password,
			}) => ({
				url: '/register/',
				method: 'POST',
				body: { first_name, last_name, email, password, re_password },
			}),
		}),
        logout: builder.mutation({
			query: () => ({
				url: '/logout/',
				method: 'POST',
			}),
		}),
    })
})
export const {
    useRetrieveUserQuery,
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation

} = authApiSlice;