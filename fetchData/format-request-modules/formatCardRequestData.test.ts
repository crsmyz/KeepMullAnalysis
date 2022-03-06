import { assertEquals } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { formatCardRequestData } from "./formatCardRequestData";
import { CardRequest } from "../../interfaces/cardRequest.ts";

// Compact form: name and function
Deno.test("formats card request data", () => {
  const testString = "Card 1, Card 2, Card 3";
  formatCardRequestData(testString);
  assertEquals(x, 3);
});
