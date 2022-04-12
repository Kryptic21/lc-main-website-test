import { Col, Row } from 'antd'
import Card from 'components/Card'
import React from 'react'

function ValuesAndPrinciples() {
	return (
		<>
			<Row justify='space-between'>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/think.svg'
						heading='first principle thinking'
						description='when in doubt, ask yourself, will this help our mission? if yes, do it'
					/>
				</Col>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/process.svg'
						heading='process ≠ progress'
						description='innovation is our best friend and getting attached to a process, our worst enemy. everything can be improved'
					/>
				</Col>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/80-20.svg'
						heading='80/20'
						description="feedback moves things forward and helps you grow. don't get offended or take it personally. when giving feedback, focus on the 'delta'. the 20% that can change the 80%"
					/>
				</Col>
			</Row>
			<Row justify='space-between' style={{ marginTop: '2rem' }}>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/dream-big.svg'
						heading='dream big'
						description='we believe we are building a multi unicorn. remember, nothing big ever comes easy. work hard. enjoy the ride'
					/>
				</Col>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/right.svg'
						heading='right > fast'
						description='play the long game'
					/>
				</Col>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/priority.svg'
						heading='prioritize ruthlessly'
						description='focus on needle movers only'
					/>
				</Col>
			</Row>
		</>
	)
}

export default ValuesAndPrinciples
