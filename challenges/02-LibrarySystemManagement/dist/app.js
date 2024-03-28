"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoConfig_1 = __importDefault(require("./config/db/mongoConfig"));
const app = (0, express_1.default)();
mongoConfig_1.default.on('error', () => console.log.bind(console, 'Connection Error!'));
mongoConfig_1.default.once('open', () => {
    console.log('Database connection success!');
});
exports.default = app;
