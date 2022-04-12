/* eslint-disable @next/next/no-img-element */
import { Carousel, Col, Row } from 'antd'
import styles from './TeamFaces.module.css'

function TeamFaces() {
	return (
		<Row justify='center'>
			<Col xs={24} md={12}>
				<Carousel autoplay>
					<div className={styles.teamImageStyle}>
						<img
							src='/assets/images/team-image-5.png'
							width='100%'
							height='100%'
							alt='Team'
							loading='lazy'
						/>
					</div>
					<div className={styles.teamImageStyle}>
						<img
							src='/assets/images/team-image-6.png'
							width='100%'
							height='100%'
							alt='Team'
							loading='lazy'
						/>
					</div>
					<div className={styles.teamImageStyle}>
						<img
							src='/assets/images/team-image-7.jpg'
							width='100%'
							height='100%'
							alt='Team'
							loading='lazy'
						/>
					</div>
					<div className={styles.teamImageStyle}>
						<img
							src='/assets/images/team-image-8.jpg'
							width='100%'
							height='100%'
							alt='Team'
							loading='lazy'
						/>
					</div>
				</Carousel>
			</Col>
		</Row>
	)
}

export default TeamFaces
