import logo from './static/pizzalogo.png'

export default function render(){
    let body = document.getElementById('body')

    let homeButton = document.getElementById('home')
    homeButton.classList.add('active')

    let container = document.createElement('div')
    container.classList.add('homeContainer')

    let imgLogo = new Image()
    imgLogo.src = logo
    container.append(imgLogo)

    let hoursContainer = document.createElement('div')
    hoursContainer.classList.add('hoursContainer')
    
    let hoursHeader = document.createElement('div')
    hoursHeader.classList.add('hoursHeader')

    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'Hours'
    hoursHeader.append(paragraph)
    hoursContainer.append(hoursHeader)
    
    let hoursBody = document.createElement('div')
    hoursBody.classList.add('hoursBody')
    
    let createTime = function(element,dayType,startTime,endTime){
        paragraph = document.createElement(element)
        paragraph.innerHTML = dayType + ": " + startTime +" - " + endTime;
        return paragraph
    }

    let sunday = createTime('p','Sunday','8:00am','8:00pm')
    let monday = createTime('p','Monday','6:00am', '6:00pm')
    let tuesday = createTime('p','Tuesday','6:00am', '6:00pm')
    let wednesday = createTime('p','Wednesday','6:00am','6:00pm')
    let thursday = createTime('p','Thursday','6:00am', '10:00pm')
    let friday = createTime('p','Friday', '6:00am', '10:00pm')
    let saturday = createTime('p','Saturday','8:00am','10:00pm')

    hoursBody.append(sunday)
    hoursBody.append(monday)
    hoursBody.append(tuesday)
    hoursBody.append(wednesday)
    hoursBody.append(thursday)
    hoursBody.append(friday)
    hoursBody.append(saturday)

    hoursContainer.append(hoursBody)

    container.append(hoursContainer)
    body.append(container)
}