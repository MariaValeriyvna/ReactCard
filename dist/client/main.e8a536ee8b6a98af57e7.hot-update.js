webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/CardMenu/CardMenu.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/CardMenu.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardMenu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardmenu_css_1 = __importDefault(__webpack_require__(/*! ./cardmenu.css */ \"./src/shared/CardsList/Card/CardMenu/cardmenu.css\"));\r\nvar DropDown_1 = __webpack_require__(/*! ../../../DropDown/DropDown */ \"./src/shared/DropDown/DropDown.tsx\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../GenericList/GenericList */ \"./src/shared/GenericList/GenericList.tsx\");\r\nvar merge_1 = __webpack_require__(/*! ../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar comments_svg_1 = __importDefault(__webpack_require__(/*! ../../../../img/comments.svg */ \"./src/img/comments.svg\"));\r\nvar share_svg_1 = __importDefault(__webpack_require__(/*! ../../../../img/share.svg */ \"./src/img/share.svg\"));\r\nvar none_svg_1 = __importDefault(__webpack_require__(/*! ../../../../img/none.svg */ \"./src/img/none.svg\"));\r\nvar save_svg_1 = __importDefault(__webpack_require__(/*! ../../../../img/save.svg */ \"./src/img/save.svg\"));\r\nvar complain_svg_1 = __importDefault(__webpack_require__(/*! ../../../../img/complain.svg */ \"./src/img/complain.svg\"));\r\nvar LIST = [\r\n    { As: 'li', text: 'Комментарии', img: comments_svg_1.default },\r\n    { As: 'li', text: 'Поделиться', img: share_svg_1.default },\r\n    { As: 'li', text: 'Скрыть', img: none_svg_1.default },\r\n    { As: 'li', text: 'Сохранить', img: save_svg_1.default },\r\n    { As: 'li', text: 'Пожаловаться', img: complain_svg_1.default },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction CardMenu() {\r\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\r\n    var handleItemClick = function () {\r\n        setList(list);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: cardmenu_css_1.default.cardmenu },\r\n        react_1.default.createElement(DropDown_1.DropDown, { button: react_1.default.createElement(\"button\", { className: cardmenu_css_1.default.cardmenuButton },\r\n                react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#F3F3F3\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#F3F3F3\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#F3F3F3\" }))) },\r\n            react_1.default.createElement(\"ul\", null,\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleItemClick })) })),\r\n            react_1.default.createElement(\"button\", { className: cardmenu_css_1.default.btnClose }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))));\r\n}\r\nexports.CardMenu = CardMenu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/CardMenu.tsx?");

/***/ }),

/***/ "./src/shared/DropDown/DropDown.tsx":
/*!******************************************!*\
  !*** ./src/shared/DropDown/DropDown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DropDown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/DropDown/dropdown.css\"));\r\nvar NOOP = function () { };\r\nfunction DropDown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\r\n    var _d = react_1.default.useState(isOpen), isDropDownOpen = _d[0], setIsDropDownOpen = _d[1];\r\n    use(function () { return setIsDropDownOpen(isOpen); }, [isOpen]);\r\n    react_1.default.useEffect(function () { return isDropDownOpen ? onOpen() : onClose(); }, [isDropDownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropDownOpen(!isDropDownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropDownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropDownOpen(false); } }, children)))));\r\n}\r\nexports.DropDown = DropDown;\r\n\n\n//# sourceURL=webpack:///./src/shared/DropDown/DropDown.tsx?");

/***/ })

})