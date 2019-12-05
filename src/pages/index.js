import React, { useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import HomeSearchbox from '../components/HomeSearchbox'
import { useCycle } from 'framer-motion'
import { LayoutParamsContext } from '../components/Layout/Layout'

const IndexPage = () => {
	// false -> search
	// true -> modes
	const pageCycle = useCycle(false, true)
	const [modeView] = pageCycle

	// Layout params. Not declarative, bad :'( best solutions ?
	const { setParams, ...params } = useContext(LayoutParamsContext)
	useEffect(() => {
		setParams({
			...params,
			showHeaderMobile: true
		})
	}, [])

	return (
		<>
			<Helmet title="Mon Parcours - Réinventons la promotion du territoire">
				<meta
					name="description"
					content="Mon Parcours digitalise votre territoire et réinvente l’accueil touristique. Une solution d’avenir financée avec le concours de l’Union Européenne."
				/>
			</Helmet>

			<div
				style={{ margin: 'auto', textAlign: 'center', position: 'relative' }}
				className="container homepage"
			>
				<header className="homepage-header" style={{ position: 'relative' }}>
					<img
						src="/img/rosace.svg"
						alt="rosace decoration"
						className="homepage-rosace no-mobile-only"
					/>
					<div
						className={`fadeYAnimated  ${modeView ? 'active' : ''}`}
						style={{
							position: 'absolute',
							width: '100%',
							bottom: 0
						}}
					>
						<h2>Choisissez votre mode de découverte :</h2>
					</div>

					<div className={`fadeYAnimated fromTop ${!modeView ? 'active' : ''}`}>
						<h1>Pays d'Apt Luberon</h1>
						<p className="subtitle">
							<span className="no-mobile-only">
								Ici, vous pouvez découvrir toutes les activités des environs et
								créer un parcours touristique adapté à vos envies et vos
								contraintes. C’est facile. Et pratique{' '}
								<span className="no-text-shadow" role="img" aria-label="smile">
									😊
								</span>
							</span>

							<span className="mobile-only">
								Découvrez le meilleur des environs, en quelques clics ! Simple
								.Pratique
								<span className="no-text-shadow" role="img" aria-label="smile">
									😊
								</span>
							</span>
						</p>
					</div>
				</header>

				<HomeSearchbox pageCycle={pageCycle} />
			</div>

			<footer className="has-left-right no-mobile-only layout-footer">
				<div className="left">
					<span className="with-text-shadow">
						<a
							href="https://mon-parcours.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vous représentez un territoire ?
						</a>
					</span>
				</div>

				<div className="right">
					<span className="footer-item">
						<Link to="/cgu">CGU</Link>
					</span>
					<span className="footer-item">
						<Link to="/cookies">Politique Cookies</Link>
					</span>
				</div>
			</footer>
		</>
	)
}

export default () => <IndexPage />
