import { Col, Row, Typography } from 'antd'
import Image from 'components/Image'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'utils/useMediaQueries'
const { Text } = Typography

import styles from './Footer.module.css'

type PropsType = {
	scrollToTopHandler: () => void
}

const Footer = ({ scrollToTopHandler }: PropsType) => {
	console.log(scrollToTopHandler)
	const [width] = useMediaQuery()
	const router = useRouter()
	const onClickHandler = (path: string) => {
		router.push(
			{
				pathname: path,
			}
			// undefined,
			// { scroll: true }
		)
		// scrollToTopHandler()
	}

	return (
		<div className={styles.footerContainer}>
			<Row justify='space-between'>
				<Col xs={24} md={11}>
					<div className={styles.companyDetailsWrapper}>
						<div
							style={{
								width: width > 800 ? '5vw' : '50px',
								maxWidth: '150px',
							}}
						>
							<Image
								src='/assets/images/footer-logo.jpg'
								alt='Leap club logo'
								width='100%'
								height='100%'
								objectFit='contain'
							/>
						</div>
						<Text style={{ color: '#fff', margin: '1rem 0' }}>
							leap.club is a members only app.
						</Text>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<a
								href='https://play.google.com/store/apps/details?id=com.leapclub'
								style={{ marginRight: '1rem' }}
							>
								<Image
									src='/assets/images/android-logo.png'
									alt='Android Logo'
									width='48'
									height='48'
								/>
							</a>
							<a
								href='https://apps.apple.com/in/app/leap-club/id1534682865'
								style={{ marginRight: '1rem' }}
							>
								<Image
									src='/assets/images/apple-logo.png'
									alt='Apple Logo'
									width='48'
									height='48'
								/>
							</a>
						</div>
					</div>
				</Col>

				<Col xs={24} md={11}>
					<div className={styles.companyDetailsWrapperRight}>
						<div className={styles.socialHandles}>
							<a
								href='https://www.linkedin.com/company/leapclub'
								target='_blank'
								rel='noreferrer'
								style={{ marginRight: '2rem' }}
							>
								<Image
									src='/assets/images/LinkedInLogo.png'
									alt='Linkedin Logo'
									width={48}
									height={48}
								/>
							</a>
							<a
								href='https://www.instagram.com/leap.club/'
								target='_blank'
								rel='noreferrer'
								style={{ marginRight: '2rem' }}
							>
								<Image
									src='/assets/images/Instagram.png'
									alt='Instagram Logo'
									width={48}
									height={48}
								/>
							</a>
							<a
								href='https://twitter.com/leapdotclub'
								target='_blank'
								rel='noreferrer'
								style={{ marginRight: '2rem' }}
							>
								<Image
									src='/assets/images/Twitter.png'
									alt='Twitter Logo'
									width={48}
									height={48}
								/>
							</a>
							<Text>
								<a href='mailto:hi@leap.club' style={{ color: '#fff' }}>
									hi@leap.club
								</a>
							</Text>
						</div>
						<Text style={{ color: '#fff' }}>
							the circle, huda city centre, gurgaon.
						</Text>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xs={24}>
					<div
						style={{
							border: '1px solid rgba(255, 255, 255, 0.4)',
							margin: '2rem 0 1rem 0',
						}}
					></div>
				</Col>
			</Row>

			<Row justify={width > 800 ? 'space-between' : 'start'}>
				<Col xs={24} md={11}>
					<Text style={{ color: '#fff' }}>
						copyright © 2022 konflake tech pvt. ltd. all rights reserved.
					</Text>
				</Col>
				<Col xs={24} md={11} className={styles.termsAndConditions}>
					<Text style={{ color: '#fff' }}>
						read our {/* <Link href='/terms_of_use' passHref> */}
						<Text
							style={{
								color: '#c1c1c1',
								textDecoration: 'underline',
								cursor: 'pointer',
							}}
							onClick={() => onClickHandler('/terms_of_use')}
						>
							terms and conditions
						</Text>
						&nbsp;and&nbsp;
						<Text
							style={{
								color: '#c1c1c1',
								textDecoration: 'underline',
								cursor: 'pointer',
							}}
							onClick={() => onClickHandler('/privacy_policy')}
						>
							privacy policy
						</Text>
						.
					</Text>
				</Col>
			</Row>
		</div>
	)
}

export default Footer
