import { describe, expect, it } from "vitest";
import { isString } from "../../src/types";

describe("isString", () => {
  it("should be negative about null", () => {
    expect(isString(null)).toBeFalsy();
  });
  it("should be negative about undefined", () => {
    expect(isString(undefined)).toBeFalsy();
  });
  it("should be negative about true", () => {
    expect(isString(true)).toBeFalsy();
  });
  it("should be negative about false", () => {
    expect(isString(false)).toBeFalsy();
  });
  it("should be positive about empty string", () => {
    expect(isString("")).toBeTruthy();
  });
  it("should be positive about non-empty string", () => {
    expect(isString("hello")).toBeTruthy();
  });
  it("should be negative about zero", () => {
    expect(isString(0)).toBeFalsy();
  });
  it("should be negative about a positive integer", () => {
    expect(isString(42)).toBeFalsy();
  });
  it("should be negative about a negative integer", () => {
    expect(isString(-42)).toBeFalsy();
  });
  it("should be negative about a float", () => {
    expect(isString(42.0)).toBeFalsy();
  });
  it("should be negative about functions", () => {
    expect(isString(() => {})).toBeFalsy();
  });
  it("should be negative about arrays", () => {
    expect(isString([])).toBeFalsy();
  });
  it("should be negative about non-empty arrays", () => {
    expect(isString([42])).toBeFalsy();
  });
  it("should be negative about objects", () => {
    expect(isString({})).toBeFalsy();
  });
  it("should be negative about non-empty objects", () => {
    expect(isString({'hello': 'world'})).toBeFalsy();
  });
});
