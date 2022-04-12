/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import { Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import AdVideos from 'components/AdVideos'
import CongratsModal from 'components/CongratsModal'
import EndSection from 'components/EndSection'
import Jumbotron from 'components/Jumbotron'
import MembersCompanies from 'components/MembersCompanies'
import SkipWaitlistModal from 'components/SkipWaitlistModal'
import SneakPeak from 'components/SneakPeak'
import Testimonials from 'components/Testimonials'
import Waitlist from 'components/Waitlist'
import type { NextPage } from 'next'
import Head from 'next/head'
import GA from 'scripts/GA'
import LI from 'scripts/LI'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const onClickHandler = () => {
		document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div>
			<Head>
				<title>leap.club | more women in leadership positions</title>
				{/* <!-- Google Tag Manager --> */}
				<GA />
				{/* <!-- End Google Tag Manager --> */}

				<link rel='shortcut icon' href='https://leap.club/favicon32.ico' />
				<meta
					name='google-site-verification'
					content='EUd8826EQFjD_zdf_iFDUhABGLNHFP9pOqdV5sCEeWE'
				/>
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
					property='og:image'
					content='https://leap.club/leap-new-logo.png'
				/>
				<meta
					name='description'
					content='a community led professional network for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='og:description'
					content='we are a powerful and private network of women leaders.'
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
					content='https://leap.club/leap-new-logo.png'
				/>
				<meta
					name='twitter:description'
					content='a community led professional network for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta property='twitter:card' content='/leap-new-logo.png' />
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://leap.club/' />
				<meta
					property='twitter:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta
					property='twitter:description'
					content='a community led professional network for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='twitter:image'
					content='https://leap.club/leap-new-logo.png'
				/>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
			</Head>

			{/* Linkedin Insight tag */}
			<LI />
			{/*End of Linkedin Insight tag */}

			{/* <!-- Meta Pixel Code --> */}
			<Meta />
			{/* <!-- End Meta Pixel Code → */}

			{/* Starting of Actual Code */}

			{/* Loading Modals */}
			<SkipWaitlistModal />
			<CongratsModal />
			{/*End of Loading Modals */}

			<Row className={styles.mainSectionWrapper}>
				<Col xs={24} md={12} xxl={9}>
					<Jumbotron />
				</Col>
				<Col xs={24} md={11} id='waitlist'>
					<Waitlist />
				</Col>
			</Row>
			<Row className={styles.membersCompaniesWrapper}>
				<Col span={24}>
					<MembersCompanies />
				</Col>
			</Row>
			<Row className={styles.testimonialsContainer}>
				<Col span={24}>
					<Testimonials />
				</Col>
			</Row>
			<Row className={styles.sneakPeakWrapper}>
				<Col span={24}>
					<SneakPeak />
				</Col>
			</Row>
			<Row className={styles.adVideosContainer}>
				<Col span={24}>
					<AdVideos />
				</Col>
			</Row>
			<Row className={styles.endSectionContainer}>
				<Col span={24}>
					<EndSection onClickHandler={onClickHandler} />
				</Col>
			</Row>
		</div>
	)
}

export default Home
