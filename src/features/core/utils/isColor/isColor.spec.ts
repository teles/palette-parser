import { isColor } from '@/features/core/utils/isColor/isColor'
import { describe, expect, it } from 'vitest'

describe('isColor', () => {
  describe('HEX color validation', () => {
    it('should return true for valid HEX color', () => {
      expect(isColor('#3498db')).toBe(true)
      expect(isColor('#abc')).toBe(true)
    })

    it('should return false for invalid HEX color', () => {
      expect(isColor('#12345')).toBe(false)
      expect(isColor('3498db')).toBe(false)
    })
  })

  describe('RGB color validation', () => {
    it('should return true for valid RGB color', () => {
      expect(isColor('rgb(255, 255, 255)')).toBe(true)
      expect(isColor('rgb(0,0,0)')).toBe(true)
    })

    it('should return false for invalid RGB color', () => {
      expect(isColor('rgb(255, 255)')).toBe(false)
      expect(isColor('rgb(255, 255, 255, 1)')).toBe(false)
    })
  })

  describe('RGBA color validation', () => {
    it('should return true for valid RGBA color', () => {
      expect(isColor('rgba(255, 255, 255, 0.5)')).toBe(true)
      expect(isColor('rgba(0, 0, 0, 1)')).toBe(true)
    })

    it('should return false for invalid RGBA color', () => {
      expect(isColor('rgba(255, 255, 255)')).toBe(false)
      expect(isColor('rgba(255, 255, 255, 2)')).toBe(false)
    })
  })

  describe('HSL color validation', () => {
    it('should return true for valid HSL color', () => {
      expect(isColor('hsl(120, 100%, 50%)')).toBe(true)
      expect(isColor('hsl(0, 0%, 0%)')).toBe(true)
    })

    it('should return false for invalid HSL color', () => {
      expect(isColor('hsl(120, 100, 50)')).toBe(false)
      expect(isColor('hsl(120, 100%, 50)')).toBe(false)
    })
  })

  describe('HSLA color validation', () => {
    it('should return true for valid HSLA color', () => {
      expect(isColor('hsla(120, 100%, 50%, 0.5)')).toBe(true)
      expect(isColor('hsla(0, 0%, 0%, 1)')).toBe(true)
    })

    it('should return false for invalid HSLA color', () => {
      expect(isColor('hsla(120, 100%, 50%)')).toBe(false)
      expect(isColor('hsla(120, 100%, 50%, 2)')).toBe(false)
    })
  })

  describe('CSS color names validation', () => {
    it('should return true for valid CSS color names', () => {
      expect(isColor('red')).toBe(true)
      expect(isColor('blue')).toBe(true)
      expect(isColor('whitesmoke')).toBe(true)
    })

    it('should return false for invalid CSS color names', () => {
      expect(isColor('notacolor')).toBe(false)
      expect(isColor('blueish')).toBe(false)
    })
  })

  describe('Invalid color formats', () => {
    it('should return false for invalid color formats', () => {
      expect(isColor('255,255,255')).toBe(false)
      expect(isColor('rgb255, 255, 255')).toBe(false)
      expect(isColor('#GGGGGG')).toBe(false)
    })
  })
})
