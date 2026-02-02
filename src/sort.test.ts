import { expect, test } from "vitest";
import { StackName, sort } from "./sort";

test("10x10x10 @ 10kg === STANDARD", () => {
  expect(sort(10, 10, 10, 10)).toBe(StackName.STANDARD);
});

test("10x10x10 @ 20kg === SPECIAL (heavy)", () => {
  expect(sort(10, 10, 10, 20)).toBe(StackName.SPECIAL);
});

test("100x100x100 @ 10kg === SPECIAL (volume bulky)", () => {
  expect(sort(100, 100, 100, 10)).toBe(StackName.SPECIAL);
});

test("150x10x10 @ 10kg === SPECIAL (dimension bulky)", () => {
  expect(sort(150, 10, 10, 10)).toBe(StackName.SPECIAL);
});

test("100x100x100 @ 20kg === REJECTED (both heavy and bulky)", () => {
  expect(sort(100, 100, 100, 20)).toBe(StackName.REJECTED);
});

test("0x0x0 @ 10kg === REJECTED (invalid dimensions)", () => {
  expect(sort(0, 0, 0, 10)).toBe(StackName.REJECTED);
});

test("10x10x10 @ 0kg === REJECTED (invalid mass)", () => {
  expect(sort(10, 10, 10, 0)).toBe(StackName.REJECTED);
});

test("-2340x10x10 @ 10kg === REJECTED (negative input)", () => {
    expect(sort(-2340, 10, 10, 10)).toBe(StackName.REJECTED);
});
  