import renderNav from './nav.js'
import renderFooter from './footer.js'
import renderHome from './home.js'
import renderMenu from './menu.js'
import renderContact from './contact.js'
import './static/styles.css'


let body = document.getElementById('body')

renderNav()
renderHome()
renderFooter()

let homeButton = document.getElementById('home')
let menuButton = document.getElementById('menu')
let contactButton = document.getElementById('contact')


homeButton.addEventListener('click', ()=>{
  menuButton.classList.remove('active')
  contactButton.classList.remove('active')

  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  renderHome()
  renderFooter()
})

menuButton.addEventListener('click', ()=>{
  homeButton.classList.remove('active')
  contactButton.classList.remove('active')

  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  renderMenu()
  renderFooter()
})

contactButton.addEventListener('click', () => {
  homeButton.classList.remove('active')
  menuButton.classList.remove('active')

  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  renderContact()
  renderFooter()

})
