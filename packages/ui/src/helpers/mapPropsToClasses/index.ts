import { type ExceptionMap, type ResponsiveValue } from "../../types";

const applyPrefix = <T>(
  value: T,
  prefix: string,
  exceptionsMap?: ExceptionMap
) => {
  // Check if the prefix has exceptions and if the value matches an exception
  const exception =
    exceptionsMap?.[prefix]?.[value as keyof (typeof exceptionsMap)[string]];

  if (exception) {
    return exception;
  }

  if (prefix === "") {
    return `${value}`;
  }

  return `${prefix}-${value}`;
};

// Utility to map props to Tailwind classes
// @TODO: Support negative values classes
export const mapPropsToClasses = <T>({
  value,
  prefix,
  exceptionsMap,
}: {
  value: ResponsiveValue<T> | undefined;
  prefix: string;
  exceptionsMap?: ExceptionMap;
}): string | null => {
  if (value === null || value === undefined) {
    return null;
  }

  if (typeof value === "number" || typeof value === "string") {
    return applyPrefix(value, prefix, exceptionsMap);
  }

  if (typeof value === "object") {
    return Object.entries(value)
      .map(
        ([breakpoint, val]) =>
          `${breakpoint}:${applyPrefix(val, prefix, exceptionsMap)}`
      )
      .join(" ");
  }

  return null;
};
