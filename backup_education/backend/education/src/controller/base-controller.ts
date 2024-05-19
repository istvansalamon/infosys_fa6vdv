import { Console } from "console";
import { Repository } from "typeorm";

export abstract class baseController{
    repository: Repository<any>;
    
    getAll = async (req: any, res:any) => {
        try{
            const entities = await this.repository.find();
        }catch(err){
        this.handleError(res, err);
        }
    }

    getOne = async (req: any, res:any) => {

        try{
        const id = req.params.id;
        const entity = await this.repository.findOneBy({id:id});
        if(!entity){
            return this.handleError(req, null, 404,'Not Found');
        }

        res.json(entity);    
    }catch(err){
        this.handleError(res, err);
    }
    }


    create = async (req :any, res :any) => {
        try{
            const entity =  this.repository.create(req.body as object);
            entity.id = null;

            const result = await this.repository.save(entity);
            res.json(result);

        }catch(err){
            this.handleError(res, err);
        }
    }

    update = async (req: any, res:  any) => {
        try{
            const entity = this.repository.create(req.body as object);
            const entityToUpdate = await this.repository.findOneBy({id: entity.id})
            if(!entityToUpdate){
                return this.handleError(res, null,404,'Not Found');
            }

            const result = await this.repository.save(entity);
            res.json(result);

        }catch(err){
            this.handleError(res, err);
        }
    }

    delete = async (req: any, res: any) => {
    try {
        const entityToDelete = await this.repository.findOneBy({id: req.params.id});

        if(!entityToDelete){
            return this.handleError(res, null,404,'Not Found');
        }
        
        await this.repository.remove(entityToDelete);
        res.status(200).send();

    } catch(err){
        this.handleError(res, err);
    }
    
    }



    handleError = (res, err=null, status=500, message='unexpexted server erreor')=> {
        if(err){
            console.error(err);

        }
        res.status(status);
        res.json({error: message});
    }
}