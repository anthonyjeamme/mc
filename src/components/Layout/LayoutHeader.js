import React, { useState } from 'react'
import Logo from '../Basics/Logo'
import { Link } from 'gatsby'

import { Menu } from '@material-ui/icons'

const LayoutHeader = ({ className = '' }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenuOpen = () => {
		setMobileMenuOpen(!mobileMenuOpen)
	}

	return (
		<header
			className={`layout-header has-left-right ${
				mobileMenuOpen ? 'active' : ''
			} ${className}`}
		>
			<div className="left">
				<Link to="/">
					<Logo />
				</Link>
			</div>

			<div className="right">
				<div className="no-mobile-only">
					<a className="phone" href="tel:0490740318">
						<span className="desktop-only">Plus d'infos : </span>04 90 74 03 18
					</a>
				</div>

				<div className="mobile-only">
					{mobileMenuOpen && (
						<div className="overlay" onClick={toggleMobileMenuOpen}></div>
					)}

					<div className={`side-menu ${mobileMenuOpen ? 'open' : ''}`}>
						<a className="side-menu-item" href="tel:0490740318">
							Plus d'infos : 0490740318
						</a>
						<Link className="side-menu-item" to="/cookies">
							Politique cookies
						</Link>
						<Link className="side-menu-item" to="/cgu">
							CGU
						</Link>
						<a
							className="side-menu-item"
							href="https://mon-parcours.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vous représentez un territoire ?
						</a>
					</div>
					<span className="menu-button">
						<Menu onClick={toggleMobileMenuOpen} />
					</span>
				</div>
			</div>
		</header>
	)
}
export default LayoutHeader
