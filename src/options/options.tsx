import React from 'react'
import ReactDOM from 'react-dom/client'
import './options.css'
// const test = <p>Helloww mf</p>

const newRoot = document.createElement('div')
newRoot.id = 'root'
document.body.appendChild(newRoot)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<p>Helloww options mf</p>
	</React.StrictMode>
)
