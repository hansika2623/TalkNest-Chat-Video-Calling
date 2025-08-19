import express from "express";
import { signup, login, logout, onboard } from "../controllers/auth.controller.js";
import {protectRoute}  from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

//we have used this logout as post because post is for operations that change the server state and logging out does that. It destroys the session invalids a token so it basically updates something on the server side and thus it is used as post method
router.post("/logout", logout);

router.post("/onboarding",protectRoute,onboard);//Since onboarding should be only visible to the authenticated user so it should be protected and we protect this by using protectRoute.

//checks if the user is logged-in or not.
router.get("/me", protectRoute, (req,res) =>{
    res.status(200).json({success: true, user: req.user});
})

export default router;
