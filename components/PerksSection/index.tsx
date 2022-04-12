import { Col, Row } from 'antd'
import Card from 'components/Card'

function PerksSection() {
	return (
		<>
			<Row justify='space-between'>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/leave-policy.svg'
						heading='flexible leave policy'
						description='vacation leaves, wellness leaves, compulsory down time'
					/>
				</Col>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/5-day-work.svg'
						heading='5 day work week'
						description='we try to combine speed with enough downtime. burnouts are real'
					/>
				</Col>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/esop.svg'
						heading="esop's & regular appraisals"
						description="let's win together"
					/>
				</Col>
			</Row>
			<Row justify='space-between' style={{ marginTop: '2rem' }}>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/remote-work.svg'
						heading='remote work'
						description='gurgaon is our hq but you decide where you want to work from'
					/>
				</Col>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/dreamers.svg'
						heading='dreamers'
						description='you work with folks who dream big and want to build a multi unicorn'
					/>
				</Col>
				<Col xs={24} md={7}>
					<Card
						icon='/assets/icons/diversity.svg'
						heading='diversity goals'
						description='72% of the team is women'
					/>
				</Col>
			</Row>
		</>
	)
}

export default PerksSection
