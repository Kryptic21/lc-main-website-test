import { Action, createSlice } from '@reduxjs/toolkit'

export type SuccessObjectType = {
	email: string
	linkedinUrl: string
	phoneNumber: string
}

export type SuccessObjectTypeForSkipWaitlist = {
	id: string
	name: string
}

const initialState = {
	status: 'idle',
	waitlist: null,
	message: null,
	skipWaitlistModal: {
		isOpen: false,
		data: {
			payload: {
				id: '',
				email: '',
				phoneNumber: '',
				linkedinUrl: '',
			},
		},
	},
	congratsModal: {
		isOpen: false,
		data: {
			referralName: '',
			payload: {
				payload: {
					id: '',
					email: '',
					phoneNumber: '',
					linkedinUrl: '',
				},
			},
		},
	},
}

export interface ActionWithPayload<T> extends Action {
	payload: T
}

export const userSlice = createSlice({
	name: 'waitlist',
	initialState,
	reducers: {
		openSkipWaitlistModal: (state, action) => {
			state.status = 'success'
			state.skipWaitlistModal = {
				...state.skipWaitlistModal,
				isOpen: true,
				data: action.payload,
			}
		},
		openCongratsModal: (state, action: any) => {
			state.status = 'success'
			state.skipWaitlistModal = {
				...state.skipWaitlistModal,
				isOpen: false,
			}
			state.congratsModal = {
				...state.congratsModal,
				isOpen: true,
				data: action.payload,
			}
		},
		closeModal: (state) => {
			state.status = 'success'
			state.skipWaitlistModal = {
				...state.skipWaitlistModal,
				isOpen: false,
				data: {
					payload: {
						id: '',
						email: '',
						phoneNumber: '',
						linkedinUrl: '',
					},
				},
			}
			state.congratsModal = {
				...state.congratsModal,
				isOpen: false,
				data: {
					referralName: '',
					payload: {
						payload: {
							id: '',
							email: '',
							phoneNumber: '',
							linkedinUrl: '',
						},
					},
				},
			}
		},
	},
})

export const { openSkipWaitlistModal, openCongratsModal, closeModal } =
	userSlice.actions

export default userSlice.reducer
