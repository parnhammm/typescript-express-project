import { Request, Response, NextFunction } from "express";
import { get, post } from "./Decorators/routes";
import { controller } from "./Decorators/controller";
import { use } from "./Decorators/use";
import { bodyValidator } from "./Decorators/bodyValidator";

//Test middleware
function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request made");

  next();
}

@controller("/auth")
class LoginController {
  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === "temp@temp.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Incorrect login details");
    }
  }
}
