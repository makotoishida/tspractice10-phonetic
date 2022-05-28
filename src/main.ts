import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

const App = () => {
  return html`<div>
    <h3>Input a word</h3>
  </div>`
}

const renderApp = () => {
  render(App(), appRoot)
}

renderApp()
