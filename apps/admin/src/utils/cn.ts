import clsx from "clsx";
import classNames from "classnames";

/**
 * Utility to combine class names using clsx and classnames
 * @param  {...(string | undefined | null | object)} args - Class names or objects with conditionals
 * @returns {string} - A combined string of class names
 */
export function cn(...args: Parameters<typeof clsx>): string {
  return classNames(clsx(...args));
}
