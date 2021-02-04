webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar formik_1 = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\r\nfunction CommentForm(_a) {\r\n    var placeHolder = _a.placeHolder, textbtn = _a.textbtn, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, id = _a.id, onClick = _a.onClick, value = _a.value;\r\n    var idForm = generateRandomIndex_1.generateRandomString() + id;\r\n    var formik = formik_1.useFormik({\r\n        initialValues: { comment: value, id: idForm },\r\n        onSubmit: function (values) {\r\n            console.log(\"submit\", values);\r\n        },\r\n        validate: function (values) {\r\n            var errors = { comment: \"Необходимо ввести более 2-х символов\" };\r\n            if (!values.comment)\r\n                return errors;\r\n        },\r\n    });\r\n    var list = [\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Tagicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Copyicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Imgicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.SaveCommenticon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Personicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Personicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Renewicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Linkicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Microphoneicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Commentsicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Penicon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Lettericon, null) },\r\n        { As: \"li\", img: react_1.default.createElement(Icons_1.Pdficon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    if (!isOpen)\r\n        return react_1.default.createElement(\"div\", null);\r\n    console.log(idForm);\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, id: formik, onSubmit: formik.handleSubmit },\r\n            react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.inputText, name: \"comment\", placeholder: placeHolder, value: formik.values.comment, onChange: formik.handleChange, onBlur: formik.handleBlur }),\r\n            formik.touched.comment && formik.errors.comment ? (react_1.default.createElement(\"div\", { className: commentform_css_1.default.error }, formik.errors.comment)) : null,\r\n            react_1.default.createElement(\"div\", { className: commentform_css_1.default.commentEdit },\r\n                react_1.default.createElement(\"ul\", { className: commentform_css_1.default.ulEdit },\r\n                    react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: onClick })) })),\r\n                react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.btnSubmit }, textbtn)))));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

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