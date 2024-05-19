import express from 'express';
import { UserController } from './education/src/controller/user-controller';
import { StudentController } from './education/src/controller/student-controller';

export function getRouter() {
    const router = express.Router();

    const userController = new UserController();

    router.get('/users',userController.getAll);
    router.get('/users/:id',userController.getOne);
    router.get('/users',userController.create);
    router.get('/users',userController.update);
    router.get('/users',userController.delete);


    const studentController = new StudentController();

    router.get('/students',studentController.getAll);
    router.get('/students/:id',studentController.getOne);
    router.get('/studentss',studentController.create);
    router.get('/students',studentController.update);
    router.get('/students',studentController.delete);

    return router;
}