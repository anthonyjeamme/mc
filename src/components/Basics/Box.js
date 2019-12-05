import React from 'react'
import PropTypes from 'prop-types'

import './Basics.scss'

const Box = ({ children, style = {}, className = '', rootRef = null }) => {
	return (
		<div className={`box ${className}`} style={style} ref={rootRef}>
			{children}
		</div>
	)
}

Box.propTypes = {
	children: PropTypes.element.isRequired,
	style: PropTypes.object,
	className: PropTypes.string
}

export default Box
