import userControllers from "@/controllers/user.controllers";
import { Router } from "express";
import { validateSchema } from "@/middlewares/validate.schema";
import userSchema from "@/schemas/user.schema";

const userRoutes = Router();

userRoutes.post("/user", validateSchema(userSchema), userControllers.create);
userRoutes.get("/user", userControllers.read);
userRoutes.put("/user/:id", validateSchema(userSchema), userControllers.update);
userRoutes.delete("/user/:id", userControllers.deleteUser);

export default userRoutes