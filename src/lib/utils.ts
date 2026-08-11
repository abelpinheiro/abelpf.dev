import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves a file in public/ against the deploy base path.
 * Vite serves this app under a sub-path in production, so a root-relative
 * "/file.jpg" resolves outside the app and 404s. Never hardcode the prefix.
 */
export function asset(file: string) {
  return `${import.meta.env.BASE_URL}${file.replace(/^\//, "")}`
}
