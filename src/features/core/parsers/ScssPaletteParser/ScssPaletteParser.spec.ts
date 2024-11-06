import { describe, it, expect, beforeEach } from 'vitest'
import ScssPaletteParser from '@/features/core/parsers/ScssPaletteParser/ScssPaletteParser'

describe('ScssPaletteParser', () => {
  let parser: ScssPaletteParser

  beforeEach(() => {
    parser = new ScssPaletteParser()
  })

  describe('detect', () => {
    it('should return true for valid SCSS variables in non-minified format', () => {
      const input = `
        $primary-color: #ff5733;
        $secondary-color: #00aaff;
      `
      expect(parser.detect(input)).toBe(true)
    })

    it('should return true for valid SCSS variables in minified format', () => {
      const input = `$primary-color:#ff5733;$secondary-color:#00aaff;`
      expect(parser.detect(input)).toBe(true)
    })

    it('should return false for input without SCSS variables', () => {
      const input = `body { color: #ff5733; }`
      expect(parser.detect(input)).toBe(false)
    })
  })

  describe('parse', () => {
    it('should correctly parse SCSS variables in non-minified format', () => {
      const input = `
        $primary-color: #ff5733;
        $secondary-color: #00aaff;
      `
      const result = parser.parse(input)
      expect(result).toEqual({
        'primary-color': '#ff5733',
        'secondary-color': '#00aaff',
      })
    })

    it('should correctly parse SCSS variables in minified format', () => {
      const input = `$primary-color:#ff5733;$secondary-color:#00aaff;`
      const result = parser.parse(input)
      expect(result).toEqual({
        'primary-color': '#ff5733',
        'secondary-color': '#00aaff',
      })
    })

    it('should return an empty object if there are no SCSS variables', () => {
      const input = `body { color: #ff5733; }`
      const result = parser.parse(input)
      expect(result).toEqual({})
    })
  })
})
