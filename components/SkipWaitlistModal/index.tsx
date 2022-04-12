import { Button, Input, Modal } from 'antd'
import Text from 'antd/lib/typography/Text'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
	closeModal,
	openCongratsModal,
} from 'components/Waitlist/WaitlistSlice'
import React, { useState } from 'react'
import { useMediaQuery } from 'utils/useMediaQueries'
import styles from './SkipWaitlistModal.module.css'
import { useSkipWaitlistMutation } from 'components/Waitlist/WaitlistAPI'
import commonStyles from 'styles/Common.module.css'

function SkipWaitlistModal() {
	const [confirmLoading, setConfirmLoading] = useState(false)
	const [referralName, setReferralName] = useState('')
	const [errorMsg, setErrorMsg] = useState('')

	const [width] = useMediaQuery()

	const dispatch = useAppDispatch()
	const waitlist = useAppSelector((state) => state.waitlist)

	const [skipWaitlist, { isError, isLoading }] = useSkipWaitlistMutation()

	const onChangeHandler = (e: any) => {
		if (e.target.value.length > 0) {
			setErrorMsg('')
		}
		setReferralName(e.target.value)
	}

	const onSubmit = async () => {
		if (!referralName) {
			return setErrorMsg('please enter a referral name')
		}
		const user = {
			id: waitlist.skipWaitlistModal.data.payload.id,
			referralName: referralName.trim(),
		}
		try {
			setConfirmLoading(true)
			await skipWaitlist(user)
			setConfirmLoading(false)
			await dispatch(
				openCongratsModal({
					payload: waitlist.skipWaitlistModal.data,
					referralName,
				})
			)
		} catch (error) {
			console.error(error)
			setConfirmLoading(false)
		}
	}

	const renderFooter = (
		<div className={styles.footerContainer}>
			<Button
				key='submit'
				type='primary'
				id={styles.buttonPrimary}
				htmlType='submit'
				loading={isLoading}
				onClick={onSubmit}
			>
				submit
			</Button>
		</div>
	)

	return (
		<Modal
			centered
			visible={waitlist.skipWaitlistModal.isOpen}
			confirmLoading={confirmLoading}
			onCancel={() => dispatch(closeModal())}
			bodyStyle={{
				paddingBottom: '0rem',
				paddingRight: '3rem',
				paddingLeft: '3rem',
			}}
			width={width > 2500 ? '50%' : width < 800 ? '90%' : '60%'}
			footer={renderFooter}
			className={styles.modalContainer}
		>
			<div
				style={{
					marginTop: '1.5rem',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Text id={styles.headingText}>
					thank you! 15,000+ women are ahead of you on the waitlist.{' '}
					<b>
						there is a hack to jump straight to the top and become a member now
						😉
					</b>
				</Text>
				<Text id={styles.subText}>
					know a member? tell us who. our machines will then take a few seconds
					to calculate if you are eligible to skip the waitlist queue, the
					onboarding call and directly become a member.
				</Text>
				<Input
					className={styles.input}
					placeholder='enter member name'
					onChange={onChangeHandler}
				/>
				<Text style={{ color: 'red' }}>{errorMsg}</Text>
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
		</Modal>
	)
}

export default SkipWaitlistModal
