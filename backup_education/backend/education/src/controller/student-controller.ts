import { baseController } from "./base-controller";
import { AppDataSource } from "../data-source";
import { Student } from "../entity/Student";




export class StudentController extends baseController{
    repository = AppDataSource.getRepository(Student);
}