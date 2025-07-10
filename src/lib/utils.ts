import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

export function formatString(text: string): string {
   const formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // bold formatting
    .replace(/\n/g, '<br>');
    return formatted;
}
