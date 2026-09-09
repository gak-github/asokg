import React from 'react';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
