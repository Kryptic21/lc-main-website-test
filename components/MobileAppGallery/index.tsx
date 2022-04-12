/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'antd'
import styles from './MobileAppGallery.module.css'

function MobileAppGallery() {
	return (
		<Carousel autoplay dots={false} className={styles.carouselWrapper}>
			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-1.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-2.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-3.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-4.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-5.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-6.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>
		</Carousel>
	)
}

export default MobileAppGallery
