import { Carousel, Col, Row } from 'antd'
import Image from 'components/Image'
import React from 'react'
import styles from 'components/MembersCompanies/MembersCompanies.module.css'
import { membersCompaniesImages } from 'constants/constants'

function MembersCompaniesGallery() {
	return (
		<Carousel autoplay>
			<div>
				<Row gutter={[8, 8]} justify='space-between' style={{ width: '100%' }}>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[0].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[1].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[2].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[3].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[4].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[5].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
				</Row>
			</div>

			<div>
				<Row
					// key={company.id}
					gutter={[8, 8]}
					justify='space-between'
					style={{ width: '100%' }}
				>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[6].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[7].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[8].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[9].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[10].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[11].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
				</Row>
			</div>

			<div>
				<Row
					// key={company.id}
					gutter={[8, 8]}
					justify='space-between'
					style={{ width: '100%' }}
				>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[12].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[13].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[14].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[15].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[16].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[17].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
				</Row>
			</div>

			<div>
				<Row
					// key={company.id}
					gutter={[8, 8]}
					justify='space-between'
					style={{ width: '100%' }}
				>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[18].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[19].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[20].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[21].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[22].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<div className={styles.companyCard}>
							<Image
								src={membersCompaniesImages[23].img}
								alt='companies logo'
								width='50'
								height='50'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
				</Row>
			</div>
		</Carousel>
	)
}

export default MembersCompaniesGallery
