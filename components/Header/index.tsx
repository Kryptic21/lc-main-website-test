import { Row, Col, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import Image from 'components/Image'
import styles from './Header.module.css'
import Link from 'next/link'
import { useAppDispatch } from 'app/hooks'
import { toggleSidebar } from 'components/Layout/LayoutSlice'

const Header = () => {
	const dispatch = useAppDispatch()

	return (
		<Row className={styles.headerDiv} justify='space-between' align='middle'>
			<Col flex='none'>
				<Link href='/' passHref>
					<div className={styles.imageWrapper}>
						<Image
							src='/assets/images/leap-club-logo.png'
							alt='leap club logo'
							width='100%'
							height='100%'
							objectFit='contain'
						/>
					</div>
				</Link>
			</Col>
			<Col flex='auto'></Col>

			<Col xs={0} md={14}>
				<div className={styles.linksWrapper}>
					<Link href='/' passHref>
						<div className={styles.headerButton}>home</div>
					</Link>

					<Link href='/careers' passHref>
						<div className={styles.headerButtonHighlighted}>
							we&apos;re hiring
						</div>
					</Link>

					<Link href='/about' passHref>
						<div className={styles.headerButton}>about us</div>
					</Link>

					<a
						href='https://leap.substack.com/'
						target='_blank'
						rel='noreferrer noopener'
					>
						<div className={styles.headerButton}>blog</div>
					</a>
					<a
						href='https://love.leap.club'
						target='_blank'
						rel='noreferrer noopener'
					>
						<div className={styles.headerButton}>testimonials 🙋‍♀️</div>
					</a>
				</div>
			</Col>
			<Col xs={12} md={0}>
				<div className={styles.menuIconWrapper}>
					<Button
						icon={<MenuOutlined />}
						size='large'
						onClick={() => dispatch(toggleSidebar())}
					/>
				</div>
			</Col>
		</Row>
	)
}

export default Header
