import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories"



class ListUserReceiveComplimentsService {

    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentsRepositories.find({
            where:{
                user_receiver: user_id
            }
        })

        return compliments;
    }
}


export { ListUserReceiveComplimentsService }