import { Divider, Drawer } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { sidebarOpen, toggleSidebar } from 'components/Layout/LayoutSlice'
import Link from 'next/link'
import styles from './SideDrawer.module.css'

const SideDrawer = () => {
	const dispatch = useAppDispatch()
	const isSidebarOpen = useAppSelector(sidebarOpen)

	return (
		<Drawer
			title=''
			placement='right'
			onClose={() => dispatch(toggleSidebar())}
			visible={isSidebarOpen}
			width='60%'
		>
			<div className={styles.wrapper}>
				<Link href='/' passHref>
					<div
						onClick={() => dispatch(toggleSidebar())}
						className={styles.menuText}
					>
						home
					</div>
				</Link>

				<Divider style={{ margin: 0 }} />

				<Link href='/careers' passHref>
					<div
						onClick={() => dispatch(toggleSidebar())}
						className={styles.menuText}
					>
						we&apos;re hiring
					</div>
				</Link>

				<Divider style={{ margin: 0 }} />

				<Link href='/about' passHref>
					<div
						onClick={() => dispatch(toggleSidebar())}
						className={styles.menuText}
					>
						about us
					</div>
				</Link>

				<Divider style={{ margin: 0 }} />

				<a
					href='https://leap.substack.com/'
					target='_blank'
					rel='noreferrer noopener'
				>
					<div
						className={styles.menuText}
						onClick={() => dispatch(toggleSidebar())}
					>
						blog
					</div>
				</a>

				<Divider style={{ margin: 0 }} />

				<a
					href='https://love.leap.club'
					target='_blank'
					rel='noreferrer noopener'
				>
					<div
						className={styles.menuText}
						onClick={() => dispatch(toggleSidebar())}
					>
						testimonials 🙋‍♀️
					</div>
				</a>
			</div>
		</Drawer>
	)
}

export default SideDrawer
