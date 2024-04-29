import React from 'react'
import ReactDOM from 'react-dom/client'
import './popup.css'

const newRoot = document.createElement('div')
newRoot.id = 'root'
document.body.appendChild(newRoot)

const test = <p>Test</p>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<div>
			<p>Helloww mf</p>
			<img src='icon.png' />
		</div>
	</React.StrictMode>
)
