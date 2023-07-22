import renderNav from './nav.js'
import renderFooter from './footer.js'
import renderHome from './home.js'
import renderMenu from './menu.js'
import './static/styles.css'


let body = document.getElementById('body')

renderNav()
renderMenu()
renderFooter()

let homeButton = document.getElementById('home')
let menuButton = document.getElementById('menu')



homeButton.addEventListener('click', ()=>{
  menuButton.classList.remove('active')
  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  renderHome()
  renderFooter()
})

menuButton.addEventListener('click', ()=>{
  homeButton.classList.remove('active')
  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  renderMenu()
  renderFooter()
})
