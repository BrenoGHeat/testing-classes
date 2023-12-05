import { todoDatabase } from "../../database/database"
import { todoMock } from "../__mocks__/todo.mocks"
import { request } from "../utils/request"

describe("Integration test: delete todo", () => {
    test("should be able to delete a todo successfully", async () => {
        todoDatabase.push(todoMock);

        await request.delete(`/todos/${todoMock.id}`).expect(204);
    });

    test("should throw error when todo is invalid", async () => {
        const data = await request
           .delete("/todos/1")
           .expect(404)
           .then((response) => response.body);
  
        expect(data.message).toBe("Todo not found.");   
     });
})