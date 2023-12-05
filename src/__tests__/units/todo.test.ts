import { todoCreateBodyMock, todoMock, todoUpdateBodyMock } from "../__mocks__/todo.mocks";
import { resetDatabase, todoDatabase } from "../../database/prisma";
import { TodoServices } from "../../services/todo.services";

describe("Unit test: todo services", () => {
   // beforeEach, beforeAll, afterEach, afterAll

   beforeEach(() => {
        resetDatabase();
   });

   test("create todo should work correctly", () => {
      const todoServices = new TodoServices();

      const data = todoServices.create(todoCreateBodyMock);

      expect(data).toStrictEqual(todoMock);
   });

   test("get many todos should work correctly", () => {
      todoDatabase.push(todoMock);

      const todoServices = new TodoServices();

      const data = todoServices.getMany();

      expect(data).toHaveLength(1);

      expect(data[0]).toStrictEqual(todoMock);
   });

   test("update todo should work correctly", () => {
      todoDatabase.push(todoMock);

      const todoServices = new TodoServices();

      const data = todoServices.update(todoUpdateBodyMock, todoMock.id);

      expect(data.id).toBe(todoMock.id);
      expect(data.title).toBe(todoMock.title);
      expect(data.content).toBe(todoUpdateBodyMock.content);
   });

   test("delete todo should work correctly", () => {
      todoDatabase.push(todoMock);

      const todoServices = new TodoServices();

      todoServices.delete(todoMock.id);
   })
});
