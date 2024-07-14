import { describe, expect, it } from "vitest";
import { isObject } from "../../src/types";

describe("isObject", () => {
  it("should be negative about null", () => {
    expect(isObject(null)).toBeFalsy();
  });
  it("should be negative about undefined", () => {
    expect(isObject(undefined)).toBeFalsy();
  });
  it("should be negative about true", () => {
    expect(isObject(true)).toBeFalsy();
  });
  it("should be negative about false", () => {
    expect(isObject(false)).toBeFalsy();
  });
  it("should be negative about empty string", () => {
    expect(isObject("")).toBeFalsy();
  });
  it("should be negative about non-empty string", () => {
    expect(isObject("hello")).toBeFalsy();
  });
  it("should be negative about zero", () => {
    expect(isObject(0)).toBeFalsy();
  });
  it("should be negative about a positive integer", () => {
    expect(isObject(42)).toBeFalsy();
  });
  it("should be negative about a negative integer", () => {
    expect(isObject(-42)).toBeFalsy();
  });
  it("should be negative about a float", () => {
    expect(isObject(42.0)).toBeFalsy();
  });
  it("should be negative about functions", () => {
    expect(isObject(() => {})).toBeFalsy();
  });
  it("should be negative about arrays", () => {
    expect(isObject([])).toBeFalsy();
    expect(isObject([], true)).toBeTruthy();
  });
  it("should be negative about non-empty arrays", () => {
    expect(isObject([42])).toBeFalsy();
    expect(isObject([42], true)).toBeTruthy();
  });
  it("should be positive about objects", () => {
    expect(isObject({})).toBeTruthy();
  });
  it("should be positive about non-empty objects", () => {
    expect(isObject({'hello': 'world'})).toBeTruthy();
  });
});
