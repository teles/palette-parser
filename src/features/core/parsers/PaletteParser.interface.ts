export interface PaletteParserInterface {
  name: string
  detect(input: string): boolean
  parse(input: string): Record<string, string>
}
