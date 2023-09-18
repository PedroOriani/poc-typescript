import { badRequest, incompleteDataError } from "@/errors/errors";
import { User } from "@/protocols/protocols";
import userServices from "@/services/user.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function create (req: Request, res: Response) {
    const body = req.body as User

    if (!body) throw incompleteDataError();

    const user = await userServices.create(body);

    if (!user) throw badRequest("Erro ao criar user")

    res.sendStatus(httpStatus.CREATED)
}

async function read (req: Request, res: Response) {

    const user = await userServices.read();

    res.send(user)
}

async function update (req: Request, res: Response) {
    const userId = parseInt(req.params.id);

    const userUpdate = req.body as User;

    const update = await userServices.update(userId, userUpdate);

    res.send(httpStatus.OK);
}

async function deleteUser (req: Request, res: Response) {
    const userId = parseInt(req.params.id);

    const result = await userServices.deleteUser(userId);

    if (result === 0) throw badRequest("Erro ao excluir item");

    res.send(httpStatus.OK)
}

const userControllers = {
    create,
    read,
    update,
    deleteUser
}

export default userControllers;