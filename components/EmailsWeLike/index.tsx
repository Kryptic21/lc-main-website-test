/* eslint-disable @next/next/no-img-element */
import { Carousel, Col, Row } from 'antd'
import { emails } from 'constants/constants'
import React from 'react'
import { useMediaQuery } from 'utils/useMediaQueries'
import Gallery from 'react-grid-gallery'
import styles from './EmailsWeLike.module.css'

function EmailsWeLike() {
	const [width] = useMediaQuery()

	return (
		<Row justify='center'>
			<Col xs={24}>
				{width < 800 ? (
					<Carousel autoplay>
						{emails.map((email, index) => (
							<div key={index}>
								<img
									src={email.src}
									width='100%'
									height='100%'
									alt='Team'
									loading='lazy'
								/>
							</div>
						))}
					</Carousel>
				) : (
					<div className={styles.galleryWrapper}>
						<Gallery
							rowHeight={width < 2500 ? 225 : width > 4000 ? 500 : 400}
							images={emails}
						/>
					</div>
				)}
			</Col>
		</Row>
	)
}

export default EmailsWeLike
