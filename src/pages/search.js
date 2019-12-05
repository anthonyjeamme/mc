import React, { useEffect, useContext, useState } from 'react'
import SearchBox from '../components/SearchBox'
import Button from '../components/Basics/Button'
import { LayoutParamsContext } from '../components/Layout/Layout'
import { useFakeData } from '../data/fakeFetch'
import { Check } from '@material-ui/icons'

const SearchItem = ({ data, handleClick, isSelected }) => (
	<div
		className={`search-item ${isSelected ? 'selected' : ''}`}
		onClick={handleClick}
	>
		<div className="details">Voir plus d'informations</div>
		<div className="search-item-hoverborder">
			<span>
				<Check />
			</span>
		</div>
		<header
			style={{ height: 150, backgroundImage: `url('${data.gallery[0].url}')` }}
		></header>
		<div className="description">
			<h3 style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{data.title}</h3>
			<p>{data.description.substr(0, 80)}...</p>

			<div className="detail">Gratuit</div>
			<div className="detail">Apt</div>
		</div>
	</div>
)

const SearchSection = ({ data, toggleSelectItem, selection }) => {
	return (
		<div className="search-section">
			<h2>
				<img src="https://www.mon-parcours.io/img/favorite.png" alt="favoris" />{' '}
				Coups de coeurs
			</h2>

			<div className="search-items">
				{data.list.map(item => (
					<SearchItem
						key={item._id}
						isSelected={selection[item._id]}
						data={item}
						handleClick={() => {
							toggleSelectItem(item._id)
						}}
					/>
				))}
			</div>
		</div>
	)
}

const Search = () => {
	// Layout params. Not declarative, bad :'( best solutions ?
	const { setParams, ...params } = useContext(LayoutParamsContext)
	const [selection, setSelection] = useState({})
	useEffect(() => {
		setParams({
			...params,
			showHeaderMobile: false
		})
	}, [])

	const [isLoading, data] = useFakeData('myurl')

	if (isLoading) {
		return 'loading...'
	}

	const toggleSelectItem = id => {
		setSelection({
			...selection,
			[id]: selection[id] ? false : true
		})
	}

	const selectedItems = Object.keys(selection)
		.map(key => selection[key])
		.filter(v => v === true)

	const nSelectedItems = selectedItems.length

	return (
		<div className="search">
			<div style={{ paddingBottom: 100 }}>
				<SearchBox />

				<div className="large-container">
					<SearchSection
						data={data}
						toggleSelectItem={toggleSelectItem}
						selection={selection}
					/>
					<SearchSection
						data={data}
						toggleSelectItem={toggleSelectItem}
						selection={selection}
					/>
					<SearchSection
						data={data}
						toggleSelectItem={toggleSelectItem}
						selection={selection}
					/>
				</div>

				<div className="search-selection">
					{nSelectedItems ? (
						<div className="large-container has-left-right">
							<div className="left">
								<span className="color-primary">
									{nSelectedItems} Activité{nSelectedItems > 1 ? 's' : ''}{' '}
									sélectionnée{nSelectedItems > 1 ? 's' : ''}
								</span>
							</div>
							<div className="right">
								<Button>Valider le parcours</Button>
							</div>
						</div>
					) : (
						<div className="text-center color-primary">
							<strong>Choisissez les activités que vous voulez faire</strong>
							<div style={{ fontSize: 15 }}>
								Cliquez sur une activité pour la sélectionner ou la
								désélectionner
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
export default Search
