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

/***/ "./src/handlers/default.ts":
/*!*********************************!*\
  !*** ./src/handlers/default.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst client_apigatewaymanagementapi_1 = __webpack_require__(/*! @aws-sdk/client-apigatewaymanagementapi */ \"@aws-sdk/client-apigatewaymanagementapi\");\nconst handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {\n    console.info(`Event Body => ${event.body}`);\n    const connectionId = JSON.parse(event.body).connectionId;\n    const { requestContext: { domainName, stage }, } = event;\n    console.info('====================================');\n    console.info(`Connection ID: ${connectionId}`);\n    console.info('====================================');\n    const client = new client_apigatewaymanagementapi_1.ApiGatewayManagementApiClient({\n        region: 'us-east-1',\n        endpoint: process.env.IS_OFFLINE\n            ? 'http://localhost:3001'\n            : `https://${domainName}/${stage}`,\n    });\n    try {\n        console.info('====================================');\n        console.info(`Client Config: ${JSON.stringify(`https://${domainName}/${stage}`)}`);\n        console.info('====================================');\n        const encoder = new TextEncoder();\n        const postCmd = new client_apigatewaymanagementapi_1.PostToConnectionCommand({\n            ConnectionId: connectionId,\n            Data: encoder.encode('STATE'),\n        });\n        const result = yield client.send(postCmd);\n        console.info('====================================');\n        console.info('Message : ', JSON.stringify(result, undefined, 2));\n        console.info('====================================');\n    }\n    catch (err) {\n        console.info(err);\n        return { statusCode: 500 };\n    }\n    finally {\n        client.destroy();\n    }\n    return { statusCode: 200 };\n});\nexports.handler = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZGVmYXVsdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQVNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTlDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnJ0Yy1iYWNrZW5kLy4vc3JjL2hhbmRsZXJzL2RlZmF1bHQudHM/OTUwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYW5kbGVyLCBDb250ZXh0LCBBUElHYXRld2F5UHJveHlXZWJzb2NrZXRFdmVudFYyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQge1xuICBBcGlHYXRld2F5TWFuYWdlbWVudEFwaUNsaWVudCxcbiAgUG9zdFRvQ29ubmVjdGlvbkNvbW1hbmQsXG59IGZyb20gJ0Bhd3Mtc2RrL2NsaWVudC1hcGlnYXRld2F5bWFuYWdlbWVudGFwaSc7XG5cbmludGVyZmFjZSBTdGF0dXNDb2RlUmVzcG9uc2Uge1xuICBzdGF0dXNDb2RlOiAyMDAgfCA1MDA7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBIYW5kbGVyID0gYXN5bmMgKFxuICBldmVudDogQVBJR2F0ZXdheVByb3h5V2Vic29ja2V0RXZlbnRWMixcbiAgY29udGV4dDogQ29udGV4dCxcbik6IFByb21pc2U8U3RhdHVzQ29kZVJlc3BvbnNlPiA9PiB7XG4gIGNvbnNvbGUuaW5mbyhgRXZlbnQgQm9keSA9PiAke2V2ZW50LmJvZHl9YCk7XG4gIGNvbnN0IGNvbm5lY3Rpb25JZCA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSkuY29ubmVjdGlvbklkO1xuICBjb25zdCB7XG4gICAgcmVxdWVzdENvbnRleHQ6IHsgZG9tYWluTmFtZSwgc3RhZ2UgfSxcbiAgfSA9IGV2ZW50O1xuXG4gIGNvbnNvbGUuaW5mbygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gIGNvbnNvbGUuaW5mbyhgQ29ubmVjdGlvbiBJRDogJHtjb25uZWN0aW9uSWR9YCk7XG4gIGNvbnNvbGUuaW5mbygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG5cbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwaUdhdGV3YXlNYW5hZ2VtZW50QXBpQ2xpZW50KHtcbiAgICByZWdpb246ICd1cy1lYXN0LTEnLFxuICAgIGVuZHBvaW50OiBwcm9jZXNzLmVudi5JU19PRkZMSU5FXG4gICAgICA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnXG4gICAgICA6IGBodHRwczovLyR7ZG9tYWluTmFtZX0vJHtzdGFnZX1gLFxuICB9KTtcblxuICB0cnkge1xuICAgIGNvbnNvbGUuaW5mbygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgY29uc29sZS5pbmZvKFxuICAgICAgYENsaWVudCBDb25maWc6ICR7SlNPTi5zdHJpbmdpZnkoYGh0dHBzOi8vJHtkb21haW5OYW1lfS8ke3N0YWdlfWApfWAsXG4gICAgKTtcbiAgICBjb25zb2xlLmluZm8oJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuXG4gICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgIGNvbnN0IHBvc3RDbWQgPSBuZXcgUG9zdFRvQ29ubmVjdGlvbkNvbW1hbmQoe1xuICAgICAgQ29ubmVjdGlvbklkOiBjb25uZWN0aW9uSWQsXG4gICAgICBEYXRhOiBlbmNvZGVyLmVuY29kZSgnU1RBVEUnKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5zZW5kKHBvc3RDbWQpO1xuICAgIGNvbnNvbGUuaW5mbygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgY29uc29sZS5pbmZvKCdNZXNzYWdlIDogJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCB1bmRlZmluZWQsIDIpKTtcbiAgICBjb25zb2xlLmluZm8oJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICBjb25zb2xlLmluZm8oZXJyKTtcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlOiA1MDAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGllbnQuZGVzdHJveSgpO1xuICB9XG5cbiAgcmV0dXJuIHsgc3RhdHVzQ29kZTogMjAwIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/default.ts\n");

/***/ }),

/***/ "@aws-sdk/client-apigatewaymanagementapi":
/*!**********************************************************!*\
  !*** external "@aws-sdk/client-apigatewaymanagementapi" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-apigatewaymanagementapi");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/default.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;