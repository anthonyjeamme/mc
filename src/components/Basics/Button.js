import React from 'react'
import PropTypes from 'prop-types'
import './Basics.scss'

const Button = ({
	children,
	style = {},
	onClick = () => {},
	variation = '',
	rootRef = null
}) => {
	return (
		<button
			ref={rootRef}
			className={`btn ${variation}`}
			style={style}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
		.isRequired,
	style: PropTypes.object,
	onClick: PropTypes.func,
	variation: PropTypes.string,
	rootRef: PropTypes.any
}

export default Button
