import React from 'react'
import { Typography } from 'antd'
import styles from './Videocard.module.css'
import { useMediaQuery } from 'utils/useMediaQueries'

type VideoCardPropsType = {
	link: string
	text: string
}

const { Text } = Typography

function VideoCard({ link, text }: VideoCardPropsType) {
	const [width] = useMediaQuery()

	return (
		<div className={styles.videoCardContainer}>
			<iframe
				src={link}
				frameBorder='1'
				height={width > 2500 ? '500' : '100%'}
				width='100%'
			></iframe>
			<div>
				<Text id={styles.subText}>{text}</Text>
			</div>
		</div>
	)
}

export default VideoCard
