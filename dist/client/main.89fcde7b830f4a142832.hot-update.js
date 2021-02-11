webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/Context/userContext */ \"./src/shared/Context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/Context/postsContext */ \"./src/shared/Context/postsContext.tsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nfunction AppComponent() {\r\n    useToken_1.useToken();\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardsList_1.CardsList, null)))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar postsContext_1 = __webpack_require__(/*! ../Context/postsContext */ \"./src/shared/Context/postsContext.tsx\");\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction CardsList() {\r\n    var _a = react_1.useContext(postsContext_1.postsContext), posts = _a.posts, loading = _a.loading, errorLoading = _a.errorLoading;\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    // useEffect если использовать IntersectionObserver для подгрузки\r\n    // const [posts, setData] = useState<Array<IPostData>>([]);\r\n    // const [loading, setLoading] = useState(false);\r\n    // const [errorLoading, setErrorLoading] = useState(\"\");\r\n    // const [nextAfter, setNextAfter] = useState(\"\");\r\n    // const bottomOfList = useRef<HTMLDivElement>(null);\r\n    // useEffect(() => {\r\n    //   if (!token) return;\r\n    //   setLoading(true);\r\n    //   setErrorLoading(\"\");\r\n    //   async function loadBestPost() {\r\n    //     try {\r\n    //       await axios\r\n    //         .get(\"https://oauth.reddit.com/best.json\", {\r\n    //           headers: { Authorization: `bearer ${token}` },\r\n    //           params: {\r\n    //             limit: 10,\r\n    //             after: nextAfter,\r\n    //           },\r\n    //         })\r\n    //         .then((resp) => {\r\n    //           const postsData: Array<IPostData> = resp.data.data.children;\r\n    //           setNextAfter(resp.data.data.after);\r\n    //           setData((prevPostData) => prevPostData.concat(...postsData));\r\n    //         });\r\n    //     } catch (error) {\r\n    //       setErrorLoading(String(error));\r\n    //     }\r\n    //     setLoading(false);\r\n    //   }\r\n    //   const observer = new IntersectionObserver(\r\n    //     (entries) => {\r\n    //       if (entries[0].isIntersecting) {\r\n    //         console.log(\"load\");\r\n    //         loadBestPost();\r\n    //       }\r\n    //     },\r\n    //     { rootMargin: \"600px\" }\r\n    //   );\r\n    //   // if (bottomOfList.current) {\r\n    //   //   observer.observe(bottomOfList.current);\r\n    //   // }\r\n    //   // return () => {\r\n    //   //   if (bottomOfList.current) observer.unobserve(bottomOfList.current);\r\n    //   // };\r\n    // }, [bottomOfList.current, nextAfter, token]);\r\n    // Ecли использовать react-window\r\n    var Row = function (_a) {\r\n        var index = _a.index, style = _a.style;\r\n        if (posts[index]) {\r\n            var urlpreview = \"\";\r\n            if (posts[index].data.thumbnail === undefined)\r\n                urlpreview = \"\";\r\n            else\r\n                urlpreview = posts[index].data.thumbnail || \"\";\r\n            var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - posts[index].data.created_utc * 1000)) /\r\n                (1000 * 60 * 60));\r\n            var author = posts[index].data.author;\r\n            return (react_1.default.createElement(\"div\", { key: index, style: style },\r\n                react_1.default.createElement(Card_1.Card, { id: posts[index].data.id, title: posts[index].data.title, author: author, created_utc: result, urlpreview: urlpreview, score: posts[index].data.score, num_comments: posts[index].data.num_comments })));\r\n        }\r\n        else\r\n            return react_1.default.createElement(\"div\", null);\r\n    };\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n            token && posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", { style: { textAlign: \"center\" } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n            loading && (react_1.default.createElement(\"div\", { style: { textAlign: \"center\" } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \\u043F\\u043E\\u0441\\u0442\\u043E\\u0432...\")),\r\n            errorLoading && (react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: \"center\" } },\r\n                \"\\u041D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E \\u0432\\u043E\\u0439\\u0442\\u0438 \\u0432 \\u043B\\u0438\\u0447\\u043D\\u044B\\u0439 \\u043A\\u0430\\u0431\\u0438\\u043D\\u0435\\u0442 reddit.com \",\r\n                react_1.default.createElement(\"br\", null),\r\n                \" \\u0438\\u043B\\u0438\",\r\n                \" \",\r\n                errorLoading)),\r\n            posts.map(function (post, index) {\r\n                var urlpreview;\r\n                if (post.data.thumbnail === undefined)\r\n                    urlpreview = \"\";\r\n                else\r\n                    urlpreview = post.data.thumbnail;\r\n                var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - post.data.created_utc * 1000)) /\r\n                    (1000 * 60 * 60));\r\n                var author = post.data.author;\r\n                return (react_1.default.createElement(\"li\", { className: cardslist_css_1.default.cardLi, key: index },\r\n                    react_1.default.createElement(Card_1.Card, { id: post.data.id, title: post.data.title, author: author, created_utc: result, urlpreview: urlpreview, score: post.data.score, num_comments: post.data.num_comments })));\r\n            }),\r\n            react_1.default.createElement(\"div\", { ref: bottomOfList }))));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ })

})