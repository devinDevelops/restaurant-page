"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentDiv": () => (/* binding */ contentDiv),
/* harmony export */   "default": () => (/* binding */ createEl)
/* harmony export */ });
// import './style.css';

const contentDiv = document.getElementById('content');
function createEl(type) {
  return document.createElement(type);
}

const header = createEl('header');
const h1 = createEl('h1');
const ul = createEl('ul');
const btn = createEl('button');

for (let i = 0; i < 3; i += 1) {
  const arr = ['HOME', 'MENU', 'ABOUT US'];
  const li = createEl('li');
  li.textContent = arr[i];
  ul.appendChild(li);
}

h1.textContent = `COFFEE O' CLOCK`;
btn.textContent = 'CONTACT US';

header.appendChild(h1);
header.appendChild(ul);
header.appendChild(btn);
contentDiv.appendChild(header);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU87QUFDUTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbCh0eXBlKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xufVxuXG5jb25zdCBoZWFkZXIgPSBjcmVhdGVFbCgnaGVhZGVyJyk7XG5jb25zdCBoMSA9IGNyZWF0ZUVsKCdoMScpO1xuY29uc3QgdWwgPSBjcmVhdGVFbCgndWwnKTtcbmNvbnN0IGJ0biA9IGNyZWF0ZUVsKCdidXR0b24nKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgY29uc3QgYXJyID0gWydIT01FJywgJ01FTlUnLCAnQUJPVVQgVVMnXTtcbiAgY29uc3QgbGkgPSBjcmVhdGVFbCgnbGknKTtcbiAgbGkudGV4dENvbnRlbnQgPSBhcnJbaV07XG4gIHVsLmFwcGVuZENoaWxkKGxpKTtcbn1cblxuaDEudGV4dENvbnRlbnQgPSBgQ09GRkVFIE8nIENMT0NLYDtcbmJ0bi50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcblxuaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbmhlYWRlci5hcHBlbmRDaGlsZCh1bCk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==