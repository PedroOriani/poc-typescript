import { User } from "@/protocols/protocols";
import userRepositories from "@/repositories/user.repositories";

async function create (user: User) {
    return await userRepositories.create(user)
}

async function read () {
    return await userRepositories.read();
}

async function update (userId: number, userUpdate: User) {
    return await userRepositories.update(userId, userUpdate);
}

async function deleteUser (userId: number) {
    return await userRepositories.deleteUser(userId);
}

const userServices = {
    create,
    read,
    update,
    deleteUser
}

export default userServices;
