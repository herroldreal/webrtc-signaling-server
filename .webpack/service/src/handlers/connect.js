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

/***/ "./src/handlers/connect.ts":
/*!*********************************!*\
  !*** ./src/handlers/connect.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst client_lambda_1 = __webpack_require__(/*! @aws-sdk/client-lambda */ \"@aws-sdk/client-lambda\");\nconst handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {\n    const lambda = new client_lambda_1.Lambda({\n        region: 'us-east-1',\n    });\n    const encoder = new TextEncoder();\n    const lambdaParamsInvocation = {\n        FunctionName: 'websocket-test-dev-defaultHandler',\n        InvocationType: 'RequestResponse',\n        LogType: 'Tail',\n        Payload: encoder.encode(JSON.stringify({\n            connectionId: event.requestContext.connectionId,\n        })),\n    };\n    const invokeResult = yield lambda.invoke(lambdaParamsInvocation);\n    console.log('=============================');\n    console.log(`Invoke result => ${JSON.stringify(invokeResult.$metadata, undefined, 2)}`);\n    console.log('=============================');\n    return {\n        statusCode: 200,\n        body: 'STATE',\n    };\n});\nexports.handler = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvY29ubmVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFNQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicnRjLWJhY2tlbmQvLi9zcmMvaGFuZGxlcnMvY29ubmVjdC50cz9iODA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEhhbmRsZXIsXG4gIENvbnRleHQsXG4gIEFQSUdhdGV3YXlQcm94eVdlYnNvY2tldEV2ZW50VjIsXG4gIEFQSUdhdGV3YXlQcm94eVJlc3VsdCxcbn0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBJbnZvY2F0aW9uUmVxdWVzdCwgTGFtYmRhIH0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LWxhbWJkYSc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBIYW5kbGVyID0gYXN5bmMgKFxuICBldmVudDogQVBJR2F0ZXdheVByb3h5V2Vic29ja2V0RXZlbnRWMixcbiAgY29udGV4dDogQ29udGV4dCxcbik6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiA9PiB7XG4gIGNvbnN0IGxhbWJkYSA9IG5ldyBMYW1iZGEoe1xuICAgIHJlZ2lvbjogJ3VzLWVhc3QtMScsXG4gIH0pO1xuICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gIGNvbnN0IGxhbWJkYVBhcmFtc0ludm9jYXRpb246IEludm9jYXRpb25SZXF1ZXN0ID0ge1xuICAgIEZ1bmN0aW9uTmFtZTogJ3dlYnNvY2tldC10ZXN0LWRldi1kZWZhdWx0SGFuZGxlcicsXG4gICAgSW52b2NhdGlvblR5cGU6ICdSZXF1ZXN0UmVzcG9uc2UnLFxuICAgIExvZ1R5cGU6ICdUYWlsJyxcbiAgICBQYXlsb2FkOiBlbmNvZGVyLmVuY29kZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29ubmVjdGlvbklkOiBldmVudC5yZXF1ZXN0Q29udGV4dC5jb25uZWN0aW9uSWQsXG4gICAgICB9KSxcbiAgICApLFxuICB9O1xuXG4gIGNvbnN0IGludm9rZVJlc3VsdCA9IGF3YWl0IGxhbWJkYS5pbnZva2UobGFtYmRhUGFyYW1zSW52b2NhdGlvbik7XG4gIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICBjb25zb2xlLmxvZyhcbiAgICBgSW52b2tlIHJlc3VsdCA9PiAke0pTT04uc3RyaW5naWZ5KGludm9rZVJlc3VsdC4kbWV0YWRhdGEsIHVuZGVmaW5lZCwgMil9YCxcbiAgKTtcbiAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgYm9keTogJ1NUQVRFJyxcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/handlers/connect.ts\n");

/***/ }),

/***/ "@aws-sdk/client-lambda":
/*!*****************************************!*\
  !*** external "@aws-sdk/client-lambda" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-lambda");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/connect.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;