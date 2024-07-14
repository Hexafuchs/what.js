import { describe, expect, it } from "vitest";
import { isFunction } from "../../src/types";

describe("isFunction", () => {
  it("should be negative about null", () => {
    expect(isFunction(null)).toBeFalsy();
  });
  it("should be negative about undefined", () => {
    expect(isFunction(undefined)).toBeFalsy();
  });
  it("should be negative about true", () => {
    expect(isFunction(true)).toBeFalsy();
  });
  it("should be negative about false", () => {
    expect(isFunction(false)).toBeFalsy();
  });
  it("should be negative about empty string", () => {
    expect(isFunction("")).toBeFalsy();
  });
  it("should be negative about non-empty string", () => {
    expect(isFunction("hello")).toBeFalsy();
  });
  it("should be negative about zero", () => {
    expect(isFunction(0)).toBeFalsy();
  });
  it("should be negative about a positive integer", () => {
    expect(isFunction(42)).toBeFalsy();
  });
  it("should be negative about a negative integer", () => {
    expect(isFunction(-42)).toBeFalsy();
  });
  it("should be negative about a float", () => {
    expect(isFunction(42.0)).toBeFalsy();
  });
  it("should be positive about functions", () => {
    expect(isFunction(() => {})).toBeTruthy();
  });
  it("should be negative about arrays", () => {
    expect(isFunction([])).toBeFalsy();
  });
  it("should be negative about non-empty arrays", () => {
    expect(isFunction([42])).toBeFalsy();
  });
  it("should be negative about objects", () => {
    expect(isFunction({})).toBeFalsy();
  });
  it("should be negative about non-empty objects", () => {
    expect(isFunction({'hello': 'world'})).toBeFalsy();
  });
});