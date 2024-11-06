type EnvironmentKeys = 'USE_MOCK' | 'GTM_ID'
type AllowedModes = 'development' | 'production' | 'test'

const envMapping: Record<EnvironmentKeys, string> = {
  USE_MOCK: 'VITE_USE_MOCK',
  GTM_ID: 'VITE_GTM_ID',
}

export class Env {
  private static parseBoolean(value: string | undefined): boolean {
    return value === 'true' || value === '1'
  }

  static useMock(): boolean {
    if (Env.mode() === 'production') {
      return false
    }
    const value = import.meta.env[envMapping.USE_MOCK]
    return Env.parseBoolean(value)
  }

  static gtmId(): string {
    return import.meta.env[envMapping.GTM_ID] || ''
  }

  static mode(): AllowedModes {
    const mode = import.meta.env.MODE as AllowedModes
    if (!['development', 'production', 'test'].includes(mode)) {
      throw new Error(`Invalid mode: ${mode}`)
    }
    return mode
  }

  static isDevelopment(): boolean {
    return Env.mode() === 'development'
  }

  static publicKey(): string {
    return import.meta.env.VITE_PUBLIC_KEY || ''
  }
}
