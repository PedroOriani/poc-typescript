import Joi from "joi";
import { CreateUser } from "@/protocols/protocols";

const userSchema = Joi.object<CreateUser>({
    name: Joi.string().required(),
    age: Joi.number().required()
})

export default userSchema;