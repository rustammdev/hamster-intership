import { Router } from "express";

// controller
import MainController from "../controller/main.controller.js";

const route = new Router();

route.get("/", MainController.home);
route.post("/", MainController.createUser);

export default route;
