import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories"



class ListUserSendComplimentsService {

    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentsRepositories.find({
            where:{
                user_sender: user_id
            }
        })

        return compliments;
    }
}


export { ListUserSendComplimentsService }