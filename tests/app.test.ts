// tests/app.test.ts
import { describe, expect, it, beforeAll, afterAll, mock } from "bun:test";
import app from "../src/app";
import { Hono } from "hono";

describe("Hono App Tests", () => {
    // Test the root endpoint
    it("should return a hello message on the root endpoint", async () => {
        const req = new Request("http://localhost/");
        const res = await app.fetch(req);
        expect(res.status).toBe(200);
        expect(await res.text()).toBe("Hello from Hono! Try the /status endpoint");
    });

    // Test the status endpoint
    it("should return status ok and environment variables", async () => {
        // Mock environment variables for the test
        process.env.NODE_ENV = "test";
        process.env.APP_VERSION = "1.0.1";

        const req = new Request("http://localhost/status");
        const res = await app.fetch(req);

        expect(res.status).toBe(200);

        const data = await res.json();
        expect(data.status).toBe("ok");
        expect(data.timestamp).toBeDefined();

        // Test environment object
        expect(data.environment).toBeDefined();
        expect(data.environment.NODE_ENV).toBe("test");
        expect(data.environment.APP_VERSION).toBe("1.0.1");
        expect(data.environment.BUN_ENV).toBeDefined();
        expect(data.environment.SERVER_PORT).toBeDefined();
    });
});