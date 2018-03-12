import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {apollo} from './config/apollo'
import App from './App'

import './index.css'

const AppWraper = (

  <ApolloProvider client={apollo}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(
  AppWraper,
  document.getElementById('root'),
)
