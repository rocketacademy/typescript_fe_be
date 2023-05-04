"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const express_1 = __importDefault(require("express"));
class Controller {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", this.list);
        this.router.post("/", this.create);
    }
    list(req, res) {
        console.log("Request", req);
        console.log("Response", res);
        res.json({ message: "list" });
    }
    create(req, res) {
        res.json({ message: "create" });
    }
}
exports.Controller = Controller;
