/* eslint-disable @next/next/no-img-element */
import { Col, Row, Typography } from 'antd'
import CommonStyles from '../../styles/Common.module.css'
const { Title, Text } = Typography

import styles from './Jumbotron.module.css'

const Jumbotron = () => {
	return (
		<div className={styles.jumbotronContainer}>
			<Row>
				<Title level={1} id={styles.titleText}>
					more women in
					<br /> leadership positions
				</Title>
			</Row>
			<Row>
				<Title level={3} id={styles.subText}>
					a social-professional{' '}
					<span className={CommonStyles.strikeout}>network</span> community of
					women. make new connections & friends, join communities, and access
					exclusive experiences.
				</Title>
			</Row>
			<Row className={styles.smallTextWrapper}>
				<Text id={styles.smallText}>
					~7000 paying members across industries, experience levels, cities.
					join the revolution!
				</Text>
			</Row>
			<Row justify='space-between' className={styles.phIconsWrapper}>
				<Col xs={12}>
					<img
						src='/assets/icons/product-of-the-day.svg'
						alt='leap.club - A community-led professional network for women | Product Hunt'
						className={styles.productHuntIcons}
						loading='lazy'
					/>
				</Col>
				<Col xs={12}>
					<img
						src='/assets/icons/golden-kitty-badge.svg'
						alt='leap.club - A community-led professional network for women | Product Hunt'
						className={styles.productHuntIcons}
						loading='lazy'
					/>
				</Col>
			</Row>
		</div>
	)
}

export default Jumbotron
