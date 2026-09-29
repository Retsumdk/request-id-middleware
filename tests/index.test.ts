import { describe, test, expect } from "bun:test";
import { spawnSync } from "child_process";
import { mkdtempSync, writeFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

describe("config loading (via CLI)", () => {
  test("CLI runs with defaults when no config.json exists", () => {
    const dir = mkdtempSync(join(tmpdir(), "req-id-"));
    try {
      const r = spawnSync("bun", ["run", join(import.meta.dir, "../src/index.ts")], {
        cwd: dir, encoding: "utf-8", timeout: 30000,
      });
      expect(r.status).toBe(0);
      expect(r.stdout).toContain("Connected to https://api.example.com");
      expect(r.stdout).toContain("Timeout: 30000ms | Retries: 3");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  test("config.json overrides defaults", () => {
    const dir = mkdtempSync(join(tmpdir(), "req-id-"));
    try {
      writeFileSync(
        join(dir, "config.json"),
        JSON.stringify({ baseUrl: "https://custom.example", timeout: 5000, retries: 7 })
      );
      const r = spawnSync("bun", ["run", join(import.meta.dir, "../src/index.ts")], {
        cwd: dir, encoding: "utf-8", timeout: 30000,
      });
      expect(r.status).toBe(0);
      expect(r.stdout).toContain("Connected to https://custom.example");
      expect(r.stdout).toContain("Timeout: 5000ms | Retries: 7");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
