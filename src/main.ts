import { html, svg, render } from 'lit-html'
import 'normalize.css'
import './style.css'

const appRoot = document.querySelector<HTMLDivElement>('#app')!

const clockConfigs = [
  { title: 'Honolulu', tz: -10 },
  { title: 'Tokyo', tz: 9 },
  { title: 'Los Angels', tz: -7 },
  { title: 'New York', tz: -4 },
  { title: 'UTC', tz: 0 },
]

function tick() {
  const d = new Date()
  const clockTemplates = clockConfigs.map((c) =>
    renderClock(d, 180, c.title, c.tz)
  )
  render(clockTemplates, appRoot)
}

function renderClock(d: Date, size: number, title: string, tz: number) {
  const t = new Date(d)
  t.setHours(d.getUTCHours() + tz)
  const h = t.getHours()
  const m = t.getMinutes()
  const s = t.getSeconds()

  const degS = (360 * s) / 60
  const degM = (360 * m) / 60 + degS / 60
  const degH = (360 * (h % 12)) / 12 + degM / 12

  return html`
    <div
      class="clock"
      style="width: ${size}px; height: ${size}px; margin: 0 auto;"
    >
      <svg
        version="1.1"
        width="100%"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${svg`
          <circle cx="200" cy="200" r="190" fill="#fefefe" stroke="#888" />
          ${drawScale()} ${drawTitle(title)} ${drawDigital(d)}
          ${drawHand(16, 128, degH, '#1010e0d0')}
          ${drawHand(10, 158, degM, '#4040e0d0')}
          ${drawHand(3, 170, degS, '#f060e0d0')}
        `}
      </svg>
    </div>
  `
}

function drawScale() {
  const scales = [...new Array(12)]
  return scales.map((_, index) => {
    const deg = (360 * index) / 12 - 90
    const x = 200 + Math.cos((deg * Math.PI) / 180) * 140
    const y = 200 + Math.sin((deg * Math.PI) / 180) * 140 + 12
    return svg`<rect x="-3" y=${
      -18 - 165
    } rx="4" ry="4" width="5" height="18" fille="#000" style="transform: translate(50%,50%) rotate(${deg}deg)" />
      <text x=${x} y=${y} font-size="28" text-anchor="middle" fill="#404040f0">${
      index === 0 ? 12 : index
    }</text>`
  })
}

function drawHand(w: number, h: number, deg: number, color: string) {
  return svg`<polygon points="-${w},${h * 0.04} -${w * 0.4},-${
    h * 0.96
  } 0,-${h} ${w * 0.4},-${h * 0.96} ${w},${
    h * 0.04
  }" style="transform: translate(50%, 50%) rotate(${deg}deg) " fill=${color} />`
}

function drawTitle(title: string) {
  return svg`<text x="200" y="160" font-size="36" text-anchor="middle" fill="#404040e0">
    ${title}
  </text>`
}

function drawDigital(d: Date) {
  return svg`<text x="200" y="270" font-size="32" text-anchor="middle" fill="#404040e0">
    ${timeStr(d)}
  </text>`
}

function timeStr(t: Date) {
  const h = t.getHours()
  const m = t.getMinutes()
  const s = t.getSeconds()
  return `${twoDig(h)}:${twoDig(m)}:${twoDig(s)}`
}

function twoDig(n: number) {
  return `0${n}`.slice(-2)
}

setInterval(() => tick(), 1000)
tick()
