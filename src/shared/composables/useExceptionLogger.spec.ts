import { describe, it, expect, vi } from 'vitest'
import { inject } from 'vue'
import { useExceptionLogger } from '@/shared/composables/useExceptionLogger'
import { ExceptionLogger } from '@/shared/services/ExceptionLogger'

// Simula a função inject do Vue
vi.mock('vue', () => ({
  inject: vi.fn(),
}))

describe('useExceptionLogger', () => {
  it('should return the injected ExceptionLogger', () => {
    // Mocka o ExceptionLogger
    const mockExceptionLogger = { log: vi.fn() } as unknown as ExceptionLogger

    // Simula o comportamento da injeção
    ;(inject as ReturnType<typeof vi.fn>).mockReturnValue(mockExceptionLogger)

    const logger = useExceptionLogger()

    expect(logger).toBe(mockExceptionLogger) // Verifica se o logger injetado foi retornado corretamente
  })

  it('should throw an error if ExceptionLogger is not provided', () => {
    // Simula o comportamento de injeção sem o ExceptionLogger
    ;(inject as ReturnType<typeof vi.fn>).mockReturnValue(null)

    expect(() => useExceptionLogger()).toThrowError(
      'ExceptionLogger not provided'
    ) // Verifica se o erro é lançado corretamente
  })
})
