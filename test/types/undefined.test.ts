import { describe, expect, it } from "vitest";
import { isUndefined } from "../../src/types";

describe("isUndefined", () => {
  it("should be negative about null", () => {
    expect(isUndefined(null)).toBeFalsy();
  });
  it("should be positive about undefined", () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });
  it("should be negative about true", () => {
    expect(isUndefined(true)).toBeFalsy();
  });
  it("should be negative about false", () => {
    expect(isUndefined(false)).toBeFalsy();
  });
  it("should be negative about empty string", () => {
    expect(isUndefined("")).toBeFalsy();
  });
  it("should be negative about non-empty string", () => {
    expect(isUndefined("hello")).toBeFalsy();
  });
  it("should be negative about zero", () => {
    expect(isUndefined(0)).toBeFalsy();
  });
  it("should be negative about a positive integer", () => {
    expect(isUndefined(42)).toBeFalsy();
  });
  it("should be negative about a negative integer", () => {
    expect(isUndefined(-42)).toBeFalsy();
  });
  it("should be negative about a float", () => {
    expect(isUndefined(42.0)).toBeFalsy();
  });
  it("should be negative about functions", () => {
    expect(isUndefined(() => {})).toBeFalsy();
  });
  it("should be negative about arrays", () => {
    expect(isUndefined([])).toBeFalsy();
  });
  it("should be negative about non-empty arrays", () => {
    expect(isUndefined([42])).toBeFalsy();
  });
  it("should be negative about objects", () => {
    expect(isUndefined({})).toBeFalsy();
  });
  it("should be negative about non-empty objects", () => {
    expect(isUndefined({'hello': 'world'})).toBeFalsy();
  });
});
