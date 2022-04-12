import { createSlice } from '@reduxjs/toolkit'
import { AppState } from 'app/store'

const initialState = {
	status: 'idle',
	sidebarOpen: false,
	message: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			localStorage.removeItem('userAuthenticated')
			localStorage.removeItem('token')
			state.status = 'success'
			state.sidebarOpen = !state.sidebarOpen
		},
	},
})

export const { toggleSidebar } = userSlice.actions

export const sidebarOpen = (state: AppState) => state.sidebar.sidebarOpen

export default userSlice.reducer
