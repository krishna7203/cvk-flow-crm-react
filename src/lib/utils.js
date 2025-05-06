
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Convert the TypeScript utility to JavaScript
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
