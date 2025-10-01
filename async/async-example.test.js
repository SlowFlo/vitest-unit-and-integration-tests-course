import { expect, it } from "vitest";

import { generateToken } from "./async-example.js";

it("should generate a token value", async () => {
  const testUserEmail = "test@test.com";

  const token = await new Promise((resolve, reject) => {
    generateToken(testUserEmail, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

  expect(token).toBeDefined();
});
