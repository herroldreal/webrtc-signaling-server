"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserID = exports.createRoomID = void 0;
const nanoid_1 = require("nanoid");
exports.createRoomID = (0, nanoid_1.customAlphabet)('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
const createUserID = () => (0, nanoid_1.nanoid)();
exports.createUserID = createUserID;
//# sourceMappingURL=ids.js.map