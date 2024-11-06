import { describe, it, expect, beforeEach } from 'vitest'
import LessPaletteParser from '@/features/core/parsers/LessPaletteParser/LessPaletteParser'

describe('LessPaletteParser', () => {
  let parser: LessPaletteParser

  beforeEach(() => {
    parser = new LessPaletteParser()
  })

  describe('detect', () => {
    it('should return true for valid LESS variables in non-minified format', () => {
      const input = `
        @primary-color: #ff5733;
        @secondary-color: #00aaff;
      `
      expect(parser.detect(input)).toBe(true)
    })

    it('should return true for valid LESS variables in minified format', () => {
      const input = `@primary-color:#ff5733;@secondary-color:#00aaff;`
      expect(parser.detect(input)).toBe(true)
    })

    it('should return false for input without LESS variables', () => {
      const input = `body { color: #ff5733; }`
      expect(parser.detect(input)).toBe(false)
    })
  })

  describe('parse', () => {
    it('should correctly parse LESS variables in non-minified format', () => {
      const input = `
        @primary-color: #ff5733;
        @secondary-color: #00aaff;
      `
      const result = parser.parse(input)
      expect(result).toEqual({
        'primary-color': '#ff5733',
        'secondary-color': '#00aaff',
      })
    })

    it('should correctly parse LESS variables in minified format', () => {
      const input = `@primary-color:#ff5733;@secondary-color:#00aaff;`
      const result = parser.parse(input)
      expect(result).toEqual({
        'primary-color': '#ff5733',
        'secondary-color': '#00aaff',
      })
    })

    it('should return an empty object if there are no LESS variables', () => {
      const input = `body { color: #ff5733; }`
      const result = parser.parse(input)
      expect(result).toEqual({})
    })
  })
})
