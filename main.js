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
    'Cheddar Cheese, Onion, Unsweetened Chocolate, Tomato Sauce, Ground Beef, Hotdogs, Hotdog Buns' ))
    
    menuContainer.append(createCard(_static_r10_jpg__WEBPACK_IMPORTED_MODULE_9__,"Romano Quartet Pizza",'4.99',
    'Pizza Sauce, Pizza Dough, Mozzarella Cheese, Pepperoni, Italian Sausage, Canned Mushrooms, Bell Pepper' ))

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

module.exports = __webpack_require__.p + "e62cd32c3c04fd38f5c2.png";

/***/ }),

/***/ "./src/static/r1.jpg":
/*!***************************!*\
  !*** ./src/static/r1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc10730fa9cf5f20dc18.jpg";

/***/ }),

/***/ "./src/static/r10.jpg":
/*!****************************!*\
  !*** ./src/static/r10.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b4797584ca26f8dd5f4.jpg";

/***/ }),

/***/ "./src/static/r2.jpg":
/*!***************************!*\
  !*** ./src/static/r2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "409f1a060ccf71972817.jpg";

/***/ }),

/***/ "./src/static/r3.jpg":
/*!***************************!*\
  !*** ./src/static/r3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1de88d857b1c9ebb7806.jpg";

/***/ }),

/***/ "./src/static/r4.jpg":
/*!***************************!*\
  !*** ./src/static/r4.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21c5e0a24500519a984b.jpg";

/***/ }),

/***/ "./src/static/r5.jpg":
/*!***************************!*\
  !*** ./src/static/r5.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c48e6b78a62f17088687.jpg";

/***/ }),

/***/ "./src/static/r6.jpg":
/*!***************************!*\
  !*** ./src/static/r6.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57a5ece27bd486c7d01d.jpg";

/***/ }),

/***/ "./src/static/r7.jpg":
/*!***************************!*\
  !*** ./src/static/r7.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c22a79ab9d393008c946.jpg";

/***/ }),

/***/ "./src/static/r8.jpg":
/*!***************************!*\
  !*** ./src/static/r8.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b962fca2a2c787d9046d.jpg";

/***/ }),

/***/ "./src/static/r9.jpg":
/*!***************************!*\
  !*** ./src/static/r9.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e99e35d3bccb419efb96.jpg";

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
/* harmony import */ var _static_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static/styles.css */ "./src/static/styles.css");







let body = document.getElementById('body')

;(0,_nav_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

let homeButton = document.getElementById('home')
let menuButton = document.getElementById('menu')



homeButton.addEventListener('click', ()=>{
  menuButton.classList.remove('active')
  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  ;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
  ;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

menuButton.addEventListener('click', ()=>{
  homeButton.classList.remove('active')
  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
  ;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEVBQUUscURBQVU7QUFDWixFQUFFLHVEQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVU7QUFDWixFQUFFLHVEQUFZO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0YXRpYy9zdHlsZXMuY3NzP2FhZTMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKXtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5JylcblxuICAgIGxldCBkaXZGb290ZXIgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXZGb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcblxuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gJ0NvcHlyaWdodCDCqSAyMDIzIEZ1eidcbiAgICBkaXZGb290ZXIuYXBwZW5kKHBhcmFncmFwaClcblxuICAgIGxldCBsaW5rTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmtMb2dvLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vRnV6NycpXG4gICAgZGl2Rm9vdGVyLmFwcGVuZChsaW5rTG9nbylcblxuXG4gICAgYm9keS5hcHBlbmQoZGl2Rm9vdGVyKVxufSIsImltcG9ydCBsb2dvIGZyb20gJy4vc3RhdGljL3BpenphbG9nby5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVDb250YWluZXInKVxuXG4gICAgbGV0IGltZ0xvZ28gPSBuZXcgSW1hZ2UoKVxuICAgIGltZ0xvZ28uc3JjID0gbG9nb1xuICAgIGNvbnRhaW5lci5hcHBlbmQoaW1nTG9nbylcblxuICAgIGxldCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG91cnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cnNDb250YWluZXInKVxuICAgIFxuICAgIGxldCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG91cnNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaG91cnNIZWFkZXInKVxuXG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSAnSG91cnMnXG4gICAgaG91cnNIZWFkZXIuYXBwZW5kKHBhcmFncmFwaClcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmQoaG91cnNIZWFkZXIpXG4gICAgXG4gICAgbGV0IGhvdXJzQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG91cnNCb2R5LmNsYXNzTGlzdC5hZGQoJ2hvdXJzQm9keScpXG4gICAgXG4gICAgbGV0IGNyZWF0ZVRpbWUgPSBmdW5jdGlvbihlbGVtZW50LGRheVR5cGUsc3RhcnRUaW1lLGVuZFRpbWUpe1xuICAgICAgICBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpXG4gICAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBkYXlUeXBlICsgXCI6IFwiICsgc3RhcnRUaW1lICtcIiAtIFwiICsgZW5kVGltZTtcbiAgICAgICAgcmV0dXJuIHBhcmFncmFwaFxuICAgIH1cblxuICAgIGxldCBzdW5kYXkgPSBjcmVhdGVUaW1lKCdwJywnU3VuZGF5JywnODowMGFtJywnODowMHBtJylcbiAgICBsZXQgbW9uZGF5ID0gY3JlYXRlVGltZSgncCcsJ01vbmRheScsJzY6MDBhbScsICc2OjAwcG0nKVxuICAgIGxldCB0dWVzZGF5ID0gY3JlYXRlVGltZSgncCcsJ1R1ZXNkYXknLCc2OjAwYW0nLCAnNjowMHBtJylcbiAgICBsZXQgd2VkbmVzZGF5ID0gY3JlYXRlVGltZSgncCcsJ1dlZG5lc2RheScsJzY6MDBhbScsJzY6MDBwbScpXG4gICAgbGV0IHRodXJzZGF5ID0gY3JlYXRlVGltZSgncCcsJ1RodXJzZGF5JywnNjowMGFtJywgJzEwOjAwcG0nKVxuICAgIGxldCBmcmlkYXkgPSBjcmVhdGVUaW1lKCdwJywnRnJpZGF5JywgJzY6MDBhbScsICcxMDowMHBtJylcbiAgICBsZXQgc2F0dXJkYXkgPSBjcmVhdGVUaW1lKCdwJywnU2F0dXJkYXknLCc4OjAwYW0nLCcxMDowMHBtJylcblxuICAgIGhvdXJzQm9keS5hcHBlbmQoc3VuZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQobW9uZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQodHVlc2RheSlcbiAgICBob3Vyc0JvZHkuYXBwZW5kKHdlZG5lc2RheSlcbiAgICBob3Vyc0JvZHkuYXBwZW5kKHRodXJzZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQoZnJpZGF5KVxuICAgIGhvdXJzQm9keS5hcHBlbmQoc2F0dXJkYXkpXG5cbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmQoaG91cnNCb2R5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZChob3Vyc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZChjb250YWluZXIpXG59IiwiaW1wb3J0IHIxIGZyb20gJy4vc3RhdGljL3IxLmpwZydcbmltcG9ydCByMiBmcm9tICcuL3N0YXRpYy9yMi5qcGcnXG5pbXBvcnQgcjMgZnJvbSAnLi9zdGF0aWMvcjMuanBnJ1xuaW1wb3J0IHI0IGZyb20gJy4vc3RhdGljL3I0LmpwZydcbmltcG9ydCByNSBmcm9tICcuL3N0YXRpYy9yNS5qcGcnXG5pbXBvcnQgcjYgZnJvbSAnLi9zdGF0aWMvcjYuanBnJ1xuaW1wb3J0IHI3IGZyb20gJy4vc3RhdGljL3I3LmpwZydcbmltcG9ydCByOCBmcm9tICcuL3N0YXRpYy9yOC5qcGcnXG5pbXBvcnQgcjkgZnJvbSAnLi9zdGF0aWMvcjkuanBnJ1xuaW1wb3J0IHIxMCBmcm9tICcuL3N0YXRpYy9yMTAuanBnJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcblxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKVxuICAgXG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2FyZChpbWFnZVNyYywgdGl0bGVuYW1lLCBwcmljZVRhZywgaW5ncmVkaWVudHMpe1xuXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcblxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlXG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVNyY1xuICAgICAgICBjYXJkLmFwcGVuZChpbWcpXG5cbiAgICAgICAgbGV0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZFRleHQuY2xhc3NMaXN0LmFkZCgnY2FyZFRleHQnKVxuXG4gICAgICAgIGxldCB0ZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKCd0ZXh0SGVhZGVyJylcblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVuYW1lXG4gICAgICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBwcmljZS5pbm5lckhUTUwgPSBwcmljZVRhZ1xuICAgICAgICB0ZXh0SGVhZGVyLmFwcGVuZCh0aXRsZSlcbiAgICAgICAgdGV4dEhlYWRlci5hcHBlbmQocHJpY2UpXG4gICAgICAgIGNhcmRUZXh0LmFwcGVuZCh0ZXh0SGVhZGVyKVxuXG4gICAgICAgIGxldCB0ZXh0SW5ncmVkaWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0ZXh0SW5ncmVkaWVudC5jbGFzc0xpc3QuYWRkKCd0ZXh0SW5ncmVkaWVudCcpXG4gICAgICAgIHRleHRJbmdyZWRpZW50LmlubmVySFRNTCA9IGluZ3JlZGllbnRzXG4gICAgICAgIGNhcmRUZXh0LmFwcGVuZCh0ZXh0SW5ncmVkaWVudClcbiAgICAgICAgY2FyZC5hcHBlbmQoY2FyZFRleHQpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY2FyZFxuICAgIH1cblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjEsJ1Bvd3NpY2xlIFBhcmZhaXQnLCczLjk5JyxcbiAgICAnU2xpY2VlZCBTdHJhd2JlcnJpZXMsIFZhbmlsbGEgWW9ndXJ0LCBNaW5pIE1hcnNobWFsbG93cywgSG9uZXksIEJsdWUgU3ByaW5rbGVzLicpKVxuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ2FyZChyMiwnTHVtYmVyamFjayBUb2FzdCcsJzEuOTknLFxuICAgICdXaGl0ZSBCcmVhZCwgTWlsaywgQnJvd24gU3VnYXIsIENpbm5hbW9uLCBOdXRtZWcsIFZhbmlsbGEgRXh0cmFjdCwgUmVhbCBDcnVtYmxlZCBCYWNvbi4nICkpXG4gICAgXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlQ2FyZChyMywnT25pb24gWmVzdCBDb29raWVzJywnMS40OScsXG4gICAgJ0xhcmdlIFN3ZWV0IE9uaW9uLCBQdXJwbGUgRm9vZCBDb2xvcmluZywgR3JhbnVsYXRlZCBTdWdhciwgWW91ciBGYXZvcml0ZSBDb29raWUgRG91Z2hlIFJlY2lwZS4nKSlcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjQsXCJSdWR5J3MgUmV1YmVuXCIsJzIuNDknLFxuICAgICdNYXJibGUgUnllIEJyZWFkLCBDb3JuZWQgQmVlZiwgQXdlc29tZSBTYXVjZSwgU3dpc3MgQ2hlZXNlLCBCdXR0ZXIsIERyYWluZWQgU2F1ZXJrcmF1dC4nICkpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHI1LFwiVG9hc3R3b29kIFBvdXRpbmVcIiwnMS45OScsXG4gICAgJ1BvdGF0b2VzLCBPbGl2ZSBPaWwsIEdhcmxpYyBQb3dkZXIsIFBhcHJpa2EsIFNhbHQsIEJsYWNrIFBlcHBlciwgQ29va2luZyBTcHJheSwgVG9hc3R3b29kIEdyYXZ5LicgKSlcbiAgIFxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjYsXCJKYWNrLU8tTW9sZVwiLCczLjQ5JyxcbiAgICAnUHVtcGtpbiBQdXJlZSwgRnJlc2ggQ2lsYW50cm8sIExpbWUgSnVpY2UsIERpY2VkIE9uaW9uLCBDaGlsaSBQb3dlZGVkciwgQmxhY2sgUGVwcGVyLCBUb3J0aWxsYSBDaGlwcy4nICkpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHI3LFwiU2l6emxlIFNoZWxsIFRhY29zXCIsJzIuNDknLFxuICAgICdDcnVzaGVkIFJlZCBQZXBwZXIsIEdhcmxpYyBQb3dkZXIsIEdyb3VuZCBCZWVmLCBDaGlsaSBQb3dkZXIsIERyaWVkIE9yZWdhbm8sIFNocmVkZGVkIE1leGljYW4gQ2hlZXNlLicgKSlcbiAgICBcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHI4LFwiU3RyZXVzZWxcIiwnMC45OScsICBcbiAgICAnU29mdGVuZWQsIFVuc2FsdGVkIEJ1dHRlciwgQWxsLVB1cnBvc2UgRmxvdXIsIEJyb3duIFN1Z2FyLCBTdWdhci4nICkpXG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVDYXJkKHI5LFwiUmljbydzIENobGkgRG9nc1wiLCcyLjk5JyxcbiAgICAnQ2hlZGRhciBDaGVlc2UsIE9uaW9uLCBVbnN3ZWV0ZW5lZCBDaG9jb2xhdGUsIFRvbWF0byBTYXVjZSwgR3JvdW5kIEJlZWYsIEhvdGRvZ3MsIEhvdGRvZyBCdW5zJyApKVxuICAgIFxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZUNhcmQocjEwLFwiUm9tYW5vIFF1YXJ0ZXQgUGl6emFcIiwnNC45OScsXG4gICAgJ1BpenphIFNhdWNlLCBQaXp6YSBEb3VnaCwgTW96emFyZWxsYSBDaGVlc2UsIFBlcHBlcm9uaSwgSXRhbGlhbiBTYXVzYWdlLCBDYW5uZWQgTXVzaHJvb21zLCBCZWxsIFBlcHBlcicgKSlcblxuICAgIGJvZHkuYXBwZW5kKG1lbnVDb250YWluZXIpXG59IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9zdGF0aWMvcGl6emFsb2dvLnBuZydcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBsZXQgSW1nID0gbmV3IEltYWdlXG4gICAgSW1nLnNyYyA9IGxvZ29cbiAgICBcblxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCduYXZiYXInKVxuICAgIG5hdi5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICBsZXQgZGl2Q2hpbGQgPSBmdW5jdGlvbihpbm5lcnRleHQpe1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpbmtCdXR0b24nKVxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gaW5uZXJ0ZXh0XG4gICAgICAgIHJldHVybiAgICAgICAgICBidXR0b25cbiAgICB9XG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRpdkNoaWxkKCdIb21lJylcbiAgICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJylcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZGl2Q2hpbGQoJ01lbnUnKVxuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKVxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkaXZDaGlsZCgnQ29udGFjdCcpXG4gICAgY29udGFjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdCcpXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcbiAgICBkaXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbilcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2KVxufVxuXG5leHBvcnQgbGV0IGluaXRpYWxpemVMaXN0ZW5lciA9ICgpID0+e1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJydcbiAgICAgICAgcmVuZGVyKClcbiAgICAgICAgXG4gICAgfSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcmVuZGVyTmF2IGZyb20gJy4vbmF2LmpzJ1xuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcydcbmltcG9ydCByZW5kZXJIb21lIGZyb20gJy4vaG9tZS5qcydcbmltcG9ydCByZW5kZXJNZW51IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCAnLi9zdGF0aWMvc3R5bGVzLmNzcydcblxuXG5sZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5JylcblxucmVuZGVyTmF2KClcbnJlbmRlck1lbnUoKVxucmVuZGVyRm9vdGVyKClcblxubGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcblxuXG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5jaGlsZHJlblsxXSlcbiAgYm9keS5yZW1vdmVDaGlsZChib2R5LmNoaWxkcmVuWzFdKVxuICByZW5kZXJIb21lKClcbiAgcmVuZGVyRm9vdGVyKClcbn0pXG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5jaGlsZHJlblsxXSlcbiAgYm9keS5yZW1vdmVDaGlsZChib2R5LmNoaWxkcmVuWzFdKVxuICByZW5kZXJNZW51KClcbiAgcmVuZGVyRm9vdGVyKClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=