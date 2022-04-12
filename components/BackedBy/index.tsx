import { Carousel, Col, Row, Typography } from 'antd'
import { investors } from 'constants/constants'
import Image from 'components/Image'
import React from 'react'
import { useMediaQuery } from 'utils/useMediaQueries'
import styles from 'styles/Careers.module.css'
import commonStyles from 'styles/Common.module.css'

const { Title, Text } = Typography

function BackedBy() {
	const [width] = useMediaQuery()

	return (
		<div className={styles.backedBySectionWrapper}>
			<Row justify='center'>
				<Col xs={24}>
					<Title
						className={commonStyles.textCenter}
						id={styles.foundingMembersSectionHeading}
					>
						we are backed by the{' '}
						<span className={commonStyles.highlightedTextLight}>best</span>
					</Title>
				</Col>
			</Row>

			<Row
				gutter={[8, 8]}
				justify={width > 800 ? 'space-between' : 'center'}
				align='middle'
				style={{ width: '100%' }}
			>
				<Col className='gutter-row' xs={12} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/firstcheque.png'
							alt='companies logo'
							width={width > 2500 ? '350' : '150'}
							height='100%'
							// layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={12} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/whiteboard_capital.png'
							alt='companies logo'
							width={width > 2500 ? '350' : '150'}
							height='100%'
							// layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={12} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/enzia.png'
							alt='companies logo'
							width={width > 2500 ? '350' : '150'}
							height='100%'
							// layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={12} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/artha_ventures.png'
							alt='companies logo'
							width={width > 2500 ? '350' : '150'}
							height='100%'
							// layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={12} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/titan_capital.png'
							alt='companies logo'
							width={width > 2500 ? '350' : '150'}
							height='100%'
							// layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
			</Row>

			{width < 800 ? (
				<Carousel autoplay>
					{investors.map((investor, index) => (
						<div key={index} className={styles.investorsCard}>
							<Image
								src={investor.src}
								alt='companies logo'
								width='150'
								height='200'
								// layout='fill'
								objectFit='contain'
							/>
							<Text id={styles.investorName}>{investor.name}</Text>
							<Text id={styles.investorDescription}>
								{investor.description}
							</Text>
						</div>
					))}
				</Carousel>
			) : (
				<>
					<Row
						gutter={[8, 8]}
						justify={width > 800 ? 'space-between' : 'center'}
						align='middle'
						style={{ width: '100%', marginTop: '2rem' }}
					>
						{investors.slice(0, 4).map((investor) => (
							<Col key={investor.id} className='gutter-row' xs={12} md={4}>
								<div className={styles.investorsCard}>
									<Image
										src={investor.src}
										alt='companies logo'
										width={width > 2500 ? '350' : '150'}
										height={width > 2500 ? '300' : '150'}
										// layout='fill'
										objectFit='contain'
									/>
									<Text id={styles.investorName}>{investor.name}</Text>
									<Text id={styles.investorDescription}>
										{investor.description}
									</Text>
								</div>
							</Col>
						))}
					</Row>

					<Row
						gutter={[8, 8]}
						justify={width > 800 ? 'space-between' : 'center'}
						align='middle'
						style={{ width: '100%' }}
					>
						{investors.slice(4, 8).map((investor) => (
							<Col key={investor.id} className='gutter-row' xs={12} md={4}>
								<div className={styles.investorsCard}>
									<Image
										src={investor.src}
										alt='companies logo'
										width='150'
										height='200'
										// layout='fill'
										objectFit='contain'
									/>
									<Text id={styles.investorName}>{investor.name}</Text>
									<Text id={styles.investorDescription}>
										{investor.description}
									</Text>
								</div>
							</Col>
						))}
					</Row>
				</>
			)}

			<Row>
				<Col xs={24}>
					<Title className={commonStyles.textCenter} id={styles.andMoreText}>
						and more
					</Title>
				</Col>
			</Row>
		</div>
	)
}

export default BackedBy
