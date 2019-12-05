import React from 'react'
import { Link } from 'gatsby'
import { ChevronLeft, Search } from '@material-ui/icons'

import DatePicker from './Basics/DatePicker'
import HandicapDropdown from './Basics/HandicapDropdown'
import Button from './Basics/Button'

import './Searchbox.scss'

const SearchBox = () => {
	return (
		<div className="searchbox">
			<div className="searchbox-params no-mobile-only">
				<div className="search-box">
					<DatePicker />
					<HandicapDropdown />
				</div>
			</div>
			<div className="searchbox-params mobile-only">
				<div className="search-box">
					<Link className="searchbox-field color-dark" to="/">
						<ChevronLeft />
					</Link>
					<div
						className="searchbox-field"
						style={{ flex: 1, position: 'relative' }}
					>
						<span
							style={{
								position: 'absolute',
								top: 0,
								bottom: 0,
								display: 'flex',
								alignItems: 'center',
								marginLeft: 10
							}}
						>
							<Search />
						</span>
						<input className="input has-icon" style={{ width: '100%' }} />
					</div>
					<div className="searchbox-field">
						<Button variation="transparent">Budget</Button>
					</div>
					<div className="searchbox-field">
						<Button variation="transparent">Liste</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchBox
