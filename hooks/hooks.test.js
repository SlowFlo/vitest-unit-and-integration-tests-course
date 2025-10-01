import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user;

beforeAll(() => {
  // user = new User(testEmail);
  console.log("beforeAll()");
});
beforeEach(() => {
  user = new User(testEmail);
  console.log("beforeEach()");
});
afterEach(() => {
  // user = new User(testEmail);
  console.log("afterEach()");
});
afterAll(() => {
  console.log("afterAll()");
});

// if we use concurrent() on describe each test will be launched as
// if called with concurrent()
// describe.concurrent();

it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";
  // if we use the global user the concurrency may update it
  // between the update and the expect
  const user2 = new User(testEmail);

  user2.updateEmail(newTestEmail);

  expect(user2.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it.concurrent("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it.concurrent("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it.concurrent(
  "should still have an email property after clearing the email",
  () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  },
);
