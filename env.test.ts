import { assertEquals, assertThrows } from "./src/deps.ts"
import env, { Env } from "./src/env.ts"

const posterEnv = new Env("poster.env")

Deno.test("Get existing", () => {
  assertEquals(env.get("A", "2"), "1")
})

Deno.test("Get default", () => {
  assertEquals(env.get("_", "2"), "2")
})

Deno.test("Get missing", () => {
  assertThrows(() => env.get("C"))
})

Deno.test("Get int", () => {
  assertEquals(env.getInt("A"), 1)
})

Deno.test("Get from custom env", () => {
  assertEquals(posterEnv.get("A"), "10")
})
