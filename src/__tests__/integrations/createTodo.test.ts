import { prisma } from "../../database/prisma";
import { todoCreateBodyMock } from "../__mocks__/todo.mocks";
import { request } from "../utils/request";

describe("Integration test: create todo", () => {
   beforeEach(async () => {
      await prisma.$transaction([prisma.todo.deleteMany()]);
   });

   test("should be able to create a todo successfully", async () => {
      const data = await request
         .post("/todos")
         .send(todoCreateBodyMock)
         .expect(201)
         .then((response) => response.body);

       expect(data.id).toBeDefined();
       expect(data.title).toBe(todoCreateBodyMock.title);
       expect(data.content).toBe(todoCreateBodyMock.content);
   });
});
