import { describe, expect, it } from "vitest";
import {isSet, isNotSet} from "../../src/types";

describe("isSet", () => {
  it("should be positive about null", () => {
    expect(isSet(null)).toBeFalsy();
    expect(isNotSet(null)).toBeTruthy();
  });
  it("should be positive about undefined", () => {
    expect(isSet(undefined)).toBeFalsy();
    expect(isNotSet(undefined)).toBeTruthy();
  });
  it("should be negative about true", () => {
    expect(isSet(true)).toBeTruthy();
    expect(isNotSet(true)).toBeFalsy();
  });
  it("should be negative about false", () => {
    expect(isSet(false)).toBeTruthy();
    expect(isNotSet(false)).toBeFalsy();
  });
  it("should be negative about empty string", () => {
    expect(isSet("")).toBeTruthy();
    expect(isNotSet("")).toBeFalsy();
  });
  it("should be negative about non-empty string", () => {
    expect(isSet("hello")).toBeTruthy();
    expect(isNotSet("hello")).toBeFalsy();
  });
  it("should be negative about zero", () => {
    expect(isSet(0)).toBeTruthy();
    expect(isNotSet(0)).toBeFalsy();
  });
  it("should be negative about a positive integer", () => {
    expect(isSet(42)).toBeTruthy();
    expect(isNotSet(42)).toBeFalsy();
  });
  it("should be negative about a negative integer", () => {
    expect(isSet(-42)).toBeTruthy();
    expect(isNotSet(-42)).toBeFalsy();
  });
  it("should be negative about a float", () => {
    expect(isSet(42.0)).toBeTruthy();
    expect(isNotSet(42.0)).toBeFalsy();
  });
  it("should be negative about functions", () => {
    expect(isSet(() => {})).toBeTruthy();
    expect(isNotSet(() => {})).toBeFalsy();
  });
  it("should be negative about empty arrays", () => {
    expect(isSet([])).toBeTruthy();
    expect(isNotSet([])).toBeFalsy();
  });
  it("should be negative about non-empty arrays", () => {
    expect(isSet([42])).toBeTruthy();
    expect(isNotSet([42])).toBeFalsy();
  });
  it("should be negative about empty objects", () => {
    expect(isSet({})).toBeTruthy();
    expect(isNotSet({})).toBeFalsy();
  });
  it("should be negative about non-empty objects", () => {
    expect(isSet({'hello': 'world'})).toBeTruthy();
    expect(isNotSet({'hello': 'world'})).toBeFalsy();
  });
});
