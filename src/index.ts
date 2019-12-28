import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./Controllers/LoginController";
import "./Controllers/RootController";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(cookieSession({ keys: ["someRandomKey"] }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
