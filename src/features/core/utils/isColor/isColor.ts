import * as R from 'ramda'
import {
  cssColorNames,
  hexColor,
  hslaColor,
  hslColor,
  rgbaColor,
  rgbColor,
} from '@/features/core/utils/isColor/colorPatterns'

const colorCheckers = [
  (value: string) => hexColor.test(value),
  (value: string) => rgbColor.test(value),
  (value: string) => rgbaColor.test(value),
  (value: string) => hslColor.test(value),
  (value: string) => hslaColor.test(value),
  (value: string) => cssColorNames.has(value.toLowerCase()),
]

export const isColor = (value: string): boolean =>
  R.any((check) => check(value), colorCheckers)
