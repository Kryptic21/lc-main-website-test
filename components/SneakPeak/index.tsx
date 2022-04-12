import React from 'react'
import { Col, Row, Typography } from 'antd'
import styles from './SneakPeak.module.css'

const { Title } = Typography

function SneakPeak() {
	return (
		<div>
			<Row justify='space-between' align='middle'>
				<Col xs={24} md={0}>
					<Title id={styles.sneakPeakText}>
						here&apos;s sneak peek of what we&apos;ve built
					</Title>
				</Col>
				<Col xs={24} md={11}>
					<div className={styles.videoContainer}>
						<iframe
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/P21-WiKc8lE?autoplay=0&amp;mute=1&amp;rel=0'
							title='customer experience'
						></iframe>
					</div>
				</Col>
				<Col xs={0} md={11}>
					<Title id={styles.sneakPeakText}>
						here&apos;s sneak peek of what we&apos;ve built.
					</Title>
				</Col>
			</Row>
		</div>
	)
}

export default SneakPeak
