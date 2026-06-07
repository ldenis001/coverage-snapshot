import { describe, expect, it } from "vitest";
import { add, divide, subtract } from "./math.js";

describe("math", () => {
  it("adds", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("subtracts", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("divides", () => {
    expect(divide(6, 2)).toBe(3);
  });

  it("throws on divide by zero", () => {
    expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
  });
});
