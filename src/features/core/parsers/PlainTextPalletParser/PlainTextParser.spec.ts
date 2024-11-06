import { describe, it, expect, vi, beforeEach } from 'vitest'
import { isColor } from '@/features/core/utils/isColor/isColor'
import PlainTextPaletteParser, {
  PlainTextPatterns,
} from '@/features/core/parsers/PlainTextPalletParser/PlainTextPaletteParser'

vi.mock('@/features/core/utils/isColor/isColor', () => ({
  isColor: vi.fn(),
}))

describe('PlainTextPaletteParser', () => {
  const patterns: PlainTextPatterns = {
    VariableLine: /--[a-zA-Z_][\w-]*\s*:\s*[^;]+\s*;?/g,
    VariableNameValue: /--([a-zA-Z_][\w-]*)\s*:\s*([^;]+)/,
  }

  let parser: PlainTextPaletteParser

  beforeEach(() => {
    parser = new PlainTextPaletteParser(patterns)
  })

  describe('detect', () => {
    it('should return true if VariableLine pattern matches the input', () => {
      const input = '--primary-color: #ff5733;'
      expect(parser.detect(input)).toBe(true)
    })

    it('should return false if VariableLine pattern does not match the input', () => {
      const input = 'not-a-variable'
      const mockTest = vi
        .spyOn(patterns.VariableLine, 'test')
        .mockReturnValue(false)
      expect(parser.detect(input)).toBe(false)
      mockTest.mockRestore()
    })
  })

  describe('parse', () => {
    it('should parse the input into a record of variables when isColor is true', () => {
      ;(isColor as ReturnType<typeof vi.fn>).mockReturnValue(true)
      const input = '--primary-color: #ff5733; --secondary-color: #00aaff;'
      const result = parser.parse(input)
      expect(result).toEqual({
        'primary-color': '#ff5733',
        'secondary-color': '#00aaff',
      })
    })

    it('should not include variables when isColor is false', () => {
      ;(isColor as ReturnType<typeof vi.fn>).mockReturnValue(false)
      const input = '--primary-color: #ff5733;'
      const result = parser.parse(input)
      expect(result).toEqual({})
    })

    it('should return an empty object if there are no matching variables', () => {
      const input = 'not-a-variable'
      const result = parser.parse(input)
      expect(result).toEqual({})
    })
  })
})
