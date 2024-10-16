import { sum } from "../..";

describe("Unit test: sum function", () => {
  test("should be able to sum two numbers sucessfully", () => {
    const total = sum(2, 2);

    expect(total).toBe(4);
  });
});
