import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import LayoutHeader from './LayoutHeader'

import './Layout.scss'

export const LayoutParamsContext = createContext({
	showHeaderMobile: true,
	setParams: () => {}
})

export const LayoutParamsProvider = ({ children }) => {
	const [params, setParams] = useState({
		showHeaderMobile: true
	})

	return (
		<LayoutParamsContext.Provider
			value={{
				...params,
				setParams
			}}
		>
			{children}
		</LayoutParamsContext.Provider>
	)
}

const Layout = ({ children }) => {
	const DD = useStaticQuery(
		graphql`
			query {
				backgroundImage: file(relativePath: { eq: "home-background.jpg" }) {
					childImageSharp {
						fluid(quality: 100) {
							tracedSVG
							srcSetWebp
						}
					}
				}
			}
		`
	)

	const { showHeaderMobile } = useContext(LayoutParamsContext)

	return (
		<BackgroundImage
			className="layout"
			fluid={DD.backgroundImage.childImageSharp.fluid}
		>
			<LayoutHeader className={`${showHeaderMobile ? '' : 'no-mobile-only'}`} />
			{children}
		</BackgroundImage>
	)
}

Layout.propTypes = {
	children: PropTypes.element
}

export default Layout
