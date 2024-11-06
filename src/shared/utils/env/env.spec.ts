import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Env } from '@/shared/utils/env/env'

describe('Env', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  describe('useMock', () => {
    it('should return false if mode is production, even if USE_MOCK is true', () => {
      vi.stubEnv('MODE', 'production')
      vi.stubEnv('VITE_USE_MOCK', 'true')
      expect(Env.useMock()).toBe(false)
    })

    it('should return true if USE_MOCK is true and mode is not production', () => {
      vi.stubEnv('MODE', 'development')
      vi.stubEnv('VITE_USE_MOCK', 'true')
      expect(Env.useMock()).toBe(true)
    })

    it('should return false if USE_MOCK is false and mode is not production', () => {
      vi.stubEnv('MODE', 'development')
      vi.stubEnv('VITE_USE_MOCK', 'false')
      expect(Env.useMock()).toBe(false)
    })
  })

  describe('gtmId', () => {
    it('should return the GTM ID', () => {
      vi.stubEnv('VITE_GTM_ID', 'GTM-XXXXXX')
      expect(Env.gtmId()).toBe('GTM-XXXXXX')
    })

    it('should return an empty string if GTM ID is not defined', () => {
      vi.stubEnv('VITE_GTM_ID', undefined)
      expect(Env.gtmId()).toBe('')
    })
  })

  describe('mode', () => {
    it('should return the current mode if it is a valid mode', () => {
      vi.stubEnv('MODE', 'development')
      expect(Env.mode()).toBe('development')
    })

    it('should throw an error if the mode is invalid', () => {
      vi.stubEnv('MODE', 'invalidMode')
      expect(() => Env.mode()).toThrowError('Invalid mode: invalidMode')
    })
  })
})
