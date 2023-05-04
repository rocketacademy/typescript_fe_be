"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const controller_1 = require("./controllers/controller");
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
// app.use(morgan("dev"));
// const myController = new Controller();
// app.use("/api/my-endpoint", myController.router);
// app.listen(3000, () => console.log("Application listening to port 3000"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
    }
    routes() {
        const myController = new controller_1.Controller();
        this.app.use("/api/my-endpoint", myController.router);
    }
    start() {
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }
}
const server = new Server();
server.start();
