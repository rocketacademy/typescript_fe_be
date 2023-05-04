import express, { Request, Response, Router } from "express";

export class Controller {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get("/", this.list);
    this.router.post("/", this.create);
  }

  private list(req: Request, res: Response): void {
    console.log("Request", req);
    console.log("Response", res);

    res.json({ message: "list" });
  }

  private create(req: Request, res: Response): void {
    res.json({ message: "create" });
  }
}
