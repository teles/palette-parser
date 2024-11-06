import * as R from 'ramda'
import { PaletteParserInterface } from '@/features/core/parsers/PaletteParser.interface'
import { isColor } from '@/features/core/utils/isColor/isColor'

const extractNameValue = (
  line: string,
  pattern: RegExp
): readonly [string, string][] => {
  const matchResult = line.match(pattern)
  return matchResult && isColor(matchResult[2].trim())
    ? [[matchResult[1].trim(), matchResult[2].trim()]]
    : []
}
const createParser = (patterns: {
  VariableLine: RegExp
  VariableNameValue: RegExp
}): ((input: string) => Record<string, string>) => {
  return R.pipe(
    R.match(patterns.VariableLine),
    R.chain((line: string) =>
      extractNameValue(line, patterns.VariableNameValue)
    ),
    R.fromPairs
  )
}

export interface PlainTextPatterns {
  VariableLine: RegExp
  VariableNameValue: RegExp
}

export default class PlainTextPaletteParser implements PaletteParserInterface {
  private variablePattern: RegExp
  private nameValuePattern: RegExp
  public name: string

  constructor(options: PlainTextPatterns & { name: string }) {
    this.variablePattern = options.VariableLine
    this.nameValuePattern = options.VariableNameValue
    this.name = options.name
  }

  detect(input: string): boolean {
    return this.variablePattern.test(input)
  }

  parse(input: string): Record<string, string> {
    const parser = createParser({
      VariableLine: this.variablePattern,
      VariableNameValue: this.nameValuePattern,
    })
    return parser(input)
  }
}
