import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const jwtRequired = passport.authenticate("jwt", { session: false });

const router = express.Router();

router.get(
  "/login",
  passport.authenticate("auth0", {
    scope: "openid email profile",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/callback", (req, res, next) => {
  passport.authenticate("auth0", (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }
    console.log("CALLBACK SUCCESSFUL!");
    const userReturnObject = {
      nickname: user.nickname,
    };
    req.session.jwt = jwt.sign(userReturnObject, process.env.JWT_SECRET_KEY);
    return res.redirect("/");
  })(req, res, next);
});
export default router;
