import { resetDatabase, todoDatabase } from "../../database/prisma";
import { todoMock, todoUpdateBodyMock } from "../__mocks__/todo.mocks";
import { request } from "../utils/request";

describe("Integration test: update todo", () => {
   beforeEach(() => {
      resetDatabase();
   });

   test("should be able to update todo successfully", async () => {
      todoDatabase.push(todoMock);

      const data = await request
         .patch(`/todos/${todoMock.id}`)
         .send(todoUpdateBodyMock)
         .expect(200)
         .then((response) => response.body);

      expect(data.id).toBe(todoMock.id);
      expect(data.title).toBe(todoMock.title);
      expect(data.content).toBe(todoUpdateBodyMock.content);
   });

   test("should throw error when todo is invalid", async () => {
      const data = await request
         .patch("/todos/1")
         .expect(404)
         .then((response) => response.body);

      expect(data.message).toBe("Todo not found.");   
   });
});
