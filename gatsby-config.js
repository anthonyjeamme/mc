module.exports = {
	siteMetadata: {
		title: `Mon parcours`,
		description: ``,
		author: `@lambda`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Mon parcours`,
				short_name: `Mon parcours`,
				start_url: `/`,
				background_color: `#1dcdfc`,
				theme_color: `#1dcdfc`,
				display: `fullscreen`
				// icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-sass`, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
		`gatsby-plugin-offline`,
		'gatsby-plugin-webpack-bundle-analyzer'
	]
}
