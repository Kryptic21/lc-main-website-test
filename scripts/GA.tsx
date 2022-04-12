/* eslint-disable @next/next/next-script-for-ga */
import React from 'react'

export default function GA() {
	return (
		<>
			{/* <!-- Google Tag Manager --> */}
			<script
				dangerouslySetInnerHTML={{
					__html: `(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != "dataLayer" ? "&l=" + l : "";
				j.async = true;
				j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, "script", "dataLayer", "GTM-TPCMFN4");`,
				}}
			></script>

			<script
				async
				src='https://www.googletagmanager.com/gtag/js?id=UA-156456027-1'
			></script>
			<script
				type='text/javascript'
				dangerouslySetInnerHTML={{
					__html: `
				var googleTrackingId = "UA-156456027-1";`,
				}}
			></script>
			{/* <!-- End Google Tag Manager --> */}
			{/* <!-- Google Tag Manager (noscript) --> */}
			<noscript>
				<iframe
					src='https://www.googletagmanager.com/ns.html?id=GTM-TPCMFN4'
					height='0'
					width='0'
					style={{ display: 'none', visibility: 'hidden' }}
				></iframe>
			</noscript>
			{/* <!-- End Google Tag Manager (noscript) --> */}
		</>
	)
}
