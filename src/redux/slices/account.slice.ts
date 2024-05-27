import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface AccountState {
    email: string | null;
    isAuth: boolean;
}

// Define the initial state using that type
const initialState: AccountState = {
    email: null,
    isAuth: false,
}

export const accountSlice = createSlice({
    name: 'account',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        logout: (state) => {
            state.email = null;
            state.isAuth = false;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        login: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
            state.isAuth = true;
        }
    },
})

export const { login, logout } = accountSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectEmail = (state: RootState) => state.account.email
export const selectIsAuth = (state: RootState) => state.account.isAuth

export default accountSlice.reducer