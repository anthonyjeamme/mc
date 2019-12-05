import React, { useRef, useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import { ArrowDropUp } from '@material-ui/icons'
import { motion } from 'framer-motion'

import HandicapDropdown from './Basics/HandicapDropdown'
import Button from '../components/Basics/Button'
import DatePicker from './Basics/DatePicker'

import './Searchbox.scss'

const sidebar = {
	open: custom => {
		return {
			clipPath: `circle(${Math.max(
				custom.containerDimensions.width,
				custom.containerDimensions.height
			) *
				2 +
				200}px at 40px 40px)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2
			}
		}
	},
	closed: custom => {
		return {
			clipPath: `circle(0px at ${custom.buttonDimensions.offsetLeft +
				custom.buttonDimensions.width / 2}px ${custom.buttonDimensions
				.offsetTop +
				custom.buttonDimensions.height / 2}px)`,
			transition: {
				type: 'spring',
				delay: 0.2,
				stiffness: 400,
				damping: 40
			}
		}
	}
}

const SearchBoxParams = ({ nextStep, buttonRef }) => (
	<div className="searchbox-params">
		<p className="description no-margin no-mobile-only">
			Musées, lieux, balades... Le meilleur du Pays d'Apt Luberon, en quelques
			clics !
		</p>

		<div className="homesearch-box">
			<DatePicker />
			<HandicapDropdown />
			<Button rootRef={buttonRef} onClick={nextStep}>
				Rechercher
			</Button>
		</div>
	</div>
)

export const useDimensions = (buttonRef, containerRef) => {
	const dimensions = useRef({ width: 0, height: 0 })

	const buttonDimensions = useRef({
		width: 0,
		height: 0,
		offsetTop: 0,
		offsetLeft: 0
	})

	useEffect(() => {
		const {
			offsetTop,
			offsetLeft,
			offsetHeight,
			offsetWidth
		} = buttonRef.current

		dimensions.current.width = containerRef.current.offsetWidth
		dimensions.current.height = containerRef.current.offsetHeight
		buttonDimensions.current.width = offsetWidth
		buttonDimensions.current.height = offsetHeight
		buttonDimensions.current.offsetTop = offsetTop
		buttonDimensions.current.offsetLeft = offsetLeft
	}, [buttonRef])

	return {
		containerDimensions: dimensions.current,
		buttonDimensions: buttonDimensions.current
	}
}

const SearchBoxMode = () => (
	<div className="mode-group">
		<Link className="searchbox-mode" to="/search">
			<div className="searchbox-mode-icon">
				<img
					src="https://mon-parcours.io/img/auto_icon.png"
					alt="intelligence artificielle"
				/>
			</div>
			<div className="searchbox-mode-description no-mobile-only">
				<span>Manque de temps ?</span>
				<p>Notre IA crée en quelques secondes votre parcours idéal</p>
			</div>
		</Link>
		<Link className="searchbox-mode" to="/search">
			<div className="searchbox-mode-icon" to="/search">
				<img
					src="https://mon-parcours.io/img/custom_icon.png"
					alt="mode personnalisé"
				/>
			</div>
			<div className="searchbox-mode-description no-mobile-only" to="/search">
				<span>Classique</span>
				<p>
					Découvrez toutes les activités et choisissez celles que vous voulez
				</p>
			</div>
		</Link>
	</div>
)

const HomeSearchbox = ({ pageCycle }) => {
	const [isOpen, toggleOpen_] = pageCycle
	const containerRef = useRef(null)
	const buttonRef = useRef(null)
	const dimensions = useDimensions(buttonRef, containerRef)

	// Useful when user go history back.
	useEffect(() => {
		if (!document.location.href.includes('#mode') && isOpen) {
			toggleOpen_()
		}
	})

	const toggleOpen = () => {
		if (isOpen) {
			window.history.back()
		} else {
			navigate('#mode')
		}

		toggleOpen_()
	}

	return (
		<>
			<motion.div
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				ref={containerRef}
				className="box homesearchbox"
				style={{
					position: 'relative',
					overflow: isOpen ? 'hidden' : 'visible'
				}}
			>
				<motion.div
					variants={sidebar}
					className="homesearchbox-background"
					custom={dimensions}
					onClick={toggleOpen}
				></motion.div>

				<SearchBoxParams nextStep={toggleOpen} buttonRef={buttonRef} />

				<div
					className="homesearchbox-layer"
					style={{
						transitionDelay: isOpen ? 0 : '300ms',
						opacity: isOpen ? 1 : 0,
						pointerEvents: isOpen ? 'initial' : 'none'
					}}
				>
					<SearchBoxMode prevStep={toggleOpen} />
				</div>
			</motion.div>
			<div
				className="homesearchbox-previous"
				style={{
					opacity: isOpen ? 1 : 0,
					transform: `translateY(${isOpen ? '0' : '-50px'})`,
					transitionDelay: isOpen ? 0 : '100ms'
				}}
			>
				<span onClick={toggleOpen}>
					<ArrowDropUp /> <span>Revenir à l'étape précédente</span>
				</span>
			</div>
		</>
	)
}
export default HomeSearchbox
