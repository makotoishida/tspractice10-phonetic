import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'
import words from './words'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

type State = {
  word: string
  category: string
}

const state: State = {
  word: '',
  category: 'NATO',
}

const handleChange = (ev: InputEvent) => {
  const value = (ev.target as HTMLInputElement).value
  state.word = value
  renderApp()
}

const handleCategoryClick = (ev: MouseEvent) => {
  const category = (ev.target as HTMLElement).dataset.name!
  state.category = category
  renderApp()
}

const Categories = (activeCategory: string) => {
  return html`<h4>Categories</h4>
    <div class="categories">
      ${Object.keys(words).map(
        (i) =>
          html`<div
            class="category ${activeCategory === i ? 'active' : ''}"
            @click=${handleCategoryClick}
            data-name=${i}
          >
            ${i}
          </div>`
      )}
    </div>`
}

const PhoneticCodes = (word: string, category: string) => {
  return html`<div class="phonetic-list">
    ${Array.from(word).map((i) => {
      const w = (words as any)[category]
      return html`<div class="word">${w[i.toLocaleLowerCase()] ?? i}</div>`
    })}
  </div>`
}

const App = (state: State) => {
  return html`<div>
    <h3>Input a word</h3>
    <input
      type="text"
      @input=${handleChange}
      maxlength="20"
      autofocus
      autocomplete="off"
    />
    ${Categories(state.category)} ${PhoneticCodes(state.word, state.category)}
  </div>`
}

const renderApp = () => {
  render(App(state), appRoot)
}

renderApp()
