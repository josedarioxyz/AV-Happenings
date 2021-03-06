import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import './styles/Semantic-UI-CSS-2.2.14/custom-semantic.min.css'
import './styles/index.css'
import App from './App'
import rootReducer from './reducers/rootReducer'
import registerServiceWorker from './utilities/registerServiceWorker'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') { middleware.push(createLogger()) }

const store = createStore(rootReducer, applyMiddleware(...middleware))

const rootDOMNode = document.getElementById('root')

render(<Provider store={store}><App /></Provider>, rootDOMNode)

registerServiceWorker()
