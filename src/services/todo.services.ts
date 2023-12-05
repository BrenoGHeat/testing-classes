import { generateId, todoDatabase } from "../database/database";
import { ITodo, TCreateTodoBody, TUpdateTodoBody } from "../interfaces/todo.interfaces";

export class TodoServices{
    getMany(){
        return todoDatabase;
    }

    create(body: TCreateTodoBody): ITodo{
        const newTodo = { id: generateId(), ...body };

        todoDatabase.push(newTodo);

        return newTodo;
    }

    update(body: TUpdateTodoBody, updatingId: number): ITodo{
        const todo = todoDatabase.find(todo => todo.id === updatingId) as ITodo;

        const index = todoDatabase.findIndex(todo => todo.id === updatingId);

        const updateTodo = { ...todo, ...body };

        todoDatabase.splice(index, 1, updateTodo);

        return updateTodo;
    }

    delete(removingId: number): void{
        const index = todoDatabase.findIndex(todo => todo.id === removingId);

        todoDatabase.splice(index, 1);
    }
}