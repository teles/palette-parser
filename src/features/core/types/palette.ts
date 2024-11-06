import {
  RGBColor,
  RGBAColor,
  HSLColor,
  HSLAColor,
  CSSColor,
} from '@/features/core/types/colors'

export type PaletteOrigin = 'css' | 'scss' | 'sass' | 'less' | 'tailwind'

export interface Palette {
  name: string
  origin: PaletteOrigin
  colors: Array<RGBColor | RGBAColor | HSLColor | HSLAColor | CSSColor>
}
