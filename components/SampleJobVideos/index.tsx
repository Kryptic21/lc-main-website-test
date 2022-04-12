import { Col, Row } from 'antd'
import React from 'react'
import { useMediaQuery } from 'utils/useMediaQueries'
import styles from './SampleVideos.module.css'

function SampleJobVideos() {
	const [width] = useMediaQuery()

	return (
		<Row justify='space-between'>
			<Col xs={24} md={7}>
				<iframe
					width='100%'
					height={width > 2500 ? '400' : '200'}
					src='https://youtube.com/embed/Gtq-YL7fIVM'
					title='Youtube Videos'
					frameBorder='0'
					className={styles.videosWeLikeContainer}
				></iframe>
			</Col>
			<Col xs={24} md={7}>
				<iframe
					width='100%'
					height={width > 2500 ? '400' : '200'}
					src='https://youtube.com/embed/lXifOZ9dKgM'
					title='Youtube Videos'
					frameBorder='0'
					className={styles.videosWeLikeContainer}
				></iframe>
			</Col>
			<Col xs={24} md={7}>
				<iframe
					width='100%'
					height={width > 2500 ? '400' : '200'}
					src='https://youtube.com/embed/4icp1Bph8YU'
					title='Youtube Videos'
					frameBorder='0'
					className={styles.videosWeLikeContainer}
				></iframe>
			</Col>
		</Row>
	)
}

export default SampleJobVideos
