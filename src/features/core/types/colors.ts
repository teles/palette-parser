import {
  RGBComponents,
  HSLComponents,
  WithAlpha,
} from '@/features/core/types/components'

export interface Color<Format, Components> {
  variable: string
  value: Format
  format: string
  components: Components
}

export type RGBColor = Color<'rgb', RGBComponents>
export type RGBAColor = Color<'rgba', WithAlpha<RGBComponents>>
export type HSLColor = Color<'hsl', HSLComponents>
export type HSLAColor = Color<'hsla', WithAlpha<HSLComponents>>
export type CSSColor = Color<'css', null>
