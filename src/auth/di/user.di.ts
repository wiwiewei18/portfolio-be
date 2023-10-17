import { UsersModel } from "../models/users.model"

interface Entity {
    users: UsersModel
}

class DependencyInjection {
    usersRepository: UsersModel
}

export class Model {
    model(): Entity {
        return {
            users: DependencyInjection.usersRepository
        }
    }
}