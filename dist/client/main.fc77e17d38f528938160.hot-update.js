webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar TokenContext_1 = __webpack_require__(/*! ./shared/Context/TokenContext */ \"./src/shared/Context/TokenContext.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/Context/userContext */ \"./src/shared/Context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/Context/postsContext */ \"./src/shared/Context/postsContext.tsx\");\r\nvar commentContext_1 = __webpack_require__(/*! ./shared/Context/commentContext */ \"./src/shared/Context/commentContext.ts\");\r\nfunction AppComponent() {\r\n    var _a = react_1.useState(''), commentValue = _a[0], setCommentValue = _a[1];\r\n    var token = useToken_1.useToken()[0];\r\n    return (react_1.default.createElement(commentContext_1.commentContext.Provider, { value: { value: commentValue, onChange: setCommentValue } },\r\n        react_1.default.createElement(TokenContext_1.tokenContext.Provider, { value: token },\r\n            react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n                react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                    react_1.default.createElement(Layout_1.Layout, null,\r\n                        react_1.default.createElement(Header_1.Header, null),\r\n                        react_1.default.createElement(Content_1.Content, null,\r\n                            react_1.default.createElement(CardsList_1.CardsList, null))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar carmacounter_css_1 = __importDefault(__webpack_require__(/*! ./carmacounter.css */ \"./src/shared/CardsList/Card/CarmaCounter/carmacounter.css\"));\r\nvar BtnUp_1 = __webpack_require__(/*! ../../../BtnUp */ \"./src/shared/BtnUp/index.ts\");\r\nvar BtnDown_1 = __webpack_require__(/*! ../../../BtnDown */ \"./src/shared/BtnDown/index.ts\");\r\nfunction CarmaCounter(_a) {\r\n    var score = _a.score;\r\n    return (react_1.default.createElement(\"div\", { className: carmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(BtnUp_1.BtnUp, null),\r\n        react_1.default.createElement(\"span\", { className: carmacounter_css_1.default.karmaValue }, score),\r\n        react_1.default.createElement(BtnDown_1.BtnDown, null)));\r\n}\r\nexports.CarmaCounter = CarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentItem/CommentItem.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/CommentItem.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentItem = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar TimeComment_1 = __webpack_require__(/*! ../../CardsList/Card/TimeComment */ \"./src/shared/CardsList/Card/TimeComment/index.ts\");\r\nvar User_1 = __webpack_require__(/*! ../../CardsList/Card/User */ \"./src/shared/CardsList/Card/User/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Post_1 = __webpack_require__(/*! ../../Post */ \"./src/shared/Post/index.ts\");\r\nvar commentitem_css_1 = __importDefault(__webpack_require__(/*! ./commentitem.css */ \"./src/shared/CommentsList/CommentItem/commentitem.css\"));\r\nfunction CommentItem(_a) {\r\n    var created_utc = _a.created_utc, subreddit = _a.subreddit, author = _a.author, body = _a.body, id = _a.id;\r\n    var _b = react_1.useState(false), openReply = _b[0], setOpenReply = _b[1];\r\n    var _c = react_1.useState(false), isModalOpened = _c[0], SetIsModalOpened = _c[1];\r\n    var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - created_utc * 1000)) /\r\n        (1000 * 60 * 60));\r\n    var handleItemClick = function () {\r\n        console.log('klik ответить', id);\r\n        setOpenReply(true);\r\n    };\r\n    var LIST = [\r\n        {\r\n            As: 'li',\r\n            text: 'Ответить',\r\n            img: react_1.default.createElement(Icons_1.CommentIcon, null),\r\n            onClick: function () {\r\n                SetIsModalOpened(true);\r\n            }\r\n        },\r\n        { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },\r\n        { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n            react_1.default.createElement(\"div\", { className: commentitem_css_1.default.titlesub }, subreddit),\r\n            react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n                react_1.default.createElement(TimeComment_1.TimeComment, { created_utc: result }),\r\n                react_1.default.createElement(User_1.User, { author: author }))),\r\n        react_1.default.createElement(\"p\", { className: commentitem_css_1.default.textcomment }, body),\r\n        react_1.default.createElement(\"ul\", { className: commentitem_css_1.default.ulicons },\r\n            react_1.default.createElement(GenericList_1.GenericList, { underline: false, list: LIST.map(merge_1.merge({})) })),\r\n        isModalOpened && (react_1.default.createElement(Post_1.Post, { urlpreview: 'urlpreview', id: id, title: 'title', author: author, created_utc: created_utc, onClose: function () { return SetIsModalOpened(false); }, score: 1 }))));\r\n}\r\nexports.CommentItem = CommentItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/CommentItem.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentItem/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentItem */ \"./src/shared/CommentsList/CommentItem/CommentItem.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/index.ts?");

/***/ })

})