import { Request, Response, NextFunction, request } from "express"

export function ensureAdmin(resquest: Request, response: Response, next: NextFunction){

    const { user_id } = request;
    const admin = true;

    if(admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    });
}