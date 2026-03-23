// gcd.test.ts
import { assertEquals } from "jsr:@std/assert";
import { gcdBruteForce } from "./gcd.ts";

Deno.test("ggT(1, 1) = 1", () => assertEquals(gcdBruteForce(1, 1), 1));
Deno.test("ggT(12, 8) = 4", () => assertEquals(gcdBruteForce(12, 8), 4));
