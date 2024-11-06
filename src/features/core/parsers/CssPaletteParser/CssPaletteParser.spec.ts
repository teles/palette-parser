import { describe, it, expect, beforeEach } from 'vitest'
import CssPaletteParser from '@/features/core/parsers/CssPaletteParser/CssPaletteParser'

describe('CssPaletteParser', () => {
  let parser: CssPaletteParser

  beforeEach(() => {
    parser = new CssPaletteParser()
  })

  describe('detect', () => {
    it('should return true for valid CSS variables in non-minified CSS', () => {
      const input = `
        :root {
          --primary-color: #ff5733;
          --secondary-color: #00aaff;
        }
      `
      expect(parser.detect(input)).toBe(true)
    })

    it('should return true for valid CSS variables in minified CSS', () => {
      const input = `:root{--primary-color:#ff5733;--secondary-color:#00aaff;}`
      expect(parser.detect(input)).toBe(true)
    })

    it('should return false for input without CSS variables', () => {
      const input = `body { color: #ff5733; }`
      expect(parser.detect(input)).toBe(false)
    })
  })

  describe('parse', () => {
    it('should correctly parse CSS variables from non-minified CSS', () => {
      const input = `
        :root {
          --primary-color: #ff5733;
          --font-size: 16px;
          --secondary-color: #00aaff;
        }
      `
      const result = parser.parse(input)
      expect(result).toEqual({
        'primary-color': '#ff5733',
        'secondary-color': '#00aaff',
      })
    })

    it('should correctly parse CSS variables from minified CSS', () => {
      const input = `:root{--primary-color:#ff5733;--secondary-color:#00aaff;}`
      const result = parser.parse(input)
      expect(result).toEqual({
        'primary-color': '#ff5733',
        'secondary-color': '#00aaff',
      })
    })

    it('should return an empty object if there are no CSS variables', () => {
      const input = `body { color: #ff5733; }`
      const result = parser.parse(input)
      expect(result).toEqual({})
    })
  })
})
