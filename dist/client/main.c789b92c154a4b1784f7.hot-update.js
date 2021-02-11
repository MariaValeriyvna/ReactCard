webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction CardsList() {\r\n    // const { posts, loading, errorLoading } = useContext(postsContext);\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var _a = react_1.useState([]), posts = _a[0], setData = _a[1];\r\n    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];\r\n    var _c = react_1.useState(\"\"), errorLoading = _c[0], setErrorLoading = _c[1];\r\n    var _d = react_1.useState(\"\"), nextAfter = _d[0], setNextAfter = _d[1];\r\n    var _e = react_1.useState(0), countLoad = _e[0], setCountLoad = _e[1];\r\n    var bottomOfList = react_1.useRef(null);\r\n    function handleClick() {\r\n        setCountLoad(0);\r\n    }\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        setLoading(true);\r\n        setErrorLoading(\"\");\r\n        function loadBestPost() {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var error_1;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0:\r\n                            _a.trys.push([0, 2, , 3]);\r\n                            return [4 /*yield*/, axios_1.default\r\n                                    .get(\"https://oauth.reddit.com/best.json\", {\r\n                                    headers: { Authorization: \"bearer \" + token },\r\n                                    params: {\r\n                                        limit: 10,\r\n                                        after: nextAfter,\r\n                                    },\r\n                                })\r\n                                    .then(function (resp) {\r\n                                    var postsData = resp.data.data.children;\r\n                                    setNextAfter(resp.data.data.after);\r\n                                    setData(function (prevPostData) { return prevPostData.concat.apply(prevPostData, postsData); });\r\n                                })];\r\n                        case 1:\r\n                            _a.sent();\r\n                            return [3 /*break*/, 3];\r\n                        case 2:\r\n                            error_1 = _a.sent();\r\n                            setErrorLoading(String(error_1));\r\n                            return [3 /*break*/, 3];\r\n                        case 3:\r\n                            setLoading(false);\r\n                            return [2 /*return*/];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting) {\r\n                console.log(\"load\", countLoad);\r\n                if (countLoad < 3) {\r\n                    loadBestPost();\r\n                    setCountLoad(countLoad + 1);\r\n                }\r\n            }\r\n        }, { rootMargin: \"600px\" });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current)\r\n                observer.unobserve(bottomOfList.current);\r\n        };\r\n    }, [bottomOfList.current, nextAfter, token]);\r\n    // Ecли использовать react-window\r\n    // const Row = ({ index, style }: IPropsRow) => {\r\n    //   if (posts[index]) {\r\n    //     let urlpreview = \"\";\r\n    //     if (posts[index].data.thumbnail === undefined) urlpreview = \"\";\r\n    //     else urlpreview = posts[index].data.thumbnail || \"\";\r\n    //     const result = Math.ceil(\r\n    //       Math.ceil(\r\n    //         Math.abs(new Date().getTime() - posts[index].data.created_utc * 1000)\r\n    //       ) /\r\n    //         (1000 * 60 * 60)\r\n    //     );\r\n    //     const author = posts[index].data.author;\r\n    //     return (\r\n    //       <div key={index} style={style}>\r\n    //         <Card\r\n    //           id={posts[index].data.id}\r\n    //           title={posts[index].data.title}\r\n    //           author={author}\r\n    //           created_utc={result}\r\n    //           urlpreview={urlpreview}\r\n    //           score={posts[index].data.score}\r\n    //           num_comments={posts[index].data.num_comments}\r\n    //         />\r\n    //       </div>\r\n    //     );\r\n    //   } else return <div></div>;\r\n    // };\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n            token && posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", { style: { textAlign: \"center\" } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n            loading && (react_1.default.createElement(\"div\", { style: { textAlign: \"center\" } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \\u043F\\u043E\\u0441\\u0442\\u043E\\u0432...\")),\r\n            errorLoading && (react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: \"center\" } },\r\n                \"\\u041D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E \\u0432\\u043E\\u0439\\u0442\\u0438 \\u0432 \\u043B\\u0438\\u0447\\u043D\\u044B\\u0439 \\u043A\\u0430\\u0431\\u0438\\u043D\\u0435\\u0442 reddit.com \",\r\n                react_1.default.createElement(\"br\", null),\r\n                \" \\u0438\\u043B\\u0438\",\r\n                \" \",\r\n                errorLoading)),\r\n            posts.map(function (post, index) {\r\n                var urlpreview;\r\n                if (post.data.thumbnail === undefined)\r\n                    urlpreview = \"\";\r\n                else\r\n                    urlpreview = post.data.thumbnail;\r\n                var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - post.data.created_utc * 1000)) /\r\n                    (1000 * 60 * 60));\r\n                var author = post.data.author;\r\n                return (react_1.default.createElement(\"li\", { className: cardslist_css_1.default.cardLi, key: index },\r\n                    react_1.default.createElement(Card_1.Card, { id: post.data.id, title: post.data.title, author: author, created_utc: result, urlpreview: urlpreview, score: post.data.score, num_comments: post.data.num_comments })));\r\n            }),\r\n            react_1.default.createElement(\"button\", { styleonClick: handleClick }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435\"),\r\n            react_1.default.createElement(\"div\", { ref: bottomOfList }))));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ })

})