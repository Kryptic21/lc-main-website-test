/* eslint-disable @next/next/no-img-element */
import { teamMembersPhotos } from 'constants/constants'
import React from 'react'
import Carousel from 'react-grid-carousel'
import styles from './TeamGallery.module.css'

function TeamGallery() {
	return (
		<Carousel
			responsiveLayout={[
				{ breakpoint: 1000, cols: 3 },
				{ breakpoint: 750, cols: 2, rows: 1, gap: 5 },
				{ breakpoint: 499, cols: 1, autoplay: 2000, loop: true },
			]}
			showDots={true}
			cols={5}
			rows={2}
			gap={10}
			loop
		>
			{teamMembersPhotos.map((teamMember, index) => (
				<Carousel.Item key={index}>
					<div className={styles.containerNew}>
						<img
							width='100%'
							height='100%'
							src={teamMember.src}
							alt='Avatar'
							className={styles.image}
							loading='lazy'
						></img>

						<div className={styles.overlay}>
							<div className={styles.text}>{teamMember.description}</div>
						</div>
					</div>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default TeamGallery
