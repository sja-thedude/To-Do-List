/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #f6f6f6;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.todo-list-con {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  list-style: none;\\r\\n  width: 40%;\\r\\n  min-width: 280px;\\r\\n  height: auto;\\r\\n  padding: 20px 0 0 0;\\r\\n  background: rgba(225, 253, 255, 0.25);\\r\\n  box-shadow: 0 8px 32px 0 rgba(31, 88, 135, 0.37);\\r\\n  backdrop-filter: blur(4px);\\r\\n  -webkit-backdrop-filter: blur(4px);\\r\\n  border: 1px solid rgba(255, 255, 255, 0.18);\\r\\n}\\r\\n\\r\\n.todo-item {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #5c5c5c;\\r\\n  padding: 10px 20px;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.add-item {\\r\\n  width: 100%;\\r\\n  height: 30px;\\r\\n  border: none;\\r\\n  background: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.add-item::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.enter-button {\\r\\n  transform: rotate(90deg);\\r\\n  border: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  margin: 0;\\r\\n  padding: 15px 20px 0 20px;\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  background: none;\\r\\n  resize: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.task-button,\\r\\n.clear,\\r\\n.enter-button {\\r\\n  padding: 5px;\\r\\n  font-size: 15px;\\r\\n  border: none;\\r\\n  color: #8b6868;\\r\\n  background: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.clear-completed {\\r\\n  margin: 0;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  color: #414141;\\r\\n  border: none;\\r\\n  background: #f6f6f6;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.clear:hover i,\\r\\n.enter-button:hover .level.down,\\r\\n.clear-completed:hover {\\r\\n  font-weight: bold;\\r\\n  color: #2f00ff;\\r\\n}\\r\\n\\r\\n.task-button:hover .trash.alternate {\\r\\n  color: rgb(238, 255, 0);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addremove.js":
/*!**************************!*\
  !*** ./src/addremove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDo\": () => (/* binding */ addToDo),\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize),\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"clearAllComp\": () => (/* binding */ clearAllComp),\n/* harmony export */   \"itemDelete\": () => (/* binding */ itemDelete),\n/* harmony export */   \"listUpdate\": () => (/* binding */ listUpdate)\n/* harmony export */ });\nconst addToDo = (input, dataList) => {\r\n    const dataObj = {\r\n      index: dataList.length + 1,\r\n      description: '',\r\n      completed: false,\r\n    };\r\n  \r\n    dataObj.description = input;\r\n    dataList.push(dataObj);\r\n  };\r\n  \r\n  const capitalize = (value) => value.toLowerCase().charAt(0).toUpperCase() + value.slice(1);\r\n  \r\n  // clear previous active items\r\n  const clearPreviousActiveItem = (todoItemArray) => {\r\n    todoItemArray.forEach((item) => {\r\n      if (item.lastElementChild.classList.contains('task-button')) {\r\n        item.style.background = 'rgba(225, 253, 255, 0.25)';\r\n        item.lastElementChild.innerHTML = '<i class=\\'ellipsis vertical icon\\'></i>';\r\n      }\r\n    });\r\n  };\r\n  \r\n  // Clear all items in the list\r\n  const clearAll = (clear, dataList, saveToLocalStorage, refreshPage) => {\r\n    clear.addEventListener('click', () => {\r\n        dataList.splice(0);\r\n      saveToLocalStorage(dataList);\r\n      refreshPage();\r\n    });\r\n  };\r\n  \r\n  // Clear all completed items on the list\r\n  const clearAllComp = (completed, dataList, indexes, save, refresh) => {\r\n    completed.addEventListener('click', () => {\r\n        dataList = dataList.filter((todo) => todo.completed !== true);\r\n      indexes(dataList);\r\n      save(dataList);\r\n      refresh();\r\n    });\r\n  };\r\n  \r\n  // get active item index onclick\r\n  const getActiveItemIndex = (dataList, value) => {\r\n    let index = 0;\r\n  \r\n    dataList.forEach((data) => {\r\n      if (data.description === value.toLowerCase()) {\r\n        index = data.index - 1;\r\n      }\r\n    });\r\n  \r\n    return index;\r\n  };\r\n  \r\n  // Change task-button and background for active item\r\n  const changeTaskButton = (listItem, activeDeleteButton) => {\r\n    listItem.style.background = '#ffff0080';\r\n    activeDeleteButton.innerHTML = '<i class=\\'trash alternate icon\\'></i>';\r\n  };\r\n  \r\n  // Handle delete for active item description\r\n  const itemDelete = (dataList, index, saveToLocalStorage, refreshPage) => {\r\n    const deleteButtonArray = document.querySelectorAll('.task-button');\r\n  \r\n    deleteButtonArray.forEach((button) => {\r\n      button.addEventListener('click', (e) => {\r\n        let i;\r\n  \r\n        if (e.target.classList.contains('trash', 'icon')) {\r\n          i = getActiveItemIndex(dataList, e.target.parentNode.parentNode.childNodes[1].value);\r\n        } else {\r\n          i = getActiveItemIndex(dataList, e.target.parentNode.childNodes[1].value);\r\n        }\r\n  \r\n        dataList.splice(i, 1);\r\n        index(dataList);\r\n        saveToLocalStorage(dataList);\r\n        refreshPage();\r\n      });\r\n    });\r\n  };\r\n  \r\n  const listUpdate = (dataList, saveToLocalStorage, refreshPage) => {\r\n    const todoContainer = document.querySelector('.todo-list-con');\r\n    const todoItemArray = Array.from(document.querySelectorAll('.todo-item'));\r\n  \r\n    todoContainer.addEventListener('click', (e) => {\r\n      clearPreviousActiveItem(todoItemArray);\r\n  \r\n      if (e.target.classList.contains('description')) {\r\n        const activeDescription = e.target;\r\n        const activeIndex = getActiveItemIndex(dataList, activeDescription.value);\r\n  \r\n        // Change to delete button\r\n        changeTaskButton(activeDescription.parentNode, activeDescription.parentNode.lastElementChild);\r\n  \r\n        // Handle change for active item description\r\n        activeDescription.addEventListener('change', () => {\r\n            dataList[activeIndex].description = capitalize(activeDescription.value);\r\n          saveToLocalStorage(dataList);\r\n          refreshPage();\r\n        });\r\n      }\r\n    });\r\n  };\n\n//# sourceURL=webpack://webpack/./src/addremove.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n/* harmony import */ var _addremove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addremove */ \"./src/addremove.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\nlet dataList = [];\r\n\r\nconst index = (dataList) => {\r\n  for (let i = 0; i < dataList.length; i++) { /* eslint-disable-line no-plusplus */\r\n    dataList[i].index = i + i;\r\n  }\r\n\r\n  return dataList;\r\n};\r\n\r\nconst saveToLocalStorage = (dataList) => {\r\n  localStorage.setItem('todo_list', JSON.stringify(dataList));\r\n};\r\n\r\nconst refreshPage = () => {\r\n  window.location.reload();\r\n};\r\n\r\nconst component = () => {\r\n  const todoContainer = document.querySelector('.todo-list-con');\r\n  let element = document.createElement('li');\r\n  element.className = 'todo-item';\r\n\r\n  const heading = document.createElement('h2');\r\n  heading.className = 'heading';\r\n  heading.textContent = 'Today\\'s To Do';\r\n  element.appendChild(heading);\r\n\r\n  const clear = document.createElement('button');\r\n  clear.className = 'clear';\r\n  clear.innerHTML = '<i class=\\'sync alternate icon\\'></i>';\r\n  element.appendChild(clear);\r\n  todoContainer.appendChild(element);\r\n\r\n  (0,_addremove__WEBPACK_IMPORTED_MODULE_1__.clearAll)(clear, dataList, saveToLocalStorage, refreshPage);\r\n\r\n  element = document.createElement('li');\r\n  element.className = 'todo-item';\r\n\r\n  const addItem = document.createElement('input');\r\n  addItem.className = 'add-item';\r\n  addItem.placeholder = 'Add to your list';\r\n  addItem.value = '';\r\n  element.appendChild(addItem);\r\n\r\n  const btn = document.createElement('button');\r\n  btn.className = 'enter-button';\r\n  btn.innerHTML = '<i class=\\'level down alternate icon\\'></i>';\r\n  element.appendChild(btn);\r\n  todoContainer.appendChild(element);\r\n\r\n  addItem.addEventListener('keydown', (e) => {\r\n    if (e.key === 'Enter') {\r\n      (0,_addremove__WEBPACK_IMPORTED_MODULE_1__.addToDo)(addItem.value, dataList);\r\n      saveToLocalStorage(dataList);\r\n      refreshPage();\r\n    }\r\n  });\r\n\r\n  btn.addEventListener('click', () => {\r\n    (0,_addremove__WEBPACK_IMPORTED_MODULE_1__.addToDo)(addItem.value, dataList);\r\n    saveToLocalStorage(dataList);\r\n    refreshPage();\r\n  });\r\n\r\n  if (dataList.length !== 0) {\r\n    dataList.forEach((todo) => {\r\n      element = document.createElement('li');\r\n      element.className = 'todo-item';\r\n\r\n      const checkbox = document.createElement('input');\r\n      checkbox.type = 'checkbox';\r\n      checkbox.className = 'checkbox';\r\n      checkbox.checked = todo.completed;\r\n      element.appendChild(checkbox);\r\n\r\n      const description = document.createElement('textarea');\r\n      description.className = 'description';\r\n      description.rows = 'auto';\r\n      description.value = (0,_addremove__WEBPACK_IMPORTED_MODULE_1__.capitalize)(todo.description);\r\n      element.appendChild(description);\r\n\r\n      const taskButton = document.createElement('button');\r\n      taskButton.className = 'task-button';\r\n      taskButton.innerHTML = '<i class=\\'ellipsis vertical icon\\'></i>';\r\n      element.appendChild(taskButton);\r\n\r\n      (0,_script__WEBPACK_IMPORTED_MODULE_0__.checkBox)(checkbox, todo, dataList, saveToLocalStorage, refreshPage);\r\n      (0,_script__WEBPACK_IMPORTED_MODULE_0__.isComp)(todo.completed, description);\r\n\r\n      todoContainer.appendChild(element);\r\n    });\r\n  }\r\n\r\n  (0,_addremove__WEBPACK_IMPORTED_MODULE_1__.listUpdate)(dataList, saveToLocalStorage, refreshPage);\r\n\r\n  (0,_addremove__WEBPACK_IMPORTED_MODULE_1__.itemDelete)(dataList, index, saveToLocalStorage, refreshPage);\r\n\r\n  element = document.createElement('li');\r\n\r\n  const clearCompleted = document.createElement('button');\r\n  clearCompleted.className = 'clear-completed';\r\n  clearCompleted.innerHTML = 'Clear all completed';\r\n  element.appendChild(clearCompleted);\r\n  todoContainer.appendChild(element);\r\n\r\n  (0,_addremove__WEBPACK_IMPORTED_MODULE_1__.clearAllComp)(clearCompleted, dataList, index, saveToLocalStorage, refreshPage)\r\n};\r\n\r\nconst pageLoad = () => {\r\n  window.onload = () => {\r\n    if (localStorage.getItem('todo_list') !== null) {\r\n      dataList = JSON.parse(localStorage.getItem('todo_list'));\r\n      component();\r\n    } else {\r\n      component();\r\n    }\r\n  };\r\n};\r\n\r\npageLoad();\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isComp\": () => (/* binding */ isComp),\n/* harmony export */   \"checkBox\": () => (/* binding */ checkBox)\n/* harmony export */ });\nconst isComp = (complete, description) => {\r\n  if (complete) {\r\n    description.style.textDecoration = 'line-through';\r\n    description.style.color = '#414141';\r\n  } else {\r\n    description.style.textDecoration = 'none';\r\n    description.style.color = '#000';\r\n  }\r\n};\r\n\r\nconst checkBox = (checkbox, todo, dataList, saveToLocalStorage, refreshPage) => {\r\n  checkbox.addEventListener('change', () => {\r\n    if (checkbox.checked) {\r\n      todo.completed = true;\r\n      saveToLocalStorage(dataList);\r\n      refreshPage();\r\n    } else {\r\n      todo.completed = false;\r\n      saveToLocalStorage(dataList);\r\n      refreshPage();\r\n    }\r\n  });\r\n};\n\n//# sourceURL=webpack://webpack/./src/script.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;