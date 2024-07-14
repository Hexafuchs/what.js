import { describe, expect, it } from "vitest";
import {isEmpty, isNotEmpty} from "../../src/types";

describe("isEmpty", () => {
  it("should be positive about null", () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isNotEmpty(null)).toBeFalsy();
  });
  it("should be positive about undefined", () => {
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isNotEmpty(undefined)).toBeFalsy();
  });
  it("should be negative about true", () => {
    expect(isEmpty(true)).toBeFalsy();
    expect(isNotEmpty(true)).toBeTruthy();
  });
  it("should be positive about false", () => {
    expect(isEmpty(false)).toBeTruthy();
    expect(isNotEmpty(false)).toBeFalsy();
  });
  it("should be positive about empty string", () => {
    expect(isEmpty("")).toBeTruthy();
    expect(isNotEmpty("")).toBeFalsy();
  });
  it("should be negative about non-empty string", () => {
    expect(isEmpty("hello")).toBeFalsy();
    expect(isNotEmpty("hello")).toBeTruthy();
  });
  it("should be positive about zero", () => {
    expect(isEmpty(0)).toBeTruthy();
    expect(isNotEmpty(0)).toBeFalsy();
  });
  it("should be negative about a positive integer", () => {
    expect(isEmpty(42)).toBeFalsy();
    expect(isNotEmpty(42)).toBeTruthy();
  });
  it("should be negative about a negative integer", () => {
    expect(isEmpty(-42)).toBeFalsy();
    expect(isNotEmpty(-42)).toBeTruthy();
  });
  it("should be negative about a float", () => {
    expect(isEmpty(42.0)).toBeFalsy();
    expect(isNotEmpty(42.0)).toBeTruthy();
  });
  it("should be negative about functions", () => {
    expect(isEmpty(() => {})).toBeFalsy();
    expect(isNotEmpty(() => {})).toBeTruthy();
  });
  it("should be positive about empty arrays", () => {
    expect(isEmpty([])).toBeTruthy();
    expect(isNotEmpty([])).toBeFalsy();
  });
  it("should be negative about non-empty arrays", () => {
    expect(isEmpty([42])).toBeFalsy();
    expect(isNotEmpty([42])).toBeTruthy();
  });
  it("should be positive about empty objects", () => {
    expect(isEmpty({})).toBeTruthy();
    expect(isNotEmpty({})).toBeFalsy();
  });
  it("should be negative about non-empty objects", () => {
    expect(isEmpty({'hello': 'world'})).toBeFalsy();
    expect(isNotEmpty({'hello': 'world'})).toBeTruthy();
  });
});
