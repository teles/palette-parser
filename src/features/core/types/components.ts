export interface RGBComponents {
  r: number
  g: number
  b: number
}

export interface HSLComponents {
  h: number
  s: number
  l: number
}

export type WithAlpha<T> = T & { a: number }
