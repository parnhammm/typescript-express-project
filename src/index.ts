import express, { Request, Response } from "express";
import { router } from "./Routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./Controllers/LoginController";
import { router as controllerRouter } from "./Controllers/Decorators/controller";

const app = express();

app.use(cookieSession({ keys: ["someRandomKey"] }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
