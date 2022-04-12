import { Col, Row } from 'antd'
import React from 'react'
import { useMediaQuery } from 'utils/useMediaQueries'
import styles from './StatsBox.module.css'

type StatsBoxPropsType = {
	topText: string
	bottomText: string
	topBackground: string
}

function StatsBox({ topText, bottomText, topBackground }: StatsBoxPropsType) {
	const [width] = useMediaQuery()

	return (
		<>
			<Row>
				<Col xs={24}>
					<div
						style={{
							background: topBackground,
							width:
								topText === '$12 trillion' && width < 2500 && width > 800
									? '200px'
									: '100%',
						}}
						className={styles.statsBoxTop}
					>
						{topText}
					</div>
				</Col>
			</Row>
			<Row
				style={{
					minHeight: '100%',
					textAlign: 'center',
					width:
						topText === '$12 trillion' && width < 2500 && width > 800
							? '200px'
							: '100%',
				}}
			>
				<Col className={styles.statsBoxBottom}>{bottomText}</Col>
			</Row>
		</>
	)
}

export default StatsBox
