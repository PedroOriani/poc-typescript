import userControllers from "controllers/user.controllers";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/user", userControllers.create);
userRoutes.get("/user", userControllers.read);
userRoutes.put("/user/:id", userControllers.update);
userRoutes.delete("/user/:id", userControllers.deleteUser);

export default userRoutes