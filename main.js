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
    const aboutButton = divChild('About')
    aboutButton.setAttribute('id','about')

    div.appendChild(homeButton)
    div.appendChild(menuButton)
    div.appendChild(aboutButton)

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
/* harmony import */ var _static_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/styles.css */ "./src/static/styles.css");







let body = document.getElementById('body')

;(0,_nav_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

let homeButton = document.getElementById('home')
let menuButton = document.getElementById('menu')

homeButton.addEventListener('click', ()=>{
  body.removeChild(body.children[1])
  body.removeChild(body.children[1])
  ;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
  ;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0VlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnlDOztBQUUxQjtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixrREFBSTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEeUM7Ozs7QUFJMUI7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxrREFBSTtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZ0M7QUFDTTtBQUNKOztBQUVOOzs7QUFHNUI7O0FBRUEsb0RBQVM7QUFDVCxxREFBVTtBQUNWLHVEQUFZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBVTtBQUNaLEVBQUUsdURBQVk7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RhdGljL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpXG5cbiAgICBsZXQgZGl2Rm9vdGVyID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2Rm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG5cbiAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9ICdDb3B5cmlnaHQgwqkgMjAyMyBGdXonXG4gICAgZGl2Rm9vdGVyLmFwcGVuZChwYXJhZ3JhcGgpXG5cbiAgICBsZXQgbGlua0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBsaW5rTG9nby5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL0Z1ejcnKVxuICAgIGRpdkZvb3Rlci5hcHBlbmQobGlua0xvZ28pXG5cblxuICAgIGJvZHkuYXBwZW5kKGRpdkZvb3Rlcilcbn0iLCJpbXBvcnQgbG9nbyBmcm9tICcuL3N0YXRpYy9waXp6YWxvZ28ucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKXtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5JylcblxuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lQ29udGFpbmVyJylcblxuICAgIGxldCBpbWdMb2dvID0gbmV3IEltYWdlKClcbiAgICBpbWdMb2dvLnNyYyA9IGxvZ29cbiAgICBjb250YWluZXIuYXBwZW5kKGltZ0xvZ28pXG5cbiAgICBsZXQgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzQ29udGFpbmVyJylcbiAgICBcbiAgICBsZXQgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhvdXJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzSGVhZGVyJylcblxuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gJ0hvdXJzJ1xuICAgIGhvdXJzSGVhZGVyLmFwcGVuZChwYXJhZ3JhcGgpXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kKGhvdXJzSGVhZGVyKVxuICAgIFxuICAgIGxldCBob3Vyc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhvdXJzQm9keS5jbGFzc0xpc3QuYWRkKCdob3Vyc0JvZHknKVxuICAgIFxuICAgIGxldCBjcmVhdGVUaW1lID0gZnVuY3Rpb24oZWxlbWVudCxkYXlUeXBlLHN0YXJ0VGltZSxlbmRUaW1lKXtcbiAgICAgICAgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxuICAgICAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gZGF5VHlwZSArIFwiOiBcIiArIHN0YXJ0VGltZSArXCIgLSBcIiArIGVuZFRpbWU7XG4gICAgICAgIHJldHVybiBwYXJhZ3JhcGhcbiAgICB9XG5cbiAgICBsZXQgc3VuZGF5ID0gY3JlYXRlVGltZSgncCcsJ1N1bmRheScsJzg6MDBhbScsJzg6MDBwbScpXG4gICAgbGV0IG1vbmRheSA9IGNyZWF0ZVRpbWUoJ3AnLCdNb25kYXknLCc2OjAwYW0nLCAnNjowMHBtJylcbiAgICBsZXQgdHVlc2RheSA9IGNyZWF0ZVRpbWUoJ3AnLCdUdWVzZGF5JywnNjowMGFtJywgJzY6MDBwbScpXG4gICAgbGV0IHdlZG5lc2RheSA9IGNyZWF0ZVRpbWUoJ3AnLCdXZWRuZXNkYXknLCc2OjAwYW0nLCc2OjAwcG0nKVxuICAgIGxldCB0aHVyc2RheSA9IGNyZWF0ZVRpbWUoJ3AnLCdUaHVyc2RheScsJzY6MDBhbScsICcxMDowMHBtJylcbiAgICBsZXQgZnJpZGF5ID0gY3JlYXRlVGltZSgncCcsJ0ZyaWRheScsICc2OjAwYW0nLCAnMTA6MDBwbScpXG4gICAgbGV0IHNhdHVyZGF5ID0gY3JlYXRlVGltZSgncCcsJ1NhdHVyZGF5JywnODowMGFtJywnMTA6MDBwbScpXG5cbiAgICBob3Vyc0JvZHkuYXBwZW5kKHN1bmRheSlcbiAgICBob3Vyc0JvZHkuYXBwZW5kKG1vbmRheSlcbiAgICBob3Vyc0JvZHkuYXBwZW5kKHR1ZXNkYXkpXG4gICAgaG91cnNCb2R5LmFwcGVuZCh3ZWRuZXNkYXkpXG4gICAgaG91cnNCb2R5LmFwcGVuZCh0aHVyc2RheSlcbiAgICBob3Vyc0JvZHkuYXBwZW5kKGZyaWRheSlcbiAgICBob3Vyc0JvZHkuYXBwZW5kKHNhdHVyZGF5KVxuXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kKGhvdXJzQm9keSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoaG91cnNDb250YWluZXIpXG4gICAgYm9keS5hcHBlbmQoY29udGFpbmVyKVxufSIsImltcG9ydCBsb2dvIGZyb20gJy4vc3RhdGljL3BpenphbG9nby5wbmcnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKXtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5JylcblxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgbGV0IEltZyA9IG5ldyBJbWFnZVxuICAgIEltZy5zcmMgPSBsb2dvXG4gICAgXG5cbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJylcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgbGV0IGRpdkNoaWxkID0gZnVuY3Rpb24oaW5uZXJ0ZXh0KXtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaW5rQnV0dG9uJylcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGlubmVydGV4dFxuICAgICAgICByZXR1cm4gICAgICAgICAgYnV0dG9uXG4gICAgfVxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkaXZDaGlsZCgnSG9tZScpXG4gICAgaG9tZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZScpXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRpdkNoaWxkKCdNZW51JylcbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51JylcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRpdkNoaWxkKCdBYm91dCcpXG4gICAgYWJvdXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ2Fib3V0JylcblxuICAgIGRpdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKVxuICAgIGRpdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKVxuICAgIGRpdi5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbilcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2KVxufVxuXG5leHBvcnQgbGV0IGluaXRpYWxpemVMaXN0ZW5lciA9ICgpID0+e1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJydcbiAgICAgICAgcmVuZGVyKClcbiAgICAgICAgXG4gICAgfSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcmVuZGVyTmF2IGZyb20gJy4vbmF2LmpzJ1xuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcydcbmltcG9ydCByZW5kZXJIb21lIGZyb20gJy4vaG9tZS5qcydcblxuaW1wb3J0ICcuL3N0YXRpYy9zdHlsZXMuY3NzJ1xuXG5cbmxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuXG5yZW5kZXJOYXYoKVxucmVuZGVySG9tZSgpXG5yZW5kZXJGb290ZXIoKVxuXG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgYm9keS5yZW1vdmVDaGlsZChib2R5LmNoaWxkcmVuWzFdKVxuICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuY2hpbGRyZW5bMV0pXG4gIHJlbmRlckhvbWUoKVxuICByZW5kZXJGb290ZXIoKVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9