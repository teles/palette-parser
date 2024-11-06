import { PaletteParserInterface } from '@/features/core/parsers/PaletteParser.interface'

export default class PaletteParserManager {
  private parsers: PaletteParserInterface[]
  public names: string[]

  constructor(parsers: PaletteParserInterface[]) {
    this.parsers = parsers
    this.names = parsers.map((parser) => parser.name)
  }

  parse(input: string): Record<string, string> {
    const parser = this.parsers.find((parser) => parser.detect(input))
    if (!parser) {
      throw new Error('No suitable parser found for the input.')
    }
    return parser.parse(input)
  }
}
