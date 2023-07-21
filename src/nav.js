import logo from './static/pizzalogo.png'

export default function render(){
    let body = document.getElementById('body')

    let nav = document.createElement('nav')
    nav.classList.add('nav')

    let Img = new Image
    Img.src = logo
    nav.appendChild(Img)

    let div = document.createElement('div')
    div.classList.add('navbar')
    nav.appendChild(div)

    let divChild = function(innertext){
        let button = document.createElement('button')
        button.classList.add('linkButton')
        button.innerHTML = innertext
        return          button
    }
    const homeButton = divChild('Home')
    const menuButton = divChild('Menu')
    const aboutButton = divChild('About')
    
    div.appendChild(homeButton)
    div.appendChild(menuButton)
    div.appendChild(aboutButton)

    body.appendChild(nav)
}

