"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.generateCookie = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateCookie = (token, res) => {
    return res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "strict",
    });
};
exports.generateCookie = generateCookie;
const generateToken = (userId, options) => {
    const secret = process.env.EXPRESS_JWT_SECRET;
    const token = jsonwebtoken_1.default.sign({ userId }, secret, options);
    return token;
};
exports.generateToken = generateToken;
