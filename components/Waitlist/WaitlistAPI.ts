import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface WaitlistData {
	data: {
		id: string
		email: string
		linkedinUrl: string
		phoneNumber: string
		created: string
	}
}

type PassedDataType = {
	email: string
	linkedinUrl: string
	phoneNumber: string
}

type SkipWaitlistPropsType = {
	id: string
	referralName: string
}

type PaymentVisitedPropsType = {
	id: string
}

export const waitlistApi = createApi({
	reducerPath: 'waitlistApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://e0fza830j9.execute-api.ap-south-1.amazonaws.com/Prod/',
	}),
	endpoints: (builder) => ({
		joinWaitlist: builder.mutation<WaitlistData, PassedDataType>({
			query: (user) => ({
				url: 'newwaitlist',
				method: 'POST',
				body: user,
			}),
		}),
		skipWaitlist: builder.mutation<void, SkipWaitlistPropsType>({
			query: (user) => ({
				url: 'newwaitlist',
				method: 'PATCH',
				body: user,
			}),
		}),
		paymentVisited: builder.mutation<void, PaymentVisitedPropsType>({
			query: (user) => ({
				url: 'payment-visited',
				method: 'PATCH',
				body: user,
			}),
		}),
	}),
})

export const {
	useJoinWaitlistMutation,
	useSkipWaitlistMutation,
	usePaymentVisitedMutation,
} = waitlistApi
