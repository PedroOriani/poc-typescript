import { db } from "../database/databa.connection";
import { CreateUser, User } from "../protocols/protocols";

async function create (user: CreateUser) {
    const createdUser = await db.query<CreateUser>(`
        INSERT INTO
            users (name, age)
        VALUES
            ($1, $2)
    ;`, [user.name, user.age]);

    return createdUser.rows[0];
}

async function read () {
    const users =  await db.query<User[]>(`SELECT * FROM users`);
    return users.rows;
}

async function update (userId: number, userUpdate: User) {

    const result = await db.query<User[]>(`
        UPDATE
            users
        SET
            name=$1, age=$2
        WHERE
            id=$3
    ;`, [userUpdate.name, userUpdate.age, userId]);

    return result.rows[0];

}

async function deleteUser (userId: number) {
    const result = await db.query(`DELETE * FROM users WHERE id=$1;`, [userId]);

    return result.rowCount;
}

const userRepositories = {
    create,
    read,
    update,
    deleteUser
}

export default userRepositories;