import React from 'react'
import { Button, Typography } from 'antd'
import styles from './EndSection.module.css'

const { Title } = Typography

type PropsType = {
	onClickHandler: () => void
}

function EndSection({ onClickHandler }: PropsType) {
	return (
		<div className={styles.endSectionWrapper}>
			<Title id={styles.endSectionText}>yeh kadam nahi chalang hai</Title>
			<Title id={styles.endSectionTextHindi}>ये कदम नहीं, छलांग है </Title>
			<Button id={styles.buttonPrimary} onClick={onClickHandler}>
				join the waitlist
			</Button>
		</div>
	)
}

export default EndSection
