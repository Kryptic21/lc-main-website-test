import { Col, Row } from 'antd'
import VideoCard from 'components/VideoCard'
import React from 'react'

function TeamMembersVideos() {
	return (
		<Row justify='space-between' style={{ padding: '0.5rem' }}>
			<Col xs={24} md={6}>
				<VideoCard
					link='https://youtube.com/embed/SihSIlXQFm4'
					text='‘meet our first team member’'
				/>
			</Col>
			<Col xs={24} md={6}>
				<VideoCard
					link='https://youtube.com/embed/FdJmM2AaZmA'
					text='‘building leap with an incredible team’'
				/>
			</Col>
			<Col xs={24} md={6}>
				<VideoCard
					link='https://youtube.com/embed/QG9DWbylotE'
					text='‘becoming a founding team member’'
				/>
			</Col>
			<Col xs={24} md={6}>
				<VideoCard
					link='https://youtube.com/embed/5ECw8jpAC1o'
					text="‘shit we've heard while building leap.club’"
				/>
			</Col>
		</Row>
	)
}

export default TeamMembersVideos
