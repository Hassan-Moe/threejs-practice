// src/utils/typeGuards.ts
export const isString = (value: unknown): value is string =>
  typeof value === "string";
export const isNumber = (value: unknown): value is number =>
  typeof value === "number";
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";
export const isObject = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value);
export const isArray = (value: unknown): value is unknown[] =>
  Array.isArray(value);
export const isUndefined = (value: unknown): value is undefined =>
  typeof value === "undefined";
export const isNull = (value: unknown): value is null => value === null;
export const isDate = (value: unknown): value is Date =>
  value instanceof Date && !isNaN(value.getTime());
export const isRegExp = (value: unknown): value is RegExp =>
  value instanceof RegExp;
