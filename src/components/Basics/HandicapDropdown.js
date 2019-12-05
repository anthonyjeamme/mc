import React, { useState } from 'react'

import {
	Person,
	CheckBoxOutlineBlank,
	CheckBoxOutlined
} from '@material-ui/icons'

import './Basics.scss'

const HandicapDropdown = ({ style = {} }) => {
	const [open, setOpen] = useState(false)
	const [selectedOptions, setSelectedOptions] = useState({})

	const options = {
		moteur: { title: 'Handicap Moteur' },
		visuel: { title: 'Handicap Visuel' },
		auditif: { title: 'Handicap Auditif' },
		mental: { title: 'Handicap Mental' }
	}

	const toggleOpen = () => {
		setOpen(!open)
	}

	const toggleOption = id => () => {
		setSelectedOptions({
			...selectedOptions,
			[id]: selectedOptions[id] ? false : true
		})
	}

	const selectedOptionsTitle = Object.keys(selectedOptions)
		.filter(id => selectedOptions[id])
		.map(id => options[id].title)

	return (
		<div
			className={`dropdown field ${open ? 'active' : ''}`}
			style={style}
			onClick={e => {
				e.stopPropagation()
				e.preventDefault()
			}}
		>
			{open && <div className="overlay transparent" onClick={toggleOpen}></div>}

			<div className="dropdown-title" onClick={toggleOpen}>
				<Person color={open ? 'primary' : 'disabled'} />
				<span>
					Handicap ?{' '}
					{selectedOptionsTitle.length === 0
						? 'Aucun'
						: selectedOptionsTitle.length === 1
						? selectedOptionsTitle[0]
						: `${selectedOptionsTitle.length} sélectionnés`}
				</span>
			</div>

			<div className="dropdown-content">
				{Object.keys(options).map(id => (
					<div
						className="dropdown-content-item"
						onClick={toggleOption(id)}
						key={id}
					>
						{selectedOptions[id] ? (
							<CheckBoxOutlined color="primary" />
						) : (
							<CheckBoxOutlineBlank />
						)}{' '}
						<span>{options[id].title}</span>
					</div>
				))}
			</div>
		</div>
	)
}
export default HandicapDropdown
