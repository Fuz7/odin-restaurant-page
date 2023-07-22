import r1 from './static/r1.jpg'
import r2 from './static/r2.jpg'
import r3 from './static/r3.jpg'
import r4 from './static/r4.jpg'
import r5 from './static/r5.jpg'
import r6 from './static/r6.jpg'
import r7 from './static/r7.jpg'
import r8 from './static/r8.jpg'
import r9 from './static/r9.jpg'
import r10 from './static/r10.jpg'











export default function render(){
    let body = document.getElementById('body');

    let menuButton = document.getElementById('menu')
    menuButton.classList.add('active')

    let menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
   
    
    function createCard(imageSrc, titlename, priceTag, ingredients){

        let card = document.createElement('div')
        card.classList.add('card')

        let img = new Image
        img.src = imageSrc
        card.append(img)

        let cardText = document.createElement('div')
        cardText.classList.add('cardText')

        let textHeader = document.createElement('div')
        textHeader.classList.add('textHeader')

        let title = document.createElement('p')
        title.innerHTML = titlename
        let price = document.createElement('span')
        price.innerHTML = priceTag
        textHeader.append(title)
        textHeader.append(price)
        cardText.append(textHeader)

        let textIngredient = document.createElement('p')
        textIngredient.classList.add('textIngredient')
        textIngredient.innerHTML = ingredients
        cardText.append(textIngredient)
        card.append(cardText)
        
        return card
    }

    menuContainer.append(createCard(r1,'Powsicle Parfait','3.99',
    'Sliceed Strawberries, Vanilla Yogurt, Mini Marshmallows, Honey, Blue Sprinkles.'))

    menuContainer.append(createCard(r2,'Lumberjack Toast','1.99',
    'White Bread, Milk, Brown Sugar, Cinnamon, Nutmeg, Vanilla Extract, Real Crumbled Bacon.' ))
    
    menuContainer.append(createCard(r3,'Onion Zest Cookies','1.49',
    'Large Sweet Onion, Purple Food Coloring, Granulated Sugar, Your Favorite Cookie Doughe Recipe.'))

    menuContainer.append(createCard(r4,"Rudy's Reuben",'2.49',
    'Marble Rye Bread, Corned Beef, Awesome Sauce, Swiss Cheese, Butter, Drained Sauerkraut.' ))

    menuContainer.append(createCard(r5,"Toastwood Poutine",'1.99',
    'Potatoes, Olive Oil, Garlic Powder, Paprika, Salt, Black Pepper, Cooking Spray, Toastwood Gravy.' ))
   
    menuContainer.append(createCard(r6,"Jack-O-Mole",'3.49',
    'Pumpkin Puree, Fresh Cilantro, Lime Juice, Diced Onion, Chili Powededr, Black Pepper, Tortilla Chips.' ))

    menuContainer.append(createCard(r7,"Sizzle Shell Tacos",'2.49',
    'Crushed Red Pepper, Garlic Powder, Ground Beef, Chili Powder, Dried Oregano, Shredded Mexican Cheese.' ))
    
    menuContainer.append(createCard(r8,"Streusel",'0.99',  
    'Softened, Unsalted Butter, All-Purpose Flour, Brown Sugar, Sugar.' ))

    menuContainer.append(createCard(r9,"Rico's Chli Dogs",'2.99',
    'Cheddar Cheese, Onion, Unsweetened Chocolate, Tomato Sauce, Ground Beef, Hotdogs, Hotdog Buns.' ))
    
    menuContainer.append(createCard(r10,"Romano Quartet Pizza",'4.99',
    'Pizza Sauce, Pizza Dough, Mozzarella Cheese, Pepperoni, Italian Sausage, Canned Mushrooms, Bell Pepper.' ))

    body.append(menuContainer)
}