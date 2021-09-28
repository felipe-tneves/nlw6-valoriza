import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";



interface IAutheticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserServece {
    async execute({email, password}: IAutheticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        // verifica se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        // verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        //Gera o token
        const token = sign({
            email: user.email
        }, "d8f22d9ee73e0cbb689ee71b096c19f2", {
            subject : user.id,
            expiresIn: "1d"
        });


        return token;
    }
}

export { AuthenticateUserServece }