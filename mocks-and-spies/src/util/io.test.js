import { it, expect } from "vitest";
import writeData from "./io.js";

it("should execute the writeFile method", async () => {
  const testData = "Test";
  const testFilename = "test.txt";

  await expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
