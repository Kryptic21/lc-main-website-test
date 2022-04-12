import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import styles from './Waitlist.module.css'
import { useAppDispatch } from 'app/hooks'
import { openSkipWaitlistModal } from './WaitlistSlice'
import { useJoinWaitlistMutation } from './WaitlistAPI'
import commonStyles from 'styles/Common.module.css'

declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		lintrk: any
	}
}

function Waitlist() {
	const [form] = Form.useForm()
	const dispatch = useAppDispatch()
	const [loading, setLoading] = useState(false)
	const [joinWaitlist, { isError }] = useJoinWaitlistMutation()

	const validateEmail = (email: string) => {
		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regex.test(email)
	}

	const onFinish = async (values: any) => {
		console.log('Success:', values)
		const user = {
			email: values.email.toLowerCase().trim(),
			linkedinUrl: values.linkedinProfileLink.trim(),
			phoneNumber: values.phoneNumber.trim(),
		}

		try {
			setLoading(true)
			await window.lintrk('track', { conversion_id: 7081729 })
			const data: any = await joinWaitlist(user)
			// console.log('data', data)
			// console.log('data.error', data.error)
			setLoading(false)
			data.error === undefined &&
				dispatch(openSkipWaitlistModal({ payload: data.data }))
		} catch (error) {
			console.error(error)
			console.log('Inside error')
			setLoading(false)
		}
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<div className={styles.waitlistContainer}>
			<Form
				name='basic'
				layout='vertical'
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				form={form}
			>
				<Form.Item
					className={styles.inputLabel}
					label='email'
					name='email'
					rules={[
						{
							required: true,
							message: 'please enter your email',
						},
						() => ({
							validator(_, value) {
								if (!value) {
									return Promise.reject()
								}
								if (!validateEmail(value.toLowerCase())) {
									return Promise.reject('please enter a valid email')
								}
								return Promise.resolve()
							},
						}),
					]}
				>
					<Input className={styles.input} placeholder='gal@gadot.com' />
				</Form.Item>
				<Form.Item
					className={styles.inputLabel}
					label='linkedin profile link'
					name='linkedinProfileLink'
					rules={[
						{ required: true, message: 'please enter your linkedin profile' },
					]}
				>
					<Input
						className={styles.input}
						placeholder='we want to know you better'
					/>
				</Form.Item>
				<Form.Item
					className={styles.phoneInputLabel}
					label={
						<div>
							phone number <br />
							<span className={styles.spanText}>
								(this will help us contact you faster. we will never spam)
							</span>
						</div>
					}
					name='phoneNumber'
					rules={[
						{
							required: true,
							message: 'please enter your phone number',
						},
						() => ({
							validator(_, value) {
								if (!value) {
									return Promise.reject()
								}
								if (isNaN(value)) {
									return Promise.reject('please enter a valid phone number')
								}
								if (value.length < 10) {
									return Promise.reject(
										"phone number can't be less than 10 digits"
									)
								}
								if (value.length > 10) {
									return Promise.reject(
										"phone number can't be more than 10 digits"
									)
								}
								return Promise.resolve()
							},
						}),
					]}
				>
					<Input
						className={styles.input}
						placeholder='we want to know you better'
					/>
				</Form.Item>
				<Form.Item className={styles.buttonWrapper}>
					<Button
						type='primary'
						htmlType='submit'
						id={styles.buttonPrimary}
						loading={loading}
					>
						join the waitlist
					</Button>
				</Form.Item>
			</Form>
			<div className={styles.bottomTextWrapper}>
				<div className={styles.bottomText}>
					we will email more info on the membership. we onboard a limited number
					of members every month and sell out fast.
				</div>
			</div>
			{isError && (
				<div className={styles.errorWrapper}>
					<span
						className={`${commonStyles.textCenter} ${commonStyles.highlightedText}`}
					>
						something went wrong! please try again later.
					</span>
				</div>
			)}
		</div>
	)
}

export default Waitlist
