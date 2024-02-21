import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App.jsx'
import {Provider} from 'react-redux'
import './css/index.css'
import { store } from './slices/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
