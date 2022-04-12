import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sidebarReducer from 'components/Layout/LayoutSlice'
import waitlistReducer from 'components/Waitlist/WaitlistSlice'
import { waitlistApi } from 'components/Waitlist/WaitlistAPI'

export function makeStore() {
	return configureStore({
		reducer: {
			sidebar: sidebarReducer,
			[waitlistApi.reducerPath]: waitlistApi.reducer,
			waitlist: waitlistReducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(waitlistApi.middleware),
	})
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>

export default store
