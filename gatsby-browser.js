import React from 'react'
import * as firebase from 'firebase'
import './src/style/general.scss'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

import scssVariables from './src/style/variables.scss'
import Layout, { LayoutParamsProvider } from './src/components/Layout/Layout'

const firebaseConfig = {
	apiKey: 'AIzaSyCeJDhHkjp8OTGkxIChLAY_yHt7NV3vwok',
	authDomain: 'monparcours-7649c.firebaseapp.com',
	databaseURL: 'https://monparcours-7649c.firebaseio.com',
	projectId: 'monparcours-7649c',
	storageBucket: 'monparcours-7649c.appspot.com',
	messagingSenderId: '741455858805',
	appId: '1:741455858805:web:bfbffd7fdd77b4f6107c3c'
}

firebase.initializeApp(firebaseConfig)

if (process.env.NODE_ENV === 'development') {
	firebase.functions().useFunctionsEmulator('http://localhost:5001')
}

const theme = createMuiTheme({
	palette: {
		primary: { 500: scssVariables.primary },
		grey: { 500: scssVariables.grey }
	}
})

export const wrapPageElement = ({ element }) => {
	return <Layout>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
	return (
		<ThemeProvider theme={theme}>
			<LayoutParamsProvider>{element}</LayoutParamsProvider>
		</ThemeProvider>
	)
}
