import React from 'react'
import Button from '../components/Basics/Button'
import { Link } from 'gatsby'

const NotFoundPage = () => (
	<div style={{ margin: 'auto' }}>
		<h1>Oups, page inconnue</h1>

		<Link to="/">
			<Button>Retour</Button>
		</Link>
	</div>
)

export default NotFoundPage
