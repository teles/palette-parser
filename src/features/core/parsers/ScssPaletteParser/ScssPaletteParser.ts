import PlainTextPaletteParser from '@/features/core/parsers/PlainTextPalletParser/PlainTextPaletteParser'

export default class ScssPaletteParser extends PlainTextPaletteParser {
  constructor() {
    super({
      VariableLine: /\$[a-zA-Z_][\w-]*\s*:\s*[^;]+\s*;?/g,
      VariableNameValue: /\$([a-zA-Z_][\w-]*)\s*:\s*([^;]+)/,
      name: 'SCSS',
    })
  }
}
