exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
	const config = getConfig()
	if (stage.startsWith('develop') && config.resolve) {
		config.resolve.alias = {
			...config.resolve.alias,
			'react-dom': '@hot-loader/react-dom'
		}
	}
	if (stage === 'build-html' || stage === 'develop-html') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /firebase/,
						use: loaders.null()
					}
				]
			}
		})
	}
}
