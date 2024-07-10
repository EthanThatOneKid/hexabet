import { assertEquals } from "@std/assert";
import { encode } from "./hexabet.ts";

Deno.test("encode encodes content to hexabet", () => {
  assertEquals(
    encode("hello world"),
    "4e110 9021d",
  );

  assertEquals(
    encode("ethan"),
    "e74a1",
  );

  assertEquals(
    encode("fart"),
    "fa27",
  );
});
