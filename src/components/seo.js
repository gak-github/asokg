import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function SEO({ description, lang, meta, title, siteMetadata }) {
	const metaDescription = description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | Asokumar G`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: 'keywords',
					content: siteMetadata?.keywords?.join(','),
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: siteMetadata?.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta || [])}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: `Asokumar Gurusamy's perfonal website`,
	title: 'Home',
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default SEO;
