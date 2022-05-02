/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row, Typography } from 'antd'
import MobileAppGallery from 'components/MobileAppGallery'
import StatsBox from 'components/StatsBox'
import Head from 'next/head'
import Image from 'components/Image'
import { useRouter } from 'next/router'
import styles from 'styles/About.module.css'
import commonStyles from 'styles/Common.module.css'
import { useMediaQuery } from 'utils/useMediaQueries'
import GA from 'scripts/GA'
import LI from 'scripts/LI'
import Meta from 'scripts/Meta'

const { Title, Text } = Typography

function About() {
	const router = useRouter()
	const [width] = useMediaQuery()

	return (
		<div>
			<Head>
				<title>leap.club | more women in leadership positions</title>

				{/* <!-- Google Tag Manager --> */}
				<GA />
				{/* <!-- End Google Tag Manager --> */}

				<link rel='shortcut icon' href='https://leap.club/favicon32.ico' />
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='https://leap.club/favicon32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='https://leap.club/favicon32.png'
				/>
				{/* <link rel="manifest" href="./assets/site.webmanifest" /> */}
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
				<meta
					property='og:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://leap.club/about' />
				<meta
					property='og:image'
					content='https://leap.club/leap-new-logo.png'
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
					content='https://leap.club/leap-new-logo.png'
				/>
				<meta
					name='twitter:description'
					content='a social-professional community for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='twitter:card'
					content='https://leap.club/leap-new-logo.png'
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
					content='https://leap.club/leap-new-logo.png'
				/>
			</Head>

			{/* Linkedin Insight tag */}
			<LI />
			{/* Linkedin Insight tag */}

			{/* <!-- Meta Pixel Code --> */}
			<Meta />
			{/* <!-- End Meta Pixel Code → */}

			<Row className={styles.titleWrapper}>
				<Col xs={24}>
					<Title id={styles.titleText}>
						leap.club | more women in leadership positions
					</Title>
				</Col>
			</Row>

			<Row
				justify='space-between'
				// align='middle'
				className={styles.aboutSectionWrapper}
			>
				<Col xs={24} md={12} xxl={10}>
					<Title id={styles.headingText}>
						our mission is more women in leadership positions through a private{' '}
						<br />
						<span className={commonStyles.highlightedTextLight}>
							social-professional{' '}
							<span className={commonStyles.strikeoutBlack}>network</span>{' '}
							community of women.
						</span>
					</Title>
				</Col>
				<Col xs={24} md={10} xxl={10}>
					<div className={styles.imageWrapper}>
						<MobileAppGallery />
					</div>
				</Col>
			</Row>

			<Row
				justify='space-between'
				align='top'
				className={styles.whyExistWrapper}
			>
				<Col xs={24} md={8}>
					<Title id={styles.headingText}>
						why we{' '}
						<span className={commonStyles.highlightedTextLight}>exist</span>
					</Title>
				</Col>
				<Col
					xs={24}
					md={8}
					className={width > 2500 ? styles.pRightMore : styles.pRightLess}
				>
					<Text id={styles.whyExistDescription}>
						women continue to be the most untapped resource in the world and
						once unleashed, have the superpower to change the world.
					</Text>
					<br />
					<br />
					<Text id={styles.whyExistDescription}>
						we are on a mission to accelerate the process and ensure there are
						enough and many women leaders in the world.
					</Text>
				</Col>
				<Col xs={24} md={8}>
					<Text id={styles.whyExistDescription}>
						we believe that when women have a high value network to support them
						and when women have the resources to learn and grow in their
						professional lives, a revolution will be underway.
					</Text>
				</Col>
			</Row>

			<Row
				justify='space-between'
				// align='middle'
				className={styles.genderGraphWrapper}
			>
				<Col xs={24} md={12}>
					<Title id={styles.genderGraphText}>
						women are less likely to be promoted to managerial positions,
					</Title>
					<Text id={styles.genderGraphSubtext}>
						about two thirds of managers end up being men, and from that point
						on, women can never catch up.
					</Text>
				</Col>
				<Col xs={24} md={12}>
					<div className={styles.genderGraphImageWrapper}>
						<Image
							src='/assets/images/gender-image.png'
							alt='Gender Graph'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
			</Row>

			<Row
				justify='space-between'
				align='stretch'
				className={styles.statsWrapper}
			>
				<Col xs={24} md={4}>
					<StatsBox
						topText='65%'
						bottomText='what women earn for performing the same work as men'
						topBackground='#151515'
					/>
				</Col>
				<Col xs={24} md={4}>
					<StatsBox
						topText='2%'
						bottomText='venture capital received by women founders'
						topBackground='#c79d58'
					/>
				</Col>
				<Col xs={24} md={4}>
					<StatsBox
						topText='99%'
						bottomText='women believe that a strong support group and network will advance
								their careers'
						topBackground='#151515'
					/>
				</Col>
				<Col xs={24} md={4}>
					<StatsBox
						topText='$12 trillion'
						bottomText='addition to gdp by 2025. empowering women is not social charity'
						topBackground='#c79d58'
					/>
				</Col>
			</Row>

			<div className={styles.whatAreWeNotWrapper}>
				<Row>
					<Col xs={24}>
						<Title id={styles.headingText}>
							what we are{' '}
							<span className={commonStyles.highlightedTextLight}>not</span>
						</Title>
					</Col>
				</Row>
				<Row justify='space-between'>
					<Col xs={24} md={11}>
						<div className={styles.pointsBox}>
							<Text id={styles.pointHeading}>social charity</Text>
							<Text id={styles.pointDesc}>
								creating women leaders is a $12 trillion economic opportunity
							</Text>
						</div>
					</Col>
					<Col xs={24} md={11}>
						<div className={styles.pointsBox}>
							<Text id={styles.pointHeading}>about male bashing</Text>
							<Text id={styles.pointDesc}>
								we need all genders to come together to make an equal world a
								reality. we are not alienating men, we are simply focusing on
								women
							</Text>
						</div>
					</Col>
				</Row>
			</div>

			<div className={styles.currentOpeningsWrapper}>
				<Row justify='space-between'>
					<Col xs={24} md={11}>
						<Title id={styles.currentOpeningsText}>
							join our mission. we combine exceptional people, hard problems and
							a fun place to work. write to us on{' '}
							<span className={commonStyles.highlightedTextLight}>
								jobs@leap.club
							</span>{' '}
							to explore exciting opportunities.
						</Title>
						{width > 2500 && (
							<Button
								type='primary'
								id={styles.currentOpeningsButton}
								onClick={() => router.push('/careers')}
							>
								view current openings →
							</Button>
						)}
					</Col>
					<Col xs={24} md={12}>
						<div className={styles.teamImage}>
							<img
								src='/assets/images/team-photo.png'
								alt='team members'
								width='100%'
								height='100%'
								loading='lazy'
							/>
						</div>
					</Col>
				</Row>
				{width < 2500 && (
					<Row>
						<Col xs={24}>
							<Button
								type='primary'
								id={styles.currentOpeningsButton}
								onClick={() => router.push('/careers')}
							>
								view current openings →
							</Button>
						</Col>
					</Row>
				)}
			</div>
		</div>
	)
}

export default About
