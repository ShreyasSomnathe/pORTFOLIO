import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Format number with commas
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num)
}

// Format percentage
export function formatPercent(num: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num / 100)
}

// Generate random number in range (for animations)
export function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

// Smooth lerp
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

// Easing functions
export const easing = {
  easeInOutCubic: (t: number): number =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  easeOutExpo: (t: number): number =>
    t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutQuart: (t: number): number =>
    t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
}
