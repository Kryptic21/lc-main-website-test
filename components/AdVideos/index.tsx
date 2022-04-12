import { Col, Row, Typography } from 'antd'
import React from 'react'
import styles from './AdVideos.module.css'
import { useMediaQuery } from 'utils/useMediaQueries'

const { Text } = Typography

function AdVideos() {
	const [width] = useMediaQuery()

	return (
		<div style={{ width: '100%' }}>
			<Row gutter={16} justify='space-between' align='middle'>
				<Col xs={24} md={8} className={styles.adText}>
					{width > 800 ? (
						<Text id={styles.titleText}>
							why we do, <br />
							what we do
						</Text>
					) : (
						<Text id={styles.titleText}>why we do, what we do</Text>
					)}
				</Col>
				<Col xs={24} md={8}>
					<div className={styles.videoContainer}>
						<iframe
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/LFMJqjK4bdA?autoplay=0&amp;mute=1&amp;rel=0'
							title='leap club ads'
						></iframe>
					</div>
				</Col>
				<Col xs={24} md={8}>
					<div className={styles.videoContainer}>
						<iframe
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/2u8ea9oMTqc?autoplay=0&amp;mute=1&amp;rel=0'
							title='leap club ads'
						></iframe>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default AdVideos
