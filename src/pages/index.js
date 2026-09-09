import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Showcase from '../components/showcase';

const IndexPage = () => {
	return (
		<Layout>
			<SEO
				title="Home"
				description="Asokumar Gurusamy's personal website"
			/>
			<Showcase />
		</Layout>
	);
};

export default IndexPage;
