import React, { useEffect } from 'react'
import { isAndroid } from 'react-device-detect'

function PageRedirection() {
	useEffect(() => {
		console.log('Inside useEffect')

		if (isAndroid) {
			window.location.href =
				'https://play.google.com/store/apps/details?id=com.leapclub'
		} else {
			window.location.href =
				'https://apps.apple.com/in/app/leap-club/id1534682865'
		}
		return () => {}
	}, [])

	return (
		<div style={{ height: '80vh' }}>
			<h1>redirecting to store...</h1>
		</div>
	)
}

export default PageRedirection
