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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n.mainviewSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n\\n.playerboard,\\n.gameboard {\\n  max-width: 550px;\\n  max-height: 550px;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  gap: 5px;\\n}\\n\\n.boardItem {\\n  height: 50px;\\n  width: 50px;\\n  background-color: blue;\\n}\\n\\n.boardItem:hover,\\n.containsShip {\\n  background-color: cyan;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Player.js */ \"./src/modules/Player.js\");\n/* harmony import */ var _modules_DOMBoards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOMBoards.js */ \"./src/modules/DOMBoards.js\");\n/* harmony import */ var _modules_gameInitialization_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/gameInitialization.js */ \"./src/modules/gameInitialization.js\");\n/* harmony import */ var _modules_DOMMethods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DOMMethods.js */ \"./src/modules/DOMMethods.js\");\n\n\n\n\n\n\n(0,_modules_gameInitialization_js__WEBPACK_IMPORTED_MODULE_3__.renderInitialViewContent)();\nlet btn = document.getElementById(\"submit\");\nlet player = null;\nbtn.addEventListener(\"click\", () => {\n  setTimeout(() => {\n    let mainViewSection = document.querySelector(\".mainviewSection\");\n    (0,_modules_DOMMethods_js__WEBPACK_IMPORTED_MODULE_4__.clearDOMElement)(mainViewSection);\n    player = (0,_modules_Player_js__WEBPACK_IMPORTED_MODULE_1__.Player)(_modules_gameInitialization_js__WEBPACK_IMPORTED_MODULE_3__.playerName);\n    (0,_modules_DOMBoards_js__WEBPACK_IMPORTED_MODULE_2__.renderGame)(player.playerBoard, player.compBoard, player);\n  }, 0);\n});\n\n\n//# sourceURL=webpack://top-battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOMBoards.js":
/*!**********************************!*\
  !*** ./src/modules/DOMBoards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderGame\": () => (/* binding */ renderGame)\n/* harmony export */ });\n/* harmony import */ var _DOMMethods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMMethods.js */ \"./src/modules/DOMMethods.js\");\n\n\nfunction renderGame(playerBoard, compBoard, player) {\n  let gameboard = playerBoard;\n\n  function renderSingleBoardView(gameboard) {\n    let mainViewSection = document.querySelector(\".mainviewSection\");\n    let gameboardArr = gameboard.gameboardArr;\n    let shipLength = 5;\n    (0,_DOMMethods_js__WEBPACK_IMPORTED_MODULE_0__.updateGamePrompt)(`Please place your ${(0,_DOMMethods_js__WEBPACK_IMPORTED_MODULE_0__.getShipType)(shipLength)}`);\n    let playerBoardContainer = document.createElement(\"div\");\n    playerBoardContainer.classList.add(\"playerboard-container\");\n    mainViewSection.appendChild(playerBoardContainer);\n    let playerBoard = document.createElement(\"div\");\n    playerBoard.classList.add(\"playerboard\");\n    playerBoardContainer.appendChild(playerBoard);\n\n    gameboardArr.forEach((gameboardRow) => {\n      let xCoord = gameboardArr.indexOf(gameboardRow);\n      gameboardRow.forEach((rowItem) => {\n        let yCoord = gameboardRow.indexOf(rowItem);\n        const boardItem = document.createElement(\"div\");\n        boardItem.classList.add(\"boardItem\");\n        playerBoard.appendChild(boardItem);\n\n        boardItem.addEventListener(\"click\", () => {\n          if (checkAdjacentBoardPieces(shipLength, boardItem)) return;\n          if (shipLength < 1) return;\n          if (gameboard.placeShip(xCoord, yCoord, shipLength) === false) return;\n\n          gameboard.placeShip(xCoord, yCoord, shipLength);\n          let currentBoardItem = boardItem;\n          if (!boardItem.previousElementSibling == null) {\n            currentBoardItem = boardItem;\n          }\n          for (let i = 0; i < shipLength; i++) {\n            currentBoardItem.classList.add(\"containsShip\");\n            currentBoardItem = currentBoardItem.nextElementSibling;\n          }\n\n          shipLength--;\n\n          if (shipLength > 1) {\n            (0,_DOMMethods_js__WEBPACK_IMPORTED_MODULE_0__.updateGamePrompt)(`Please place your ${(0,_DOMMethods_js__WEBPACK_IMPORTED_MODULE_0__.getShipType)(shipLength)}`);\n          } else if (shipLength <= 1) {\n            (0,_DOMMethods_js__WEBPACK_IMPORTED_MODULE_0__.updateGamePrompt)(\"\");\n            renderDualBoardView(gameboard, compBoard, mainViewSection);\n          }\n\n          function checkAdjacentBoardPieces(shipLength, currentBoardItem) {\n            let breakFunction = false;\n            if (breakFunction === true) return;\n            let boardItem = currentBoardItem;\n            for (let i = 0; i < shipLength; i++) {\n              if (breakFunction) return;\n              if (boardItem.classList.contains(\"containsShip\")) {\n                return (breakFunction = true);\n              } else {\n                boardItem = boardItem.nextElementSibling;\n              }\n            }\n            return breakFunction;\n          }\n        });\n      });\n    });\n  }\n\n  function renderDualBoardView(playerBoard, compBoard, containerElement) {\n    (0,_DOMMethods_js__WEBPACK_IMPORTED_MODULE_0__.clearDOMElement)(containerElement);\n    let mainViewSection = document.querySelector(\".mainviewSection\");\n\n    function renderBoard(board, containerElement, displayShips) {\n      let boardContainer = document.createElement(\"div\");\n      boardContainer.classList.add(\"boardContainer\");\n      containerElement.appendChild(boardContainer);\n\n      let gameboardArr = board.gameboardArr;\n\n      let DOMBoard = document.createElement(\"div\");\n      boardContainer.appendChild(DOMBoard);\n      DOMBoard.classList.add(\"gameboard\");\n      gameboardArr.forEach((gameboardRow) => {\n        gameboardRow.forEach((rowItem) => {\n          const boardItem = document.createElement(\"div\");\n          boardItem.classList.add(\"boardItem\");\n          DOMBoard.appendChild(boardItem);\n          if (displayShips) {\n            if (rowItem.containsShip) {\n              boardItem.classList.add(\"containsShip\");\n            }\n          }\n          if (!displayShips) {\n            boardItem.addEventListener(\"click\", () => {\n              let xCoord = gameboardArr.indexOf(gameboardRow);\n              let yCoord = gameboardRow.indexOf(rowItem);\n              if (gameboardArr[xCoord][yCoord].isHit) return;\n\n              let cachedCompHitCoords = player.attackComputerBoard(\n                xCoord,\n                yCoord\n              );\n              [xHitByCompCoord, yHitByCompCoord] = cachedCompHitCoords;\n              updateGameboardItem(xHitByCompCoord, yHitByCompCoord);\n              boardItem.style.backgroundColor = \"red\";\n              if (rowItem.containsShip)\n                boardItem.style.backgroundColor = \"orange\";\n            });\n          }\n        });\n      });\n    }\n    let [xHitByCompCoord, yHitByCompCoord] = [];\n\n    function updateGameboardItem(xCoord, yCoord) {\n      let DOMPlayerboardContainer = document.querySelector(\".gameboard\");\n      let DOMBoardItemArr =\n        DOMPlayerboardContainer.querySelectorAll(\".boardItem\");\n      let boardItemIndex = xCoord * 10 + yCoord;\n      let boardItem = DOMBoardItemArr[boardItemIndex];\n      boardItem.style.backgroundColor = \"pink\";\n      if (\n        playerBoard.gameboardArr[xHitByCompCoord][yHitByCompCoord].containsShip\n      ) {\n        boardItem.style.backgroundColor = \"green\";\n      }\n    }\n    renderBoard(playerBoard, mainViewSection, true);\n    renderBoard(compBoard, mainViewSection, false);\n  }\n  renderSingleBoardView(gameboard);\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/modules/DOMBoards.js?");

/***/ }),

/***/ "./src/modules/DOMMethods.js":
/*!***********************************!*\
  !*** ./src/modules/DOMMethods.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearDOMElement\": () => (/* binding */ clearDOMElement),\n/* harmony export */   \"getShipType\": () => (/* binding */ getShipType),\n/* harmony export */   \"updateGamePrompt\": () => (/* binding */ updateGamePrompt)\n/* harmony export */ });\nfunction updateGamePrompt(message) {\n  let prompt = document.querySelector(\".gameprompt\");\n  prompt.textContent = message;\n}\n\nfunction getShipType(shipLength) {\n  let shipType;\n  switch (shipLength) {\n    case 5:\n      shipType = \"Carrier\";\n      break;\n    case 4:\n      shipType = \"Battleship\";\n      break;\n    case 3:\n      shipType = \"Cruiser\";\n      break;\n    case 2:\n      shipType = \"Submarine\";\n      break;\n    case 1:\n      shipType = \"Destroyer\";\n      break;\n  }\n  return shipType;\n}\n\nfunction clearDOMElement(targetElement) {\n  targetElement.textContent = \"\";\n}\n\n\n\n//# sourceURL=webpack://top-battleship/./src/modules/DOMMethods.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ShipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipFactory */ \"./src/modules/ShipFactory.js\");\n\n\nfunction Gameboard() {\n  let gameboardArr = [\n    [[], [], [], [], [], [], [], [], [], []],\n    [[], [], [], [], [], [], [], [], [], []],\n    [[], [], [], [], [], [], [], [], [], []],\n    [[], [], [], [], [], [], [], [], [], []],\n    [[], [], [], [], [], [], [], [], [], []],\n    [[], [], [], [], [], [], [], [], [], []],\n    [[], [], [], [], [], [], [], [], [], []],\n    [[], [], [], [], [], [], [], [], [], []],\n    [[], [], [], [], [], [], [], [], [], []],\n    [[], [], [], [], [], [], [], [], [], []],\n  ];\n  gameboardArr.forEach((gameBoardRow) => {\n    gameBoardRow.forEach((gameBoardItem) => {\n      gameBoardItem.containsShip = false;\n      gameBoardItem.isHit = false;\n    });\n  });\n\n  function placeShip(xCoord, yCoord, shipLength) {\n    let shipLastCoord = yCoord + shipLength;\n    if (\n      xCoord >= 10 ||\n      xCoord < 0 ||\n      yCoord < 0 ||\n      shipLength < 0 ||\n      gameboardArr[xCoord][yCoord].containsShip ||\n      shipLastCoord > 10\n    ) {\n      return false;\n    } else {\n      if (yCoord + shipLength > 10) {\n        return false;\n      } else {\n        let ship = (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)(shipLength);\n        gameboardArr[xCoord].splice(yCoord, shipLength, ...ship);\n        return true;\n      }\n    }\n  }\n\n  function getFullShipOfType(shipType) {\n    let boardRowIndex;\n    let shipPieceIndexes = \"\";\n    gameboardArr.forEach((boardRow) => {\n      boardRow.forEach((shipPiece) => {\n        if (shipPiece.shipType === shipType) {\n          boardRowIndex = gameboardArr.indexOf(boardRow);\n          shipPieceIndexes += boardRow.indexOf(shipPiece);\n        }\n      });\n    });\n\n    let shipInfo = [boardRowIndex, shipPieceIndexes];\n    return shipInfo;\n  }\n\n  function updateShipSinkStatus(shipInfo) {\n    let shipHitCounter = 0;\n    for (let i = 0; i < shipInfo[1].length; i++) {\n      if (gameboardArr[shipInfo[0]][shipInfo[1][i]].isHit === true) {\n        shipHitCounter++;\n      }\n    }\n    if (shipHitCounter === shipInfo[1].length) {\n      for (let i = 0; i < shipInfo[1].length; i++) {\n        gameboardArr[shipInfo[0]][shipInfo[1][i]].sinkStatus = true;\n      }\n    }\n  }\n\n  function receiveAttack(xCoord, yCoord) {\n    if (gameboardArr[xCoord][yCoord].containsShip === true) {\n      gameboardArr[xCoord][yCoord].hitShip();\n      let currentShipType = gameboardArr[xCoord][yCoord].shipType;\n\n      updateShipSinkStatus(getFullShipOfType(currentShipType));\n    } else {\n      gameboardArr[xCoord][yCoord].isHit = true;\n    }\n  }\n\n  function reportShipsDestroyedStatus() {\n    let shipPieces = 0;\n    let shipPieceHitCounter = 0;\n    gameboardArr.forEach((boardRow) => {\n      boardRow.forEach((boardPiece) => {\n        if (boardPiece.containsShip === true) {\n          shipPieces++;\n          if (boardPiece.isHit === true) {\n            shipPieceHitCounter++;\n          }\n        }\n      });\n    });\n\n    if (shipPieces === shipPieceHitCounter && shipPieces > 0) return true;\n    return false;\n  }\n\n  return { gameboardArr, placeShip, receiveAttack, reportShipsDestroyedStatus };\n}\n\n\n\n//# sourceURL=webpack://top-battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/modules/Gameboard.js\");\n/* harmony import */ var _DOMMethods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMMethods.js */ \"./src/modules/DOMMethods.js\");\n\n\n\nfunction Player(name) {\n  let playerBoard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n  let compBoard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n  placeComputerShips();\n  let playerTurn = true;\n  let gameOver = false;\n  let winner = \"\";\n\n  function checkIfGameEnded() {\n    if (gameOver) return;\n    if (compBoard.reportShipsDestroyedStatus()) {\n      winner = name;\n      gameOver = true;\n      (0,_DOMMethods_js__WEBPACK_IMPORTED_MODULE_1__.updateGamePrompt)(`${winner} sunk all of the computer's ships and won`);\n      return;\n    }\n    if (playerBoard.reportShipsDestroyedStatus()) {\n      winner = \"The computer\";\n      gameOver = true;\n      (0,_DOMMethods_js__WEBPACK_IMPORTED_MODULE_1__.updateGamePrompt)(`${winner} sunk all your ships and won`);\n      return;\n    }\n  }\n\n  function attackComputerBoard(xCoord, yCoord) {\n    if (gameOver) return;\n    compBoard.receiveAttack(xCoord, yCoord);\n    switchTurn();\n    let cachedCoords = playComputerTurn(playerBoard);\n\n    checkIfGameEnded();\n    return cachedCoords;\n  }\n\n  function switchTurn() {\n    if (playerTurn) {\n      playerTurn = false;\n    } else if (!playerTurn) {\n      playerTurn = true;\n    }\n  }\n\n  function placeComputerShips() {\n    setTimeout(generateComputerShip(5), 100);\n    setTimeout(generateComputerShip(4), 200);\n    setTimeout(generateComputerShip(3), 300);\n    setTimeout(generateComputerShip(2), 400);\n  }\n\n  function generateTwoRandomCoords(isForAttack) {\n    let x = Math.floor(Number(Math.random() * 10));\n    let y = Math.floor(Number(Math.random() * 10));\n    if (isForAttack) {\n      return [x, y];\n    } else {\n      if (x + y > 9) {\n        return generateTwoRandomCoords();\n      } else {\n        return [x, y];\n      }\n    }\n  }\n\n  function generateComputerShip(shipLength) {\n    let [x, y] = generateTwoRandomCoords();\n    while (y + shipLength > 9) {\n      y = Number((Math.random() * 10).toFixed(0));\n    }\n    while (compBoard.gameboardArr[x][shipLength].containsShip) {\n      x = Number((Math.random() * 10).toFixed(0));\n      y = Number((Math.random() * 10).toFixed(0));\n    }\n    compBoard.placeShip(x, y, shipLength);\n  }\n\n  function playComputerTurn(playerBoard) {\n    if (gameOver) return;\n    checkIfGameEnded();\n    let [x, y] = generateTwoRandomCoords(true);\n    while (playerBoard.gameboardArr[x][y].isHit) {\n      [x, y] = generateTwoRandomCoords(true);\n    }\n    playerBoard.receiveAttack(x, y);\n    switchTurn();\n    return [x, y];\n  }\n  return { attackComputerBoard, gameOver, playerBoard, compBoard };\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/ShipFactory.js":
/*!************************************!*\
  !*** ./src/modules/ShipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShipFactory\": () => (/* binding */ ShipFactory)\n/* harmony export */ });\nfunction ShipFactory(shipLength) {\n  let ship = [];\n  for (let i = 0; i < shipLength; i++) {\n    ship.push([]);\n  }\n\n  ship.forEach((shipPiece) => {\n    shipPiece.containsShip = true;\n    shipPiece.isHit = false;\n    shipPiece.shipType = `${shipLength}`;\n    shipPiece.sinkStatus = false;\n\n    shipPiece.hitShip = function () {\n      if (this.containsShip === false || this.sinkStatus === true) return;\n      this.isHit = true;\n    };\n  });\n  return ship;\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/modules/ShipFactory.js?");

/***/ }),

/***/ "./src/modules/gameInitialization.js":
/*!*******************************************!*\
  !*** ./src/modules/gameInitialization.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerName\": () => (/* binding */ playerName),\n/* harmony export */   \"renderInitialViewContent\": () => (/* binding */ renderInitialViewContent)\n/* harmony export */ });\n/* harmony import */ var _DOMMethods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMMethods.js */ \"./src/modules/DOMMethods.js\");\n\nlet playerName = \"\";\n\nfunction renderInitialViewContent() {\n  let mainViewSection = document.querySelector(\".mainviewSection\");\n  (0,_DOMMethods_js__WEBPACK_IMPORTED_MODULE_0__.clearDOMElement)(mainViewSection);\n  let form = document.createElement(\"form\");\n  mainViewSection.appendChild(form);\n  let formInput = document.createElement(\"input\");\n  form.appendChild(formInput);\n  let formSubmit = document.createElement(\"input\");\n  formSubmit.setAttribute(\"id\", \"submit\");\n  formSubmit.setAttribute(\"type\", \"submit\");\n  form.appendChild(formSubmit);\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    let cachedPlayerName = formInput.value;\n    playerName = cachedPlayerName;\n  });\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/modules/gameInitialization.js?");

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