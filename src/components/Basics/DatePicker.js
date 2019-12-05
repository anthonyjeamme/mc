import React, { useState, useEffect } from 'react'
import { CalendarToday } from '@material-ui/icons'
import { DateRange } from 'react-date-range'
import moment from 'moment'

import Button from './Button'

import 'react-date-range/dist/styles.css' // main style file
import '../../style/react-date-range-theme.scss'

import './Basics.scss'

const DatePicker = ({ style = {} }) => {
	const [open, setOpen] = useState(false)
	const [selection, setSelection] = useState({
		startDate: null,
		endDate: null,
		key: 'selection'
	})

	const ranges = [
		{
			...selection,
			startDate: selection.startDate ? selection.startDate : new Date(),
			endDate: selection.endDate ? selection.endDate : new Date()
		}
	]

	const toggleOpen = () => {
		setOpen(!open)
	}

	const handleSelect = ranges => {
		setSelection(ranges.selection)
	}

	const handleEscapeKeydown = e => {
		if (e.keyCode === 27) {
			// Escape keycode
			setOpen(false)
		}
	}

	const handleEmpty = () => {
		setSelection({
			...selection,
			startDate: null,
			endDate: null
		})
		setOpen(false)
	}

	useEffect(() => {
		if (open) {
			document.body.addEventListener('keydown', handleEscapeKeydown)
			return () => {
				document.body.removeEventListener('keydown', handleEscapeKeydown)
			}
		}
	}, [open])

	return (
		<div className={`datepicker field ${open ? 'active' : ''}`} style={style}>
			<div className="field-title" onClick={toggleOpen}>
				<CalendarToday color={open ? 'primary' : 'disabled'} />
				<span>
					{selection.startDate
						? `${moment(selection.startDate).format('DD/MM/YYYY')} - ${moment(
								selection.endDate
						  ).format('DD/MM/YYYY')}`
						: `Arrivée - Départ`}
				</span>
			</div>

			<div className="datepicker-popup" onClick={toggleOpen}>
				<div
					className="datepicker-popup-body"
					onClick={e => {
						e.stopPropagation()
					}}
				>
					<DateRange
						minDate={new Date()}
						ranges={ranges}
						onChange={handleSelect}
					/>

					<div className="has-left-right">
						<div className="left">
							<Button variation="transparent" onClick={handleEmpty}>
								Aucune date
							</Button>
						</div>

						<div className="right">
							<Button onClick={toggleOpen}>Valider</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default DatePicker
