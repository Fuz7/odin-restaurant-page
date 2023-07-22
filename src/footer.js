

export default function render(){
    let body = document.getElementById('body')

    let divFooter =  document.createElement('div')
    divFooter.classList.add('footer')

    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'Copyright © 2023 Fuz'
    divFooter.append(paragraph)

    let linkLogo = document.createElement('a')
    linkLogo.setAttribute('href', 'https://github.com/Fuz7')
    divFooter.append(linkLogo)


    body.append(divFooter)
}