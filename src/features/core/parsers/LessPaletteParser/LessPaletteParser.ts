import PlainTextPaletteParser from '@/features/core/parsers/PlainTextPalletParser/PlainTextPaletteParser'

class LessPaletteParser extends PlainTextPaletteParser {
  constructor() {
    super({
      VariableLine: /@[a-zA-Z_][\w-]*\s*:\s*[^;]+\s*;?/g,
      VariableNameValue: /@([a-zA-Z_][\w-]*)\s*:\s*([^;]+)/,
      name: 'LESS',
    })
  }
}

export default LessPaletteParser
