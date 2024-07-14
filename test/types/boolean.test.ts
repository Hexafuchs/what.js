import { describe, expect, it } from "vitest";
import { isBoolean } from "../../src/types";

describe("isBoolean", () => {
  it("should be negative about null", () => {
    expect(isBoolean(null)).toBeFalsy();
  });
  it("should be negative about undefined", () => {
    expect(isBoolean(undefined)).toBeFalsy();
  });
  it("should be positive about true", () => {
    expect(isBoolean(true)).toBeTruthy();
  });
  it("should be positive about false", () => {
    expect(isBoolean(false)).toBeTruthy();
  });
  it("should be negative about empty string", () => {
    expect(isBoolean("")).toBeFalsy();
  });
  it("should be negative about non-empty string", () => {
    expect(isBoolean("hello")).toBeFalsy();
  });
  it("should be negative about zero", () => {
    expect(isBoolean(0)).toBeFalsy();
  });
  it("should be negative about a positive integer", () => {
    expect(isBoolean(42)).toBeFalsy();
  });
  it("should be negative about a negative integer", () => {
    expect(isBoolean(-42)).toBeFalsy();
  });
  it("should be negative about a float", () => {
    expect(isBoolean(42.0)).toBeFalsy();
  });
  it("should be negative about functions", () => {
    expect(isBoolean(() => {})).toBeFalsy();
  });
  it("should be negative about arrays", () => {
    expect(isBoolean([])).toBeFalsy();
  });
  it("should be negative about non-empty arrays", () => {
    expect(isBoolean([42])).toBeFalsy();
  });
  it("should be negative about objects", () => {
    expect(isBoolean({})).toBeFalsy();
  });
  it("should be negative about non-empty objects", () => {
    expect(isBoolean({'hello': 'world'})).toBeFalsy();
  });
});
