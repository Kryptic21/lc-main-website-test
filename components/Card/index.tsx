import React from 'react'
import { Row, Col, Typography } from 'antd'
import Image from 'components/Image'
import styles from './Card.module.css'

type CardPropsType = {
	icon: string
	heading: string
	description: string
}

const { Text } = Typography

function Card({ icon, heading, description }: CardPropsType) {
	return (
		<Row justify='space-between' align='top'>
			<Col xs={24}>
				<div className={styles.cardContainer}>
					<div className={styles.cardImage}>
						<Image src={icon} alt='icon' layout='fill' objectFit='contain' />
					</div>
					<div className={styles.cardContent}>
						<Text id={styles.cardHeading}>{heading}</Text>
						<Text id={styles.cardDescription}>{description}</Text>
					</div>
				</div>
			</Col>
		</Row>
	)
}

export default Card
