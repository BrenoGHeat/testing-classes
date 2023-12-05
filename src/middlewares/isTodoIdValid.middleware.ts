import { NextFunction, Request, Response } from "express";
import { todoDatabase } from "../database/database";

export class IsTodoIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const paramsId = req.params.id;

        if(!todoDatabase.some(todo => todo.id === Number(paramsId))){
            return res.status(404).json({ message: "Todo not found."});
        }

        next();
    }
}