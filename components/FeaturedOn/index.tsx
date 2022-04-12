import { Col, Row, Typography } from 'antd'
import Image from 'components/Image'
import styles from 'styles/Careers.module.css'
import commonStyles from 'styles/Common.module.css'

const { Title } = Typography

function FeaturedOn() {
	return (
		<>
			<Row
				gutter={[8, 8]}
				justify='space-between'
				align='middle'
				style={{ width: '100%' }}
			>
				<Col className='gutter-row' xs={24} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/et.png'
							alt='companies logo'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={24} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/yourstory.png'
							alt='companies logo'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={24} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/inc42.png'
							alt='companies logo'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={24} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/fortune.png'
							alt='companies logo'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={24}>
					<Title id={styles.andMoreText} className={commonStyles.textCenter}>
						and more
					</Title>
				</Col>
			</Row>
		</>
	)
}

export default FeaturedOn
