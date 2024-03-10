/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/body-container.ts":
/*!******************************************!*\
  !*** ./src/components/body-container.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBodyElement: () => (/* binding */ createBodyElement)\n/* harmony export */ });\nfunction createBodyElement() {\n    const bodyContainer = document.createElement('div');\n    bodyContainer.className = 'body-container';\n    const body = document.querySelector('body');\n    if (body === null)\n        throw Error('Element is Error');\n    body.className = 'body';\n    body.prepend(bodyContainer);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib2R5LWNvbnRhaW5lci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBUyxpQkFBaUI7SUFDL0IsTUFBTSxhQUFhLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEUsYUFBYSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztJQUUzQyxNQUFNLElBQUksR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsTUFBTSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUV4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2NvbXBvbmVudHMvYm9keS1jb250YWluZXIudHM/OTk1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keUVsZW1lbnQoKSB7XHJcbiAgY29uc3QgYm9keUNvbnRhaW5lcjogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBib2R5Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdib2R5LWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGJvZHk6IEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIGlmIChib2R5ID09PSBudWxsKSB0aHJvdyBFcnJvcignRWxlbWVudCBpcyBFcnJvcicpO1xyXG4gIGJvZHkuY2xhc3NOYW1lID0gJ2JvZHknO1xyXG5cclxuICBib2R5LnByZXBlbmQoYm9keUNvbnRhaW5lcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/body-container.ts\n");

/***/ }),

/***/ "./src/components/login-form.ts":
/*!**************************************!*\
  !*** ./src/components/login-form.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLoginForm: () => (/* binding */ createLoginForm)\n/* harmony export */ });\nfunction createLoginForm() {\n    const modalLoginForm = document.createElement('form');\n    modalLoginForm.className = 'modal-login-form';\n    modalLoginForm.setAttribute('onsubmit', 'return false');\n    const bodyContainer = document.querySelector('.body-container');\n    if (bodyContainer === null)\n        throw Error('Element is Error');\n    bodyContainer.prepend(modalLoginForm);\n    creatInputLoginForm(modalLoginForm);\n    creatButtonLoginForm(modalLoginForm);\n}\nfunction creatInputLoginForm(modalLoginForm) {\n    const inputLoginFormOne = document.createElement('input');\n    const inputLoginFormTwo = document.createElement('input');\n    inputLoginFormOne.className = 'modal-login-form__input';\n    inputLoginFormTwo.className = 'modal-login-form__input';\n    if (modalLoginForm === null)\n        throw Error('Element is Error');\n    modalLoginForm.prepend(inputLoginFormOne);\n    modalLoginForm.prepend(inputLoginFormTwo);\n    setAttributeInput(inputLoginFormOne, inputLoginFormTwo);\n}\nfunction setAttributeInput(inputLoginFormOne, inputLoginFormTwo) {\n    inputLoginFormOne.setAttribute('type', 'text');\n    inputLoginFormTwo.setAttribute('type', 'text');\n    inputLoginFormOne.setAttribute('placeholder', 'First Name');\n    inputLoginFormTwo.setAttribute('placeholder', 'Surname');\n    inputLoginFormOne.setAttribute('required', '');\n    inputLoginFormTwo.setAttribute('required', '');\n    inputLoginFormOne.setAttribute('name', 'name');\n    inputLoginFormTwo.setAttribute('name', 'surname');\n    inputLoginFormOne.setAttribute('pattern', `^\\s*[A-ZА-Я][a-zа-я]+('[a-zа-я]+|-[A-ZА-Я][a-zа-я]+)?\\s*$`);\n    inputLoginFormTwo.setAttribute('pattern', `^\\s*[A-ZА-Я][a-zа-я]+('[a-zа-я]+|-[A-ZА-Я][a-zа-я]+)?\\s*$`);\n}\nfunction creatButtonLoginForm(modalLoginForm) {\n    const buttonLoginForm = document.createElement('button');\n    buttonLoginForm.className = 'modal-login-form__button';\n    buttonLoginForm.textContent = 'Login';\n    if (modalLoginForm === null)\n        throw Error('Element is Error');\n    modalLoginForm.append(buttonLoginForm);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2NvbXBvbmVudHMvbG9naW4tZm9ybS50cz8wMzE0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgbW9kYWxMb2dpbkZvcm06IEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIG1vZGFsTG9naW5Gb3JtLmNsYXNzTmFtZSA9ICdtb2RhbC1sb2dpbi1mb3JtJztcclxuICBtb2RhbExvZ2luRm9ybS5zZXRBdHRyaWJ1dGUoJ29uc3VibWl0JywgJ3JldHVybiBmYWxzZScpO1xyXG5cclxuICBjb25zdCBib2R5Q29udGFpbmVyOiBFbGVtZW50IHwgbnVsbCA9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1jb250YWluZXInKTtcclxuICBpZiAoYm9keUNvbnRhaW5lciA9PT0gbnVsbCkgdGhyb3cgRXJyb3IoJ0VsZW1lbnQgaXMgRXJyb3InKTtcclxuICBib2R5Q29udGFpbmVyLnByZXBlbmQobW9kYWxMb2dpbkZvcm0pO1xyXG5cclxuICBjcmVhdElucHV0TG9naW5Gb3JtKG1vZGFsTG9naW5Gb3JtKTtcclxuICBjcmVhdEJ1dHRvbkxvZ2luRm9ybShtb2RhbExvZ2luRm9ybSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0SW5wdXRMb2dpbkZvcm0obW9kYWxMb2dpbkZvcm06IEVsZW1lbnQpIHtcclxuICBjb25zdCBpbnB1dExvZ2luRm9ybU9uZTogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGlucHV0TG9naW5Gb3JtVHdvOiBFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gIGlucHV0TG9naW5Gb3JtT25lLmNsYXNzTmFtZSA9ICdtb2RhbC1sb2dpbi1mb3JtX19pbnB1dCc7XHJcbiAgaW5wdXRMb2dpbkZvcm1Ud28uY2xhc3NOYW1lID0gJ21vZGFsLWxvZ2luLWZvcm1fX2lucHV0JztcclxuXHJcbiAgaWYgKG1vZGFsTG9naW5Gb3JtID09PSBudWxsKSB0aHJvdyBFcnJvcignRWxlbWVudCBpcyBFcnJvcicpO1xyXG4gIG1vZGFsTG9naW5Gb3JtLnByZXBlbmQoaW5wdXRMb2dpbkZvcm1PbmUpO1xyXG4gIG1vZGFsTG9naW5Gb3JtLnByZXBlbmQoaW5wdXRMb2dpbkZvcm1Ud28pO1xyXG5cclxuICBzZXRBdHRyaWJ1dGVJbnB1dChpbnB1dExvZ2luRm9ybU9uZSwgaW5wdXRMb2dpbkZvcm1Ud28pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVJbnB1dChcclxuICBpbnB1dExvZ2luRm9ybU9uZTogRWxlbWVudCxcclxuICBpbnB1dExvZ2luRm9ybVR3bzogRWxlbWVudCxcclxuKSB7XHJcbiAgaW5wdXRMb2dpbkZvcm1PbmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBpbnB1dExvZ2luRm9ybVR3by5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG5cclxuICBpbnB1dExvZ2luRm9ybU9uZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0ZpcnN0IE5hbWUnKTtcclxuICBpbnB1dExvZ2luRm9ybVR3by5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1N1cm5hbWUnKTtcclxuXHJcbiAgaW5wdXRMb2dpbkZvcm1PbmUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuICBpbnB1dExvZ2luRm9ybVR3by5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cclxuICBpbnB1dExvZ2luRm9ybU9uZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xyXG4gIGlucHV0TG9naW5Gb3JtVHdvLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdXJuYW1lJyk7XHJcblxyXG4gIGlucHV0TG9naW5Gb3JtT25lLnNldEF0dHJpYnV0ZShcclxuICAgICdwYXR0ZXJuJyxcclxuICAgIGBeXFxzKltBLVrQkC3Qr11bYS160LAt0Y9dKygnW2EtetCwLdGPXSt8LVtBLVrQkC3Qr11bYS160LAt0Y9dKyk/XFxzKiRgLFxyXG4gICk7XHJcbiAgaW5wdXRMb2dpbkZvcm1Ud28uc2V0QXR0cmlidXRlKFxyXG4gICAgJ3BhdHRlcm4nLFxyXG4gICAgYF5cXHMqW0EtWtCQLdCvXVthLXrQsC3Rj10rKCdbYS160LAt0Y9dK3wtW0EtWtCQLdCvXVthLXrQsC3Rj10rKT9cXHMqJGAsXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRCdXR0b25Mb2dpbkZvcm0obW9kYWxMb2dpbkZvcm06IEVsZW1lbnQpIHtcclxuICBjb25zdCBidXR0b25Mb2dpbkZvcm06IEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uTG9naW5Gb3JtLmNsYXNzTmFtZSA9ICdtb2RhbC1sb2dpbi1mb3JtX19idXR0b24nO1xyXG4gIGJ1dHRvbkxvZ2luRm9ybS50ZXh0Q29udGVudCA9ICdMb2dpbic7XHJcblxyXG4gIGlmIChtb2RhbExvZ2luRm9ybSA9PT0gbnVsbCkgdGhyb3cgRXJyb3IoJ0VsZW1lbnQgaXMgRXJyb3InKTtcclxuICBtb2RhbExvZ2luRm9ybS5hcHBlbmQoYnV0dG9uTG9naW5Gb3JtKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/login-form.ts\n");

/***/ }),

/***/ "./src/event.ts":
/*!**********************!*\
  !*** ./src/event.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeLoginForm: () => (/* binding */ closeLoginForm)\n/* harmony export */ });\nfunction closeLoginForm() {\n    const buttonLoginForm = document.querySelector('.modal-login-form__button');\n    const modalLoginForm = document.querySelector('.modal-login-form');\n    if (buttonLoginForm === null || modalLoginForm === null)\n        throw Error('Element is Error');\n    modalLoginForm.addEventListener('submit', () => {\n        modalLoginForm.classList.add('close');\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnQudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVMsY0FBYztJQUM1QixNQUFNLGVBQWUsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FDNUQsMkJBQTJCLENBQzVCLENBQUM7SUFDRixNQUFNLGNBQWMsR0FDbEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRTlDLElBQUksZUFBZSxLQUFLLElBQUksSUFBSSxjQUFjLEtBQUssSUFBSTtRQUNyRCxNQUFNLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRWxDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQzdDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvZXZlbnQudHM/MmFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2xvc2VMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgYnV0dG9uTG9naW5Gb3JtOiBFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAnLm1vZGFsLWxvZ2luLWZvcm1fX2J1dHRvbicsXHJcbiAgKTtcclxuICBjb25zdCBtb2RhbExvZ2luRm9ybTogRWxlbWVudCB8IG51bGwgPVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWxvZ2luLWZvcm0nKTtcclxuXHJcbiAgaWYgKGJ1dHRvbkxvZ2luRm9ybSA9PT0gbnVsbCB8fCBtb2RhbExvZ2luRm9ybSA9PT0gbnVsbClcclxuICAgIHRocm93IEVycm9yKCdFbGVtZW50IGlzIEVycm9yJyk7XHJcblxyXG4gIG1vZGFsTG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgIG1vZGFsTG9naW5Gb3JtLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/event.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_body_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/body-container */ \"./src/components/body-container.ts\");\n/* harmony import */ var _components_login_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login-form */ \"./src/components/login-form.ts\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ \"./src/event.ts\");\n\n\n\n// eslint-disable-next-line no-unused-vars\n(0,_components_body_container__WEBPACK_IMPORTED_MODULE_0__.createBodyElement)();\n(0,_components_login_form__WEBPACK_IMPORTED_MODULE_1__.createLoginForm)();\n// event\n(0,_event__WEBPACK_IMPORTED_MODULE_2__.closeLoginForm)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFnRTtBQUNOO0FBRWpCO0FBQ3pDLDBDQUEwQztBQUMxQyw2RUFBaUIsRUFBRSxDQUFDO0FBQ3BCLHVFQUFlLEVBQUUsQ0FBQztBQUVsQixRQUFRO0FBQ1Isc0RBQWMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUJvZHlFbGVtZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JvZHktY29udGFpbmVyJztcclxuaW1wb3J0IHsgY3JlYXRlTG9naW5Gb3JtIH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luLWZvcm0nO1xyXG5cclxuaW1wb3J0IHsgY2xvc2VMb2dpbkZvcm0gfSBmcm9tICcuL2V2ZW50JztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmNyZWF0ZUJvZHlFbGVtZW50KCk7XHJcbmNyZWF0ZUxvZ2luRm9ybSgpO1xyXG5cclxuLy8gZXZlbnRcclxuY2xvc2VMb2dpbkZvcm0oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;