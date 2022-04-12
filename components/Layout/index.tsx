import React, { ReactChildren, ReactChild } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import SideDrawer from 'components/SideDrawer'
import styles from './Layout.module.css'

interface LayoutProps {
	children: ReactChild | ReactChildren
}

const Layout = ({ children }: LayoutProps) => {
	const onClickHandler = () => {
		document.getElementById('header')?.scrollIntoView(true)
	}

	return (
		<div className={styles.layoutWrapper}>
			<div id='header'>
				<Header />
			</div>
			<SideDrawer />
			<div>{children}</div>
			<Footer scrollToTopHandler={onClickHandler} />
		</div>
	)
}

export default Layout
