import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAutheticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //receber o token
    const authToken = request.headers.authorization;

    //validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        //validação se o token está correto
        const { sub } = verify(token, "d8f22d9ee73e0cbb689ee71b096c19f2") as IPayload;

        //recuperar informações do usuário
        request.user_id = sub;
        
        return next();
    } catch (error) {
        return response.status(401).end();
    }
}