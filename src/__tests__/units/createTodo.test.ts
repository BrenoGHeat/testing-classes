import { prisma } from "../../database/prisma";
import { TodoServices } from "../../services/todo.services";
import { todoCreateBodyMock } from "../__mocks__/todo.mocks";

describe("Unit test: create todo", () => {
   beforeEach(async () => {
      await prisma.todo.deleteMany();
   })

   test("create todo should work correctly", async () => {
      const todoServices = new TodoServices();
      const data = await todoServices.create(todoCreateBodyMock);

      expect(data.id).toBeDefined();
      expect(data.title).toBe(todoCreateBodyMock.title);
      expect(data.content).toBe(todoCreateBodyMock.content);
   });
});
