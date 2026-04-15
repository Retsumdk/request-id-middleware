import { describe, test, expect } from "bun:test";
describe("request-id-middleware", () => {
  test("module loads", async () => { const m = await import("./index"); expect(m).toBeDefined(); });
});
