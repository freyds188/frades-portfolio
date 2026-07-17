import { rmSync } from "node:fs";
import { join } from "node:path";

const nextDir = join(process.cwd(), ".next");

try {
  rmSync(nextDir, { recursive: true, force: true });
} catch (error) {
  console.error("Unable to remove .next. Stop any running Next.js dev/build process and try again.");
  throw error;
}
