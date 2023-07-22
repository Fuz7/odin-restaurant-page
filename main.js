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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQSxvREFBUztBQUNULHFEQUFVO0FBQ1YsdURBQVk7O0FBRVo7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUscURBQVU7QUFDWixFQUFFLHVEQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUscURBQVU7QUFDWixFQUFFLHVEQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsd0RBQWE7QUFDZixFQUFFLHVEQUFZOztBQUVkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdGF0aWMvc3R5bGVzLmNzcz9hYWUzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpXG4gICAgXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgbGV0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdENvbnRhaW5lcicpXG5cbiAgICBib2R5LmFwcGVuZChjb250YWN0Q29udGFpbmVyKVxuXG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuXG4gICAgbGV0IGRpdkZvb3RlciA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdkZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuXG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSAnQ29weXJpZ2h0IMKpIDIwMjMgRnV6J1xuICAgIGRpdkZvb3Rlci5hcHBlbmQocGFyYWdyYXBoKVxuXG4gICAgbGV0IGxpbmtMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGlua0xvZ28uc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9GdXo3JylcbiAgICBkaXZGb290ZXIuYXBwZW5kKGxpbmtMb2dvKVxuXG5cbiAgICBib2R5LmFwcGVuZChkaXZGb290ZXIpXG59IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9zdGF0aWMvcGl6emFsb2dvLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpXG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZUNvbnRhaW5lcicpXG5cbiAgICBsZXQgaW1nTG9nbyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nTG9nby5zcmMgPSBsb2dvXG4gICAgY29udGFpbmVyLmFwcGVuZChpbWdMb2dvKVxuXG4gICAgbGV0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob3Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Vyc0NvbnRhaW5lcicpXG4gICAgXG4gICAgbGV0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob3Vyc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdob3Vyc0hlYWRlcicpXG5cbiAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9ICdIb3VycydcbiAgICBob3Vyc0hlYWRlci5hcHBlbmQocGFyYWdyYXBoKVxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZChob3Vyc0hlYWRlcilcbiAgICBcbiAgICBsZXQgaG91cnNCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob3Vyc0JvZHkuY2xhc3NMaXN0LmFkZCgnaG91cnNCb2R5JylcbiAgICBcbiAgICBsZXQgY3JlYXRlVGltZSA9IGZ1bmN0aW9uKGVsZW1lbnQsZGF5VHlwZSxzdGFydFRpbWUsZW5kVGltZSl7XG4gICAgICAgIHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcbiAgICAgICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IGRheVR5cGUgKyBcIjogXCIgKyBzdGFydFRpbWUgK1wiIC0gXCIgKyBlbmRUaW1lO1xuICAgICAgICByZXR1cm4gcGFyYWdyYXBoXG4gICAgfVxuXG4gICAgbGV0IHN1bmRheSA9IGNyZWF0ZVRpbWUoJ3AnLCdTdW5kYXknLCc4OjAwYW0nLCc4OjAwcG0nKVxuICAgIGxldCBtb25kYXkgPSBjcmVhdGVUaW1lKCdwJywnTW9uZGF5JywnNjowMGFtJywgJzY6MDBwbScpXG4gICAgbGV0IHR1ZXNkYXkgPSBjcmVhdGVUaW1lKCdwJywnVHVlc2RheScsJzY6MDBhbScsICc2OjAwcG0nKVxuICAgIGxldCB3ZWRuZXNkYXkgPSBjcmVhdGVUaW1lKCdwJywnV2VkbmVzZGF5JywnNjowMGFtJywnNjowMHBtJylcbiAgICBsZXQgdGh1cnNkYXkgPSBjcmVhdGVUaW1lKCdwJywnVGh1cnNkYXknLCc2OjAwYW0nLCAnMTA6MDBwbScpXG4gICAgbGV0IGZyaWRheSA9IGNyZWF0ZVRpbWUoJ3AnLCdGcmlkYXknLCAnNjowMGFtJywgJzEwOjAwcG0nKVxuICAgIGxldCBzYXR1cmRheSA9IGNyZWF0ZVRpbWUoJ3AnLCdTYXR1cmRheScsJzg6MDBhbScsJzEwOjAwcG0nKVxuXG4gICAgaG91cnNCb2R5LmFwcGVuZChzdW5kYXkpXG4gICAgaG91cnNCb2R5LmFwcGVuZChtb25kYXkpXG4gICAgaG91cnNCb2R5LmFwcGVuZCh0dWVzZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQod2VkbmVzZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQodGh1cnNkYXkpXG4gICAgaG91cnNCb2R5LmFwcGVuZChmcmlkYXkpXG4gICAgaG91cnNCb2R5LmFwcGVuZChzYXR1cmRheSlcblxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZChob3Vyc0JvZHkpXG5cbiAgICBjb250YWluZXIuYXBwZW5kKGhvdXJzQ29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kKGNvbnRhaW5lcilcbn0iLCJpbXBvcnQgcjEgZnJvbSAnLi9zdGF0aWMvcjEuanBnJ1xuaW1wb3J0IHIyIGZyb20gJy4vc3RhdGljL3IyLmpwZydcbmltcG9ydCByMyBmcm9tICcuL3N0YXRpYy9yMy5qcGcnXG5pbXBvcnQgcjQgZnJvbSAnLi9zdGF0aWMvcjQuanBnJ1xuaW1wb3J0IHI1IGZyb20gJy4vc3RhdGljL3I1LmpwZydcbmltcG9ydCByNiBmcm9tICcuL3N0YXRpYy9yNi5qcGcnXG5pbXBvcnQgcjcgZnJvbSAnLi9zdGF0aWMvcjcuanBnJ1xuaW1wb3J0IHI4IGZyb20gJy4vc3RhdGljL3I4LmpwZydcbmltcG9ydCByOSBmcm9tICcuL3N0YXRpYy9yOS5qcGcnXG5pbXBvcnQgcjEwIGZyb20gJy4vc3RhdGljL3IxMC5qcGcnXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpXG4gICBcbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVDYXJkKGltYWdlU3JjLCB0aXRsZW5hbWUsIHByaWNlVGFnLCBpbmdyZWRpZW50cyl7XG5cbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2VcbiAgICAgICAgaW1nLnNyYyA9IGltYWdlU3JjXG4gICAgICAgIGNhcmQuYXBwZW5kKGltZylcblxuICAgICAgICBsZXQgY2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjYXJkVGV4dC5jbGFzc0xpc3QuYWRkKCdjYXJkVGV4dCcpXG5cbiAgICAgICAgbGV0IHRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0ZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RleHRIZWFkZXInKVxuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZW5hbWVcbiAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHByaWNlLmlubmVySFRNTCA9IHByaWNlVGFnXG4gICAgICAgIHRleHRIZWFkZXIuYXBwZW5kKHRpdGxlKVxuICAgICAgICB0ZXh0SGVhZGVyLmFwcGVuZChwcmljZSlcbiAgICAgICAgY2FyZFRleHQuYXBwZW5kKHRleHRIZWFkZXIpXG5cbiAgICAgICAgbGV0IHRleHRJbmdyZWRpZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRleHRJbmdyZWRpZW50LmNsYXNzTGlzdC5hZGQoJ3RleHRJbmdyZWRpZW50JylcbiAgICAgICAgdGV4dEluZ3JlZGllbnQuaW5uZXJIVE1MID0gaW5ncmVkaWVudHNcbiAgICAgICAgY2FyZFRleHQuYXBwZW5kKHRleHRJbmdyZWRpZW50KVxuICAgICAgICBjYXJkLmFwcGVuZChjYXJkVGV4dClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjYXJkXG4gICAgfVxuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ2FyZChyMSwnUG93c2ljbGUgUGFyZmFpdCcsJzMuOTknLFxuICAgICdTbGljZWVkIFN0cmF3YmVycmllcywgVmFuaWxsYSBZb2d1cnQsIE1pbmkgTWFyc2htYWxsb3dzLCBIb25leSwgQmx1ZSBTcHJpbmtsZXMuJykpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHIyLCdMdW1iZXJqYWNrIFRvYXN0JywnMS45OScsXG4gICAgJ1doaXRlIEJyZWFkLCBNaWxrLCBCcm93biBTdWdhciwgQ2lubmFtb24sIE51dG1lZywgVmFuaWxsYSBFeHRyYWN0LCBSZWFsIENydW1ibGVkIEJhY29uLicgKSlcbiAgICBcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHIzLCdPbmlvbiBaZXN0IENvb2tpZXMnLCcxLjQ5JyxcbiAgICAnTGFyZ2UgU3dlZXQgT25pb24sIFB1cnBsZSBGb29kIENvbG9yaW5nLCBHcmFudWxhdGVkIFN1Z2FyLCBZb3VyIEZhdm9yaXRlIENvb2tpZSBEb3VnaGUgUmVjaXBlLicpKVxuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ2FyZChyNCxcIlJ1ZHkncyBSZXViZW5cIiwnMi40OScsXG4gICAgJ01hcmJsZSBSeWUgQnJlYWQsIENvcm5lZCBCZWVmLCBBd2Vzb21lIFNhdWNlLCBTd2lzcyBDaGVlc2UsIEJ1dHRlciwgRHJhaW5lZCBTYXVlcmtyYXV0LicgKSlcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjUsXCJUb2FzdHdvb2QgUG91dGluZVwiLCcxLjk5JyxcbiAgICAnUG90YXRvZXMsIE9saXZlIE9pbCwgR2FybGljIFBvd2RlciwgUGFwcmlrYSwgU2FsdCwgQmxhY2sgUGVwcGVyLCBDb29raW5nIFNwcmF5LCBUb2FzdHdvb2QgR3JhdnkuJyApKVxuICAgXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ2FyZChyNixcIkphY2stTy1Nb2xlXCIsJzMuNDknLFxuICAgICdQdW1wa2luIFB1cmVlLCBGcmVzaCBDaWxhbnRybywgTGltZSBKdWljZSwgRGljZWQgT25pb24sIENoaWxpIFBvd2VkZWRyLCBCbGFjayBQZXBwZXIsIFRvcnRpbGxhIENoaXBzLicgKSlcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjcsXCJTaXp6bGUgU2hlbGwgVGFjb3NcIiwnMi40OScsXG4gICAgJ0NydXNoZWQgUmVkIFBlcHBlciwgR2FybGljIFBvd2RlciwgR3JvdW5kIEJlZWYsIENoaWxpIFBvd2RlciwgRHJpZWQgT3JlZ2FubywgU2hyZWRkZWQgTWV4aWNhbiBDaGVlc2UuJyApKVxuICAgIFxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjgsXCJTdHJldXNlbFwiLCcwLjk5JywgIFxuICAgICdTb2Z0ZW5lZCwgVW5zYWx0ZWQgQnV0dGVyLCBBbGwtUHVycG9zZSBGbG91ciwgQnJvd24gU3VnYXIsIFN1Z2FyLicgKSlcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjksXCJSaWNvJ3MgQ2hsaSBEb2dzXCIsJzIuOTknLFxuICAgICdDaGVkZGFyIENoZWVzZSwgT25pb24sIFVuc3dlZXRlbmVkIENob2NvbGF0ZSwgVG9tYXRvIFNhdWNlLCBHcm91bmQgQmVlZiwgSG90ZG9ncywgSG90ZG9nIEJ1bnMuJyApKVxuICAgIFxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjEwLFwiUm9tYW5vIFF1YXJ0ZXQgUGl6emFcIiwnNC45OScsXG4gICAgJ1BpenphIFNhdWNlLCBQaXp6YSBEb3VnaCwgTW96emFyZWxsYSBDaGVlc2UsIFBlcHBlcm9uaSwgSXRhbGlhbiBTYXVzYWdlLCBDYW5uZWQgTXVzaHJvb21zLCBCZWxsIFBlcHBlci4nICkpXG5cbiAgICBib2R5LmFwcGVuZChtZW51Q29udGFpbmVyKVxufSIsImltcG9ydCBsb2dvIGZyb20gJy4vc3RhdGljL3BpenphbG9nby5wbmcnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKXtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5JylcblxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgbGV0IEltZyA9IG5ldyBJbWFnZVxuICAgIEltZy5zcmMgPSBsb2dvXG4gICAgXG5cbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJylcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgbGV0IGRpdkNoaWxkID0gZnVuY3Rpb24oaW5uZXJ0ZXh0KXtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaW5rQnV0dG9uJylcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGlubmVydGV4dFxuICAgICAgICByZXR1cm4gICAgICAgICAgYnV0dG9uXG4gICAgfVxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkaXZDaGlsZCgnSG9tZScpXG4gICAgaG9tZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZScpXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRpdkNoaWxkKCdNZW51JylcbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51JylcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZGl2Q2hpbGQoJ0NvbnRhY3QnKVxuICAgIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3QnKVxuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXG4gICAgZGl2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG5hdilcbn1cblxuZXhwb3J0IGxldCBpbml0aWFsaXplTGlzdGVuZXIgPSAoKSA9PntcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5JylcbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnXG4gICAgICAgIHJlbmRlcigpXG4gICAgICAgIFxuICAgIH0pXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHJlbmRlck5hdiBmcm9tICcuL25hdi5qcydcbmltcG9ydCByZW5kZXJGb290ZXIgZnJvbSAnLi9mb290ZXIuanMnXG5pbXBvcnQgcmVuZGVySG9tZSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5pbXBvcnQgJy4vc3RhdGljL3N0eWxlcy5jc3MnXG5cblxubGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpXG5cbnJlbmRlck5hdigpXG5yZW5kZXJIb21lKClcbnJlbmRlckZvb3RlcigpXG5cbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxubGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXG5sZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JylcblxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cbiAgYm9keS5yZW1vdmVDaGlsZChib2R5LmNoaWxkcmVuWzFdKVxuICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuY2hpbGRyZW5bMV0pXG4gIHJlbmRlckhvbWUoKVxuICByZW5kZXJGb290ZXIoKVxufSlcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuXG4gIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5jaGlsZHJlblsxXSlcbiAgYm9keS5yZW1vdmVDaGlsZChib2R5LmNoaWxkcmVuWzFdKVxuICByZW5kZXJNZW51KClcbiAgcmVuZGVyRm9vdGVyKClcbn0pXG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuXG4gIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5jaGlsZHJlblsxXSlcbiAgYm9keS5yZW1vdmVDaGlsZChib2R5LmNoaWxkcmVuWzFdKVxuICByZW5kZXJDb250YWN0KClcbiAgcmVuZGVyRm9vdGVyKClcblxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==