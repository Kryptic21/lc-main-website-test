/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'antd'
import styles from './MobileAppGallery.module.css'

function MobileAppGallery() {
	return (
		<Carousel autoplay dots={false} className={styles.carouselWrapper}>
			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-7.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-8.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-9.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-10.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-11.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-12.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>

			<div className={styles.imageWrapper}>
				<img
					src='/assets/images/app-ss-13.jpg'
					className={styles.image}
					alt='Mobile App Image'
					// loading='lazy'
				/>
			</div>
		</Carousel>
	)
}

export default MobileAppGallery
