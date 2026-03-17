import { assertAlmostEquals } from "@std/assert";
import { Circle, Point2D } from "./geometry.ts";
import { Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is roughtly 78.54", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.area();

  // Then
  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of a circle with radius 5 is roughtly 10", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.diameter();


  // Then
  assertAlmostEquals(actual, 10, 0.01);
});

Deno.test("circumference of a rectangle with width 5 and height 3 is roughtly 16", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(5, 3));

  // When
  const actual = rect.circumference();

  // Then
  assertAlmostEquals(actual, 16, 0.01);
});

Deno.test("area of a rectangle with width 5 and height 3 is roughtly 15", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(5, 3));

  // When
  const actual = rect.area();

  // Then
  assertAlmostEquals(actual, 15, 0.01);
});

Deno.test("diagonal of a rectangle with width 5 and height 3 is roughtly 5.83", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(5, 3));

  // When
  const actual = rect.diagonal();

  // Then
  assertAlmostEquals(actual, 5.83, 0.01);
});