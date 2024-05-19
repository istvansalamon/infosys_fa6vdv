import { Repository } from "typeorm";
import { baseController } from "./base-controller";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";




export class UserController extends baseController{
    repository = AppDataSource.getRepository(User);
}