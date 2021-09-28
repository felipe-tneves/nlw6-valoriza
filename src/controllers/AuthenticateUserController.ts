import { Request, Response } from "express";
import { AuthenticateUserServece } from "../services/AuthenticateUserService";



class AuthenticateUserController {

    async handle(request: Request, response: Response){
        const { email, password} = request.body

        const authenticateUserServece = new AuthenticateUserServece();

        const token = await authenticateUserServece.execute({
            email,
            password
        });
        return response.json(token)
    }
}

export { AuthenticateUserController };