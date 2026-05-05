import { assertEquals } from "@std/assert";
import { formattedAddition, rolldice } from "./demo.ts";

Deno.test("3 + 5 = 8", function addTest() {
  // Arrange
  const a = 3;
  const b = 5;

  // Act
  const actual = formattedAddition(a, b);

  // Assert
  assertEquals(actual, "3 + 5 = 8");
});

Deno.test("3 + -5 = -2", function addTest() {
  // Given
  const a = 3;
  const b = -5;

  // When
  const actual = formattedAddition(a, b);

  // Then
  assertEquals(actual, "3 + -5 = -2");
});

Deno.test("Augenzahl", function augenzahlTest() {
  const augenzahl = rolldice();

  const result = augenzahl >= 1 && augenzahl <= 6;


  assertEquals(result, true);
});

Deno.test("Calculatedice", function calculatediceTest() {
  const augenzahl = rolldice() + rolldice();

  const result = augenzahl >= 2 && augenzahl <= 12;
  
  assertEquals(result, true);
})