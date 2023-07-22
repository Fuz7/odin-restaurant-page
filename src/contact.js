
export default function render(){
    let body = document.getElementById('body')
    
    let contactButton = document.getElementById('contact')
    contactButton.classList.add('active')

    let contactContainer = document.createElement('div')
    contactContainer.classList.add('contactContainer')

    body.append(contactContainer)

}