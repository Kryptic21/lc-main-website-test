/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row, Typography } from 'antd'
import TestimonialsCarousel from 'components/TestimonialsCarousel'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Careers.module.css'
import TeamGallery from 'components/TeamGallery'
import { useMediaQuery } from 'utils/useMediaQueries'
// import Jobs from 'components/Jobs'
// import TeamMembersVideos from 'components/TeamMembersVideos'
import ValuesAndPrinciples from 'components/ValuesAndPrinciples'
import PerksSection from 'components/PerksSection'
// import SampleJobVideos from 'components/SampleJobVideos'
// import EmailsWeLike from 'components/EmailsWeLike'
import BackedBy from 'components/BackedBy'
import FeaturedOn from 'components/FeaturedOn'
import TeamFaces from 'components/TeamFaces'
import CommonStyles from 'styles/Common.module.css'
import GA from 'scripts/GA'
import LI from 'scripts/LI'
import Meta from 'scripts/Meta'

const { Title, Text } = Typography

const Careers: NextPage = () => {
	const [width] = useMediaQuery()

	return (
		<div>
			<Head>
				<title>leap.club | more women in leadership positions</title>
				<link rel='shortcut icon' href='https://leap.club/favicon32.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,max-width=100%'
				/>
				<meta
					property='og:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://leap.club/careers' />
				<meta
					property='og:image'
					content='https://leap.club/careers-page-revised.png'
				/>
				<meta
					name='description'
					content='a social-professional community for women. make new connections, join communities, and access exclusive experiences.'
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
				<meta property='twitter:url' content='https://leap.club/careers/' />
				<meta
					name='image'
					property='twitter:image'
					content='https://leap.club/careers-page-revised.png'
				/>
				<meta
					name='twitter:description'
					content='we are a powerful and private network of women leaders.'
				/>
				<meta
					property='twitter:card'
					content='https://leap.club/careers-page-revised.png'
				/>
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://leap.club/careers' />
				<meta
					property='twitter:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta
					property='twitter:description'
					content='we are a powerful and private network of women leaders.'
				/>
				<meta
					property='twitter:image'
					content='https://leap.club/careers-page-revised.png'
				/>
			</Head>

			{/* <!-- Google Tag Manager --> */}
			<GA />
			{/* <!-- End Google Tag Manager --> */}

			{/* Linkedin Insight tag */}
			<LI />

			{/*End of Linkedin Insight tag */}

			{/* <!-- Meta Pixel Code --> */}
			<Meta />
			{/* <!-- End Meta Pixel Code → */}

			<Row className={styles.titleWrapper}>
				<Col xs={24}>
					<Title id={styles.titleText}>
						let&apos;s build a company together - join our all star founding
						team
					</Title>
				</Col>
			</Row>
			<div className={styles.companyPitch}>
				<Row justify='space-between' align='middle'>
					<Col xs={24} md={10}>
						<div className={CommonStyles.flexCol}>
							<Text
								id={styles.companyPitchText}
								className={CommonStyles.mb2rem}
							>
								we are building a social-professional{' '}
								<span className={CommonStyles.strikeout}>network</span> community of
								women with a simple mission - more women in leadership
								positions. we launched in may 2020, have early product-market
								fit and strong business signals. we are backed by some of the
								best investors in india.
							</Text>
							<Text id={styles.companyPitchText}>
								click{' '}
								<a
									href='https://love.leap.club'
									target='_blank'
									rel='noreferrer noopener'
								>
									here
								</a>{' '}
								to read what our members say about us ❤️
							</Text>
						</div>
					</Col>
					<Col xs={24} md={10}>
						<TestimonialsCarousel />
					</Col>

					<Row justify='center' style={{ width: '100%', paddingTop: '3rem' }}>
						<Col
							xs={24}
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<a
								href='https://leapclub.kekahire.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button type='primary' id={styles.currentOpeningsButton}>
									view all positions →
								</Button>
							</a>
						</Col>
					</Row>
				</Row>
			</div>

			{/* Team Members Gallery */}
			<div className={styles.teamMembersWrapper}>
				<Row>
					<Col xs={24}>
						<Title id={styles.foundingMembersSectionHeading}>
							our founding team members have previously built companies like
							zomato, uber, linkedin, byju&apos;s and facebook. meet a few of
							them here
						</Title>
					</Col>
				</Row>

				<Row>
					<Col xs={24}>
						<TeamGallery />
					</Col>
				</Row>
			</div>
			{/* End of Team Members Gallery */}

			{/* Team Members Videos Section */}

			{/* <div className={styles.teamMembersVideosWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title id={styles.foundingMembersSectionHeading}>
							👀 here are some videos that will tell you more about our team and
							their experience of building leap.club
						</Title>
					</Col>
				</Row>
				<TeamMembersVideos />
			</div> */}

			{/* End of Team Members Videos Section */}

			{/* Values and guiding principles section */}
			<div className={styles.teamMembersVideosWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							id={styles.foundingMembersSectionHeading}
							className={`${styles.textHeader}`}
						>
							📝 our values and guiding principles
						</Title>
					</Col>
				</Row>

				<ValuesAndPrinciples />
			</div>
			{/* End of Values and guiding principles section */}

			{/* Perks Section */}
			<div className={styles.perksSectionWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							id={styles.foundingMembersSectionHeading}
							className={styles.textHeader}
						>
							🎉 perks of working at leap.club
						</Title>
					</Col>
				</Row>
				<PerksSection />
			</div>
			{/* End of Perks Section */}

			{/* Jobs Section */}
			<div className={styles.jobsSectionWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						{/* <Title id={styles.jobsSectionHeading}>
							we are a sports team and everyone works hard to not drop the
							baton. check out our open positions below. please send a 1-2 min
							self recorded video 🎥 along with your application telling us why
							you think you should join us. write to us at{' '}
							<span className={CommonStyles.highlightedText}>
								jobs@leap.club
							</span>
						</Title> */}
					</Col>
				</Row>

				<Row justify='center' style={{ width: '100%', paddingTop: '2rem' }}>
					<Col
						xs={24}
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<a
							href='https://leapclub.kekahire.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button type='primary' id={styles.currentOpeningsButton}>
								view all positions →
							</Button>
						</a>
					</Col>
				</Row>
				{/* Add/remove jobs from the below component */}
				{/* <Jobs /> */}

				<div
					className={width > 800 ? styles.mTopMore : styles.mTopLess}
					style={{ textAlign: 'center' }}
				>
					{/* <Text id={styles.noJobsMatchText}>
						can’t find an open position of your interest? write to us and if we
						like each other, we will find a role for you.
					</Text> */}
					<Text
						id={styles.noJobsMatchText}
						style={{ textAlign: 'center', width: '100%' }}
					>
						can&apos;t find an open position of your interest? write to us
						at&nbsp;
						<span className={CommonStyles.highlightedText}>
							jobs@leap.club
						</span>{' '}
						and if we like each other, we will find a role for you.
					</Text>
				</div>
			</div>
			{/*End of Jobs Section */}

			{/* Sample Job Videos */}

			{/* <div className={styles.sampleJobVideosWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title id={styles.foundingMembersSectionHeading}>
							the kind of videos we like:
						</Title>
					</Col>
				</Row>
				<SampleJobVideos />
			</div> */}

			{/*End of Sample Job Videos */}

			{/* Emails we Like Section */}

			{/* <div className={styles.emailsSectionWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title id={styles.foundingMembersSectionHeading}>
							the kind of emails we like:
						</Title>
					</Col>
				</Row>
				<EmailsWeLike />
			</div> */}

			{/*End of Emails we Like Section */}

			{/* Team faces */}
			<div className={styles.teamMembersPhotosWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title id={styles.foundingMembersSectionHeading}>
							a few happy faces from our team meet ups
						</Title>
					</Col>
				</Row>
				<TeamFaces />
			</div>

			{/* End of Team faces */}

			<BackedBy />

			{/* End Of Backed By Section */}

			{/* Featured on Section */}
			<div className={styles.featuredOnWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title id={styles.foundingMembersSectionHeading}>
							we have been featured on
						</Title>
					</Col>
				</Row>
				<FeaturedOn />
			</div>
			{/* Featured on Section */}
		</div>
	)
}

export default Careers
