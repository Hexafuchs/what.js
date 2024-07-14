import { describe, expect, it } from "vitest";
import { isNumber } from "../../src/types";

describe("isNumber", () => {
  it("should be negative about null", () => {
    expect(isNumber(null)).toBeFalsy();
  });
  it("should be negative about undefined", () => {
    expect(isNumber(undefined)).toBeFalsy();
  });
  it("should be negative about true", () => {
    expect(isNumber(true)).toBeFalsy();
  });
  it("should be negative about false", () => {
    expect(isNumber(false)).toBeFalsy();
  });
  it("should be negative about empty string", () => {
    expect(isNumber("")).toBeFalsy();
  });
  it("should be negative about non-empty string", () => {
    expect(isNumber("hello")).toBeFalsy();
  });
  it("should be positive about zero", () => {
    expect(isNumber(0)).toBeTruthy();
  });
  it("should be positive about a positive integer", () => {
    expect(isNumber(42)).toBeTruthy();
  });
  it("should be positive about a negative integer", () => {
    expect(isNumber(-42)).toBeTruthy();
  });
  it("should be positive about a float", () => {
    expect(isNumber(42.0)).toBeTruthy();
  });
  it("should be negative about functions", () => {
    expect(isNumber(() => {})).toBeFalsy();
  });
  it("should be negative about arrays", () => {
    expect(isNumber([])).toBeFalsy();
  });
  it("should be negative about non-empty arrays", () => {
    expect(isNumber([42])).toBeFalsy();
  });
  it("should be negative about objects", () => {
    expect(isNumber({})).toBeFalsy();
  });
  it("should be negative about non-empty objects", () => {
    expect(isNumber({'hello': 'world'})).toBeFalsy();
  });
});
