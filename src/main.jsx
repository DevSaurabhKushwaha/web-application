import { StrictMode } from 'react'
import React from 'react'

import ReactDOM from 'react-dom/client'
import reactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/Store.jsx'
import CardList from './Components/CardList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
