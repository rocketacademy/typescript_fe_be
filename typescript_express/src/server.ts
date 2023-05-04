import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { Controller } from "./controllers/controller";

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
// app.use(morgan("dev"));

// const myController = new Controller();
// app.use("/api/my-endpoint", myController.router);

// app.listen(3000, () => console.log("Application listening to port 3000"));

class Server {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  private routes(): void {
    const myController = new Controller();
    this.app.use("/api/my-endpoint", myController.router);
  }

  public start(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}

const server = new Server();
server.start();
