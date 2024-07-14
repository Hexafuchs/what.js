import { describe, expect, it } from "vitest";
import {isNull} from "../../src/types";

describe("isNull", () => {
  it("should be positive about null", () => {
    expect(isNull(null)).toBeTruthy();
  });
  it("should be negative about undefined", () => {
    expect(isNull(undefined)).toBeFalsy();
  });
  it("should be negative about true", () => {
    expect(isNull(true)).toBeFalsy();
  });
  it("should be negative about false", () => {
    expect(isNull(false)).toBeFalsy();
  });
  it("should be negative about empty string", () => {
    expect(isNull("")).toBeFalsy();
  });
  it("should be negative about non-empty string", () => {
    expect(isNull("hello")).toBeFalsy();
  });
  it("should be negative about zero", () => {
    expect(isNull(0)).toBeFalsy();
  });
  it("should be negative about a positive integer", () => {
    expect(isNull(42)).toBeFalsy();
  });
  it("should be negative about a negative integer", () => {
    expect(isNull(-42)).toBeFalsy();
  });
  it("should be negative about a float", () => {
    expect(isNull(42.0)).toBeFalsy();
  });
  it("should be negative about functions", () => {
    expect(isNull(() => {})).toBeFalsy();
  });
  it("should be negative about arrays", () => {
    expect(isNull([])).toBeFalsy();
  });
  it("should be negative about non-empty arrays", () => {
    expect(isNull([42])).toBeFalsy();
  });
  it("should be negative about objects", () => {
    expect(isNull({})).toBeFalsy();
  });
  it("should be negative about non-empty objects", () => {
    expect(isNull({'hello': 'world'})).toBeFalsy();
  });
});
