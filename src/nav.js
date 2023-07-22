import logo from './static/pizzalogo.png'



export default function render(){
    let body = document.getElementById('body')

    let nav = document.createElement('nav')
    nav.classList.add('nav')

    let Img = new Image
    Img.src = logo
    

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
    homeButton.setAttribute('id','home')
    const menuButton = divChild('Menu')
    menuButton.setAttribute('id','menu')
    const contactButton = divChild('Contact')
    contactButton.setAttribute('id','contact')

    div.appendChild(homeButton)
    div.appendChild(menuButton)
    div.appendChild(contactButton)

    body.appendChild(nav)
}

export let initializeListener = () =>{
    let body = document.getElementById('body')
    let homeButton = document.addEventListener('click',function(){
        body.innerHTML = ''
        render()
        
    })
}
