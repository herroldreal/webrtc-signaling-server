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

/***/ "./src/handlers/disconnect.ts":
/*!************************************!*\
  !*** ./src/handlers/disconnect.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {\n    console.log(`Event => ${JSON.stringify(event, undefined, 2)}`);\n    console.log(`Context => ${JSON.stringify(context, undefined, 2)}`);\n    return {\n        statusCode: 200,\n        body: JSON.stringify('Disconnected'),\n    };\n});\nexports.handler = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZGlzY29ubmVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJydGMtYmFja2VuZC8uL3NyYy9oYW5kbGVycy9kaXNjb25uZWN0LnRzPzk3ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSGFuZGxlcixcbiAgQ29udGV4dCxcbiAgQVBJR2F0ZXdheVByb3h5V2Vic29ja2V0RXZlbnRWMixcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0LFxufSBmcm9tICdhd3MtbGFtYmRhJztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXI6IEhhbmRsZXIgPSBhc3luYyAoXG4gIGV2ZW50OiBBUElHYXRld2F5UHJveHlXZWJzb2NrZXRFdmVudFYyLFxuICBjb250ZXh0OiBDb250ZXh0LFxuKTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+ID0+IHtcbiAgY29uc29sZS5sb2coYEV2ZW50ID0+ICR7SlNPTi5zdHJpbmdpZnkoZXZlbnQsIHVuZGVmaW5lZCwgMil9YCk7XG4gIGNvbnNvbGUubG9nKGBDb250ZXh0ID0+ICR7SlNPTi5zdHJpbmdpZnkoY29udGV4dCwgdW5kZWZpbmVkLCAyKX1gKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSgnRGlzY29ubmVjdGVkJyksXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/disconnect.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/handlers/disconnect.ts"](0, __webpack_exports__);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;