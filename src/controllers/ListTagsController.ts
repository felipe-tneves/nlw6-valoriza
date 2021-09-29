import { Request, response, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";



class ListTagsController {
    async handle(request: Request, reponse: Response) {
        const listTagsService = new ListTagsService();

        const tags = await listTagsService.execute();

        return response.json(tags);
    }
}


export { ListTagsController };