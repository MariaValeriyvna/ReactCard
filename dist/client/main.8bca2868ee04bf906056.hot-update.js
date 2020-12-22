webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_2 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar commentContext_1 = __webpack_require__(/*! ../Context/commentContext */ \"./src/shared/Context/commentContext.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nvar list = [\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Tagicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Copyicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Imgicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.SaveCommenticon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Personicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Personicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Renewicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Linkicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Microphoneicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Commentsicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Penicon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Lettericon, null) },\r\n    { As: 'li', img: react_1.default.createElement(Icons_1.Pdficon, null) },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction CommentForm(_a) {\r\n    var placeHolder = _a.placeHolder, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, id = _a.id, onOpen = _a.onOpen, onClose = _a.onClose;\r\n    var _c = react_2.useContext(commentContext_1.commentContext), value = _c.value, onChange = _c.onChange;\r\n    var _d = useState(openReply), openReplyUse = _d[0], setOpenReply = _d[1];\r\n    function handleChange(event) {\r\n        onChange(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    function handleClick() {\r\n        console.log('cl');\r\n    }\r\n    react_1.useEffect(function () { console.log('commentform useeffect'); }, [isOpen]);\r\n    if (!isOpen)\r\n        return null;\r\n    return (isOpen && (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.inputText, value: value, onChange: handleChange, placeholder: placeHolder }),\r\n        react_1.default.createElement(\"div\", { className: commentform_css_1.default.commentEdit },\r\n            react_1.default.createElement(\"ul\", { className: commentform_css_1.default.ulEdit },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleClick })) })),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.btnSubmit }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")))));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ })

})