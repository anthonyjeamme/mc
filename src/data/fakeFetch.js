import { useState, useEffect } from 'react'

const fakeData = require('./fakeData.json')

export const useFakeData = uselessURL => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setData(fakeData)
		setIsLoading(false)
	}, [])

	return [isLoading, data]
}

export const fakeFetchResult = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(fakeData)
		}, 1000)
	})
