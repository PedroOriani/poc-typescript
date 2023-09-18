export type Error = {
    type: string;
    message: string;
}

export type User = {
    id: number;
    name: string;
    age: number;
}

export type CreateUser = Omit<User, "id">