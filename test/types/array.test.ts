import { describe, expect, it } from "vitest";
import { isArray } from "../../src/types";

describe("isArray", () => {
  it("should be negative about null", () => {
    expect(isArray(null)).toBeFalsy();
  });
  it("should be negative about undefined", () => {
    expect(isArray(undefined)).toBeFalsy();
  });
  it("should be negative about true", () => {
    expect(isArray(true)).toBeFalsy();
  });
  it("should be negative about false", () => {
    expect(isArray(false)).toBeFalsy();
  });
  it("should be negative about empty string", () => {
    expect(isArray("")).toBeFalsy();
  });
  it("should be negative about non-empty string", () => {
    expect(isArray("hello")).toBeFalsy();
  });
  it("should be negative about zero", () => {
    expect(isArray(0)).toBeFalsy();
  });
  it("should be negative about a positive integer", () => {
    expect(isArray(42)).toBeFalsy();
  });
  it("should be negative about a negative integer", () => {
    expect(isArray(-42)).toBeFalsy();
  });
  it("should be negative about a float", () => {
    expect(isArray(42.0)).toBeFalsy();
  });
  it("should be negative about functions", () => {
    expect(isArray(() => {})).toBeFalsy();
  });
  it("should be positive about arrays", () => {
    expect(isArray([])).toBeTruthy();
  });
  it("should be positive about non-empty arrays", () => {
    expect(isArray([42])).toBeTruthy();
  });
  it("should be negative about objects", () => {
    expect(isArray({})).toBeFalsy();
  });
  it("should be negative about non-empty objects", () => {
    expect(isArray({'hello': 'world'})).toBeFalsy();
  });
});
