import { Button, Modal } from 'antd'
import Text from 'antd/lib/typography/Text'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { closeModal } from 'components/Waitlist/WaitlistSlice'
import styles from 'components/SkipWaitlistModal/SkipWaitlistModal.module.css'
import { useMediaQuery } from 'utils/useMediaQueries'
import componentStyles from './CongratsModal.module.css'
import { usePaymentVisitedMutation } from 'components/Waitlist/WaitlistAPI'
import commonStyles from 'styles/Common.module.css'

function CongratsModal() {
	const dispatch = useAppDispatch()
	const waitlist = useAppSelector((state) => state.waitlist)
	const [width] = useMediaQuery()
	const [paymentVisited, { isLoading, isError }] = usePaymentVisitedMutation()

	const onOpenNewTab = () => {
		let a = document.createElement('a')
		a.href = `https://members.leap.club/payment?email=${waitlist.congratsModal.data?.payload.payload.email}&phonenumber=${waitlist.congratsModal.data?.payload.payload.phoneNumber}&waitlistId=${waitlist.congratsModal.data?.payload.payload.id}`
		a.setAttribute('target', '_blank')
		a.click()
		dispatch(closeModal())
	}

	const onSubmit = async () => {
		const user = {
			id: waitlist.congratsModal.data?.payload.payload.id,
		}

		try {
			await paymentVisited(user)
		} catch (error: any) {
			console.error(error)
		}
	}

	const renderFooter = (
		<div className={componentStyles.footerWrapper}>
			<Button
				key='submit'
				type='primary'
				id={styles.buttonPrimary}
				htmlType='submit'
				loading={isLoading}
				onClick={() => {
					onSubmit()
					onOpenNewTab()
				}}
			>
				let&apos;s do it
			</Button>
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

	return (
		<Modal
			centered
			visible={waitlist.congratsModal.isOpen}
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
			<div className={componentStyles.modalBodyWrapper}>
				<Text id={styles.headingText}>
					woohoo! we love {waitlist.congratsModal.data?.referralName} and are
					thrilled to bump you up the waitlist. it&apos;s your time to join
					thousands of women leaders in challenging the status quo.
				</Text>
				<br></br>
				<Text id={styles.headingText} className={componentStyles.fwBold}>
					please make the payment now. the payment option will only be valid for
					the next 72 hours. in case you choose not to pay, you go back on the
					waiting list and we will get in touch with you as soon as we can.
				</Text>
			</div>
		</Modal>
	)
}

export default CongratsModal
