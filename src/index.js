import renderNav from './nav.js'
import renderFooter from './footer.js'
import renderHome from './home.js'

import './static/styles.css'


let body = document.getElementById('body')

renderNav()
renderHome()
renderFooter()

let homeButton = document.getElementById('home')
let menuButton = document.getElementById('menu')

homeButton.addEventListener('click', ()=>{
  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  renderHome()
  renderFooter()
})

