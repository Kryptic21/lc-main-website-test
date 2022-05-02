import Head from 'next/head'
import { Typography, Row, Col } from 'antd'
import styles from 'styles/ThankYou.module.css'

const { Title, Text } = Typography

function ThankYou() {
	return (
		<div>
			<Head>
				<title>leap.club | more women in leadership positions</title>
				<link rel='shortcut icon' href='/favicon32.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='./assets/apple-touch-icon.png'
				/>
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon32.png' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
				<meta
					property='og:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://leap.club' />
				<meta
					name='image'
					property='og:image'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap_og_image.jpg'
				/>
				<meta
					name='description'
					content='a social-professional community for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='og:description'
					content='a social-professional community for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='twitter:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta property='twitter:type' content='website' />
				<meta property='twitter:url' content='https://leap.club' />
				<meta
					name='image'
					property='twitter:image'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap_og_image.jpg'
				/>
				<meta
					name='twitter:description'
					content='a social-professional community for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='twitter:card'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap_og_image.jpg'
				/>
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://leap.club/' />
				<meta
					property='twitter:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta
					property='twitter:description'
					content='a social-professional community for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='twitter:image'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap_og_image.jpg'
				/>
			</Head>
			<Row>
				<div className={styles.wrapper}>
					<Col xs={24}>
						<Title level={2} id={styles.titleText}>
							thank you for joining our mission.
						</Title>
					</Col>
					<Col xs={24}>
						<div className={styles.subTextWrapper}>
							<Text id={styles.subText}>
								we onboard a limited number of members every month and will be
								in touch as soon as new memberships open up. we are excited for
								you to join our community of 5000+ women. let&apos;s leap 🚀
							</Text>
						</div>
					</Col>
				</div>
			</Row>
		</div>
	)
}

export default ThankYou
