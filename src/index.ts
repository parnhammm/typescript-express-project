import express, { Request, Response } from "express";
import { router } from "./Routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(cookieSession({ keys: ["someRandomKey"] }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
