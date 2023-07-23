/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/static/styles.css":
/*!*******************************!*\
  !*** ./src/static/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });

function render(){
    let body = document.getElementById('body')
    
    let contactButton = document.getElementById('contact')
    contactButton.classList.add('active')

    let contactContainer = document.createElement('div')
    contactContainer.classList.add('contactContainer')

    body.append(contactContainer)

}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });


function render(){
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

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _static_pizzalogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/pizzalogo.png */ "./src/static/pizzalogo.png");


function render(){
    let body = document.getElementById('body')

    let homeButton = document.getElementById('home')
    homeButton.classList.add('active')

    let container = document.createElement('div')
    container.classList.add('homeContainer')

    let imgLogo = new Image()
    imgLogo.src = _static_pizzalogo_png__WEBPACK_IMPORTED_MODULE_0__
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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _static_r1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/r1.jpg */ "./src/static/r1.jpg");
/* harmony import */ var _static_r2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/r2.jpg */ "./src/static/r2.jpg");
/* harmony import */ var _static_r3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/r3.jpg */ "./src/static/r3.jpg");
/* harmony import */ var _static_r4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/r4.jpg */ "./src/static/r4.jpg");
/* harmony import */ var _static_r5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static/r5.jpg */ "./src/static/r5.jpg");
/* harmony import */ var _static_r6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/r6.jpg */ "./src/static/r6.jpg");
/* harmony import */ var _static_r7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static/r7.jpg */ "./src/static/r7.jpg");
/* harmony import */ var _static_r8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./static/r8.jpg */ "./src/static/r8.jpg");
/* harmony import */ var _static_r9_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static/r9.jpg */ "./src/static/r9.jpg");
/* harmony import */ var _static_r10_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static/r10.jpg */ "./src/static/r10.jpg");





















function render(){
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

    menuContainer.append(createCard(_static_r1_jpg__WEBPACK_IMPORTED_MODULE_0__,'Powsicle Parfait','3.99',
    'Sliceed Strawberries, Vanilla Yogurt, Mini Marshmallows, Honey, Blue Sprinkles.'))

    menuContainer.append(createCard(_static_r2_jpg__WEBPACK_IMPORTED_MODULE_1__,'Lumberjack Toast','1.99',
    'White Bread, Milk, Brown Sugar, Cinnamon, Nutmeg, Vanilla Extract, Real Crumbled Bacon.' ))
    
    menuContainer.append(createCard(_static_r3_jpg__WEBPACK_IMPORTED_MODULE_2__,'Onion Zest Cookies','1.49',
    'Large Sweet Onion, Purple Food Coloring, Granulated Sugar, Your Favorite Cookie Doughe Recipe.'))

    menuContainer.append(createCard(_static_r4_jpg__WEBPACK_IMPORTED_MODULE_3__,"Rudy's Reuben",'2.49',
    'Marble Rye Bread, Corned Beef, Awesome Sauce, Swiss Cheese, Butter, Drained Sauerkraut.' ))

    menuContainer.append(createCard(_static_r5_jpg__WEBPACK_IMPORTED_MODULE_4__,"Toastwood Poutine",'1.99',
    'Potatoes, Olive Oil, Garlic Powder, Paprika, Salt, Black Pepper, Cooking Spray, Toastwood Gravy.' ))
   
    menuContainer.append(createCard(_static_r6_jpg__WEBPACK_IMPORTED_MODULE_5__,"Jack-O-Mole",'3.49',
    'Pumpkin Puree, Fresh Cilantro, Lime Juice, Diced Onion, Chili Powededr, Black Pepper, Tortilla Chips.' ))

    menuContainer.append(createCard(_static_r7_jpg__WEBPACK_IMPORTED_MODULE_6__,"Sizzle Shell Tacos",'2.49',
    'Crushed Red Pepper, Garlic Powder, Ground Beef, Chili Powder, Dried Oregano, Shredded Mexican Cheese.' ))
    
    menuContainer.append(createCard(_static_r8_jpg__WEBPACK_IMPORTED_MODULE_7__,"Streusel",'0.99',  
    'Softened, Unsalted Butter, All-Purpose Flour, Brown Sugar, Sugar.' ))

    menuContainer.append(createCard(_static_r9_jpg__WEBPACK_IMPORTED_MODULE_8__,"Rico's Chli Dogs",'2.99',
    'Cheddar Cheese, Onion, Unsweetened Chocolate, Tomato Sauce, Ground Beef, Hotdogs, Hotdog Buns.' ))
    
    menuContainer.append(createCard(_static_r10_jpg__WEBPACK_IMPORTED_MODULE_9__,"Romano Quartet Pizza",'4.99',
    'Pizza Sauce, Pizza Dough, Mozzarella Cheese, Pepperoni, Italian Sausage, Canned Mushrooms, Bell Pepper.' ))

    body.append(menuContainer)
}

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render),
/* harmony export */   initializeListener: () => (/* binding */ initializeListener)
/* harmony export */ });
/* harmony import */ var _static_pizzalogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/pizzalogo.png */ "./src/static/pizzalogo.png");




function render(){
    let body = document.getElementById('body')

    let nav = document.createElement('nav')
    nav.classList.add('nav')

    let Img = new Image
    Img.src = _static_pizzalogo_png__WEBPACK_IMPORTED_MODULE_0__
    

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

let initializeListener = () =>{
    let body = document.getElementById('body')
    let homeButton = document.addEventListener('click',function(){
        body.innerHTML = ''
        render()
        
    })
}


/***/ }),

/***/ "./src/static/pizzalogo.png":
/*!**********************************!*\
  !*** ./src/static/pizzalogo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/pizzalogo.png";

/***/ }),

/***/ "./src/static/r1.jpg":
/*!***************************!*\
  !*** ./src/static/r1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r1.jpg";

/***/ }),

/***/ "./src/static/r10.jpg":
/*!****************************!*\
  !*** ./src/static/r10.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r10.jpg";

/***/ }),

/***/ "./src/static/r2.jpg":
/*!***************************!*\
  !*** ./src/static/r2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r2.jpg";

/***/ }),

/***/ "./src/static/r3.jpg":
/*!***************************!*\
  !*** ./src/static/r3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r3.jpg";

/***/ }),

/***/ "./src/static/r4.jpg":
/*!***************************!*\
  !*** ./src/static/r4.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r4.jpg";

/***/ }),

/***/ "./src/static/r5.jpg":
/*!***************************!*\
  !*** ./src/static/r5.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r5.jpg";

/***/ }),

/***/ "./src/static/r6.jpg":
/*!***************************!*\
  !*** ./src/static/r6.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r6.jpg";

/***/ }),

/***/ "./src/static/r7.jpg":
/*!***************************!*\
  !*** ./src/static/r7.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r7.jpg";

/***/ }),

/***/ "./src/static/r8.jpg":
/*!***************************!*\
  !*** ./src/static/r8.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r8.jpg";

/***/ }),

/***/ "./src/static/r9.jpg":
/*!***************************!*\
  !*** ./src/static/r9.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image/r9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _static_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/styles.css */ "./src/static/styles.css");








let body = document.getElementById('body')

;(0,_nav_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

let homeButton = document.getElementById('home')
let menuButton = document.getElementById('menu')
let contactButton = document.getElementById('contact')


homeButton.addEventListener('click', ()=>{
  menuButton.classList.remove('active')
  contactButton.classList.remove('active')

  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  ;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
  ;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

menuButton.addEventListener('click', ()=>{
  homeButton.classList.remove('active')
  contactButton.classList.remove('active')

  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
  ;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

contactButton.addEventListener('click', () => {
  homeButton.classList.remove('active')
  menuButton.classList.remove('active')

  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])()
  ;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQSxvREFBUztBQUNULHFEQUFVO0FBQ1YsdURBQVk7O0FBRVo7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUscURBQVU7QUFDWixFQUFFLHVEQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUscURBQVU7QUFDWixFQUFFLHVEQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsd0RBQWE7QUFDZixFQUFFLHVEQUFZOztBQUVkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdGF0aWMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuICAgIFxuICAgIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKVxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgIGxldCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb250YWluZXInKVxuXG4gICAgYm9keS5hcHBlbmQoY29udGFjdENvbnRhaW5lcilcblxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKXtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5JylcblxuICAgIGxldCBkaXZGb290ZXIgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXZGb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcblxuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gJ0NvcHlyaWdodCDCqSAyMDIzIEZ1eidcbiAgICBkaXZGb290ZXIuYXBwZW5kKHBhcmFncmFwaClcblxuICAgIGxldCBsaW5rTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmtMb2dvLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vRnV6NycpXG4gICAgZGl2Rm9vdGVyLmFwcGVuZChsaW5rTG9nbylcblxuXG4gICAgYm9keS5hcHBlbmQoZGl2Rm9vdGVyKVxufSIsImltcG9ydCBsb2dvIGZyb20gJy4vc3RhdGljL3BpenphbG9nby5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVDb250YWluZXInKVxuXG4gICAgbGV0IGltZ0xvZ28gPSBuZXcgSW1hZ2UoKVxuICAgIGltZ0xvZ28uc3JjID0gbG9nb1xuICAgIGNvbnRhaW5lci5hcHBlbmQoaW1nTG9nbylcblxuICAgIGxldCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG91cnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cnNDb250YWluZXInKVxuICAgIFxuICAgIGxldCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG91cnNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaG91cnNIZWFkZXInKVxuXG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSAnSG91cnMnXG4gICAgaG91cnNIZWFkZXIuYXBwZW5kKHBhcmFncmFwaClcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmQoaG91cnNIZWFkZXIpXG4gICAgXG4gICAgbGV0IGhvdXJzQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG91cnNCb2R5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzQm9keScpXG4gICAgXG4gICAgbGV0IGNyZWF0ZVRpbWUgPSBmdW5jdGlvbihlbGVtZW50LGRheVR5cGUsc3RhcnRUaW1lLGVuZFRpbWUpe1xuICAgICAgICBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpXG4gICAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBkYXlUeXBlICsgXCI6IFwiICsgc3RhcnRUaW1lICtcIiAtIFwiICsgZW5kVGltZTtcbiAgICAgICAgcmV0dXJuIHBhcmFncmFwaFxuICAgIH1cblxuICAgIGxldCBzdW5kYXkgPSBjcmVhdGVUaW1lKCdwJywnU3VuZGF5JywnODowMGFtJywnODowMHBtJylcbiAgICBsZXQgbW9uZGF5ID0gY3JlYXRlVGltZSgncCcsJ01vbmRheScsJzY6MDBhbScsICc2OjAwcG0nKVxuICAgIGxldCB0dWVzZGF5ID0gY3JlYXRlVGltZSgncCcsJ1R1ZXNkYXknLCc2OjAwYW0nLCAnNjowMHBtJylcbiAgICBsZXQgd2VkbmVzZGF5ID0gY3JlYXRlVGltZSgncCcsJ1dlZG5lc2RheScsJzY6MDBhbScsJzY6MDBwbScpXG4gICAgbGV0IHRodXJzZGF5ID0gY3JlYXRlVGltZSgncCcsJ1RodXJzZGF5JywnNjowMGFtJywgJzEwOjAwcG0nKVxuICAgIGxldCBmcmlkYXkgPSBjcmVhdGVUaW1lKCdwJywnRnJpZGF5JywgJzY6MDBhbScsICcxMDowMHBtJylcbiAgICBsZXQgc2F0dXJkYXkgPSBjcmVhdGVUaW1lKCdwJywnU2F0dXJkYXknLCc4OjAwYW0nLCcxMDowMHBtJylcblxuICAgIGhvdXJzQm9keS5hcHBlbmQoc3VuZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQobW9uZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQodHVlc2RheSlcbiAgICBob3Vyc0JvZHkuYXBwZW5kKHdlZG5lc2RheSlcbiAgICBob3Vyc0JvZHkuYXBwZW5kKHRodXJzZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQoZnJpZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQoc2F0dXJkYXkpXG5cbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmQoaG91cnNCb2R5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZChob3Vyc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZChjb250YWluZXIpXG59IiwiaW1wb3J0IHIxIGZyb20gJy4vc3RhdGljL3IxLmpwZydcbmltcG9ydCByMiBmcm9tICcuL3N0YXRpYy9yMi5qcGcnXG5pbXBvcnQgcjMgZnJvbSAnLi9zdGF0aWMvcjMuanBnJ1xuaW1wb3J0IHI0IGZyb20gJy4vc3RhdGljL3I0LmpwZydcbmltcG9ydCByNSBmcm9tICcuL3N0YXRpYy9yNS5qcGcnXG5pbXBvcnQgcjYgZnJvbSAnLi9zdGF0aWMvcjYuanBnJ1xuaW1wb3J0IHI3IGZyb20gJy4vc3RhdGljL3I3LmpwZydcbmltcG9ydCByOCBmcm9tICcuL3N0YXRpYy9yOC5qcGcnXG5pbXBvcnQgcjkgZnJvbSAnLi9zdGF0aWMvcjkuanBnJ1xuaW1wb3J0IHIxMCBmcm9tICcuL3N0YXRpYy9yMTAuanBnJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcblxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKVxuICAgXG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2FyZChpbWFnZVNyYywgdGl0bGVuYW1lLCBwcmljZVRhZywgaW5ncmVkaWVudHMpe1xuXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcblxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlXG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVNyY1xuICAgICAgICBjYXJkLmFwcGVuZChpbWcpXG5cbiAgICAgICAgbGV0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZFRleHQuY2xhc3NMaXN0LmFkZCgnY2FyZFRleHQnKVxuXG4gICAgICAgIGxldCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKCd0ZXh0SGVhZGVyJylcblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVuYW1lXG4gICAgICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBwcmljZS5pbm5lckhUTUwgPSBwcmljZVRhZ1xuICAgICAgICB0ZXh0SGVhZGVyLmFwcGVuZCh0aXRsZSlcbiAgICAgICAgdGV4dEhlYWRlci5hcHBlbmQocHJpY2UpXG4gICAgICAgIGNhcmRUZXh0LmFwcGVuZCh0ZXh0SGVhZGVyKVxuXG4gICAgICAgIGxldCB0ZXh0SW5ncmVkaWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0ZXh0SW5ncmVkaWVudC5jbGFzc0xpc3QuYWRkKCd0ZXh0SW5ncmVkaWVudCcpXG4gICAgICAgIHRleHRJbmdyZWRpZW50LmlubmVySFRNTCA9IGluZ3JlZGllbnRzXG4gICAgICAgIGNhcmRUZXh0LmFwcGVuZCh0ZXh0SW5ncmVkaWVudClcbiAgICAgICAgY2FyZC5hcHBlbmQoY2FyZFRleHQpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY2FyZFxuICAgIH1cblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjEsJ1Bvd3NpY2xlIFBhcmZhaXQnLCczLjk5JyxcbiAgICAnU2xpY2VlZCBTdHJhd2JlcnJpZXMsIFZhbmlsbGEgWW9ndXJ0LCBNaW5pIE1hcnNobWFsbG93cywgSG9uZXksIEJsdWUgU3ByaW5rbGVzLicpKVxuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ2FyZChyMiwnTHVtYmVyamFjayBUb2FzdCcsJzEuOTknLFxuICAgICdXaGl0ZSBCcmVhZCwgTWlsaywgQnJvd24gU3VnYXIsIENpbm5hbW9uLCBOdXRtZWcsIFZhbmlsbGEgRXh0cmFjdCwgUmVhbCBDcnVtYmxlZCBCYWNvbi4nICkpXG4gICAgXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ2FyZChyMywnT25pb24gWmVzdCBDb29raWVzJywnMS40OScsXG4gICAgJ0xhcmdlIFN3ZWV0IE9uaW9uLCBQdXJwbGUgRm9vZCBDb2xvcmluZywgR3JhbnVsYXRlZCBTdWdhciwgWW91ciBGYXZvcml0ZSBDb29raWUgRG91Z2hlIFJlY2lwZS4nKSlcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjQsXCJSdWR5J3MgUmV1YmVuXCIsJzIuNDknLFxuICAgICdNYXJibGUgUnllIEJyZWFkLCBDb3JuZWQgQmVlZiwgQXdlc29tZSBTYXVjZSwgU3dpc3MgQ2hlZXNlLCBCdXR0ZXIsIERyYWluZWQgU2F1ZXJrcmF1dC4nICkpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHI1LFwiVG9hc3R3b29kIFBvdXRpbmVcIiwnMS45OScsXG4gICAgJ1BvdGF0b2VzLCBPbGl2ZSBPaWwsIEdhcmxpYyBQb3dkZXIsIFBhcHJpa2EsIFNhbHQsIEJsYWNrIFBlcHBlciwgQ29va2luZyBTcHJheSwgVG9hc3R3b29kIEdyYXZ5LicgKSlcbiAgIFxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjYsXCJKYWNrLU8tTW9sZVwiLCczLjQ5JyxcbiAgICAnUHVtcGtpbiBQdXJlZSwgRnJlc2ggQ2lsYW50cm8sIExpbWUgSnVpY2UsIERpY2VkIE9uaW9uLCBDaGlsaSBQb3dlZGVkciwgQmxhY2sgUGVwcGVyLCBUb3J0aWxsYSBDaGlwcy4nICkpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHI3LFwiU2l6emxlIFNoZWxsIFRhY29zXCIsJzIuNDknLFxuICAgICdDcnVzaGVkIFJlZCBQZXBwZXIsIEdhcmxpYyBQb3dkZXIsIEdyb3VuZCBCZWVmLCBDaGlsaSBQb3dkZXIsIERyaWVkIE9yZWdhbm8sIFNocmVkZGVkIE1leGljYW4gQ2hlZXNlLicgKSlcbiAgICBcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHI4LFwiU3RyZXVzZWxcIiwnMC45OScsICBcbiAgICAnU29mdGVuZWQsIFVuc2FsdGVkIEJ1dHRlciwgQWxsLVB1cnBvc2UgRmxvdXIsIEJyb3duIFN1Z2FyLCBTdWdhci4nICkpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHI5LFwiUmljbydzIENobGkgRG9nc1wiLCcyLjk5JyxcbiAgICAnQ2hlZGRhciBDaGVlc2UsIE9uaW9uLCBVbnN3ZWV0ZW5lZCBDaG9jb2xhdGUsIFRvbWF0byBTYXVjZSwgR3JvdW5kIEJlZWYsIEhvdGRvZ3MsIEhvdGRvZyBCdW5zLicgKSlcbiAgICBcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHIxMCxcIlJvbWFubyBRdWFydGV0IFBpenphXCIsJzQuOTknLFxuICAgICdQaXp6YSBTYXVjZSwgUGl6emEgRG91Z2gsIE1venphcmVsbGEgQ2hlZXNlLCBQZXBwZXJvbmksIEl0YWxpYW4gU2F1c2FnZSwgQ2FubmVkIE11c2hyb29tcywgQmVsbCBQZXBwZXIuJyApKVxuXG4gICAgYm9keS5hcHBlbmQobWVudUNvbnRhaW5lcilcbn0iLCJpbXBvcnQgbG9nbyBmcm9tICcuL3N0YXRpYy9waXp6YWxvZ28ucG5nJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpXG5cbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGxldCBJbWcgPSBuZXcgSW1hZ2VcbiAgICBJbWcuc3JjID0gbG9nb1xuICAgIFxuXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpXG4gICAgbmF2LmFwcGVuZENoaWxkKGRpdilcblxuICAgIGxldCBkaXZDaGlsZCA9IGZ1bmN0aW9uKGlubmVydGV4dCl7XG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbGlua0J1dHRvbicpXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBpbm5lcnRleHRcbiAgICAgICAgcmV0dXJuICAgICAgICAgIGJ1dHRvblxuICAgIH1cbiAgICBjb25zdCBob21lQnV0dG9uID0gZGl2Q2hpbGQoJ0hvbWUnKVxuICAgIGhvbWVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWUnKVxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkaXZDaGlsZCgnTWVudScpXG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudScpXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRpdkNoaWxkKCdDb250YWN0JylcbiAgICBjb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWN0JylcblxuICAgIGRpdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKVxuICAgIGRpdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKVxuICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChuYXYpXG59XG5cbmV4cG9ydCBsZXQgaW5pdGlhbGl6ZUxpc3RlbmVyID0gKCkgPT57XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICByZW5kZXIoKVxuICAgICAgICBcbiAgICB9KVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCByZW5kZXJOYXYgZnJvbSAnLi9uYXYuanMnXG5pbXBvcnQgcmVuZGVyRm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJ1xuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJ1xuaW1wb3J0ICcuL3N0YXRpYy9zdHlsZXMuY3NzJ1xuXG5cbmxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuXG5yZW5kZXJOYXYoKVxucmVuZGVySG9tZSgpXG5yZW5kZXJGb290ZXIoKVxuXG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxubGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXG5cblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuXG4gIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5jaGlsZHJlblsxXSlcbiAgYm9keS5yZW1vdmVDaGlsZChib2R5LmNoaWxkcmVuWzFdKVxuICByZW5kZXJIb21lKClcbiAgcmVuZGVyRm9vdGVyKClcbn0pXG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblxuICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuY2hpbGRyZW5bMV0pXG4gIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5jaGlsZHJlblsxXSlcbiAgcmVuZGVyTWVudSgpXG4gIHJlbmRlckZvb3RlcigpXG59KVxuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblxuICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuY2hpbGRyZW5bMV0pXG4gIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5jaGlsZHJlblsxXSlcbiAgcmVuZGVyQ29udGFjdCgpXG4gIHJlbmRlckZvb3RlcigpXG5cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=