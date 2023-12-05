import { resetDatabase, todoDatabase } from "../../database/database";
import { TodoServices } from "../../services/todo.services";

describe("Unit test: todo services", () => {
   // beforeEach, beforeAll, afterEach, afterAll

   beforeEach(() => {
        resetDatabase();
   });

   test("create todo should work correctly", () => {
      const todoServices = new TodoServices();

      const data = todoServices.create({ title: "Título", content: "Conteúdo" });

      expect(data).toStrictEqual({
         id: 1,
         title: "Título",
         content: "Conteúdo",
      });
   });

   test("get many todos should work correctly", () => {
      todoDatabase.push({
         id: 1,
         title: "Título",
         content: "Conteúdo",
      });

      const todoServices = new TodoServices();

      const data = todoServices.getMany();

      expect(data).toHaveLength(1);
   });
});
