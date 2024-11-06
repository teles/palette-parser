import { describe, it, expect, vi, beforeEach } from 'vitest'
import PaletteParserManager from '@/features/core/parsers/PaletteParserManager/PaletteParserManager'
import { PaletteParserInterface } from '@/features/core/parsers/PaletteParser.interface'

describe('PaletteParserManager', () => {
  const mockParser1: PaletteParserInterface = {
    detect: vi.fn(),
    parse: vi.fn(),
  }

  const mockParser2: PaletteParserInterface = {
    detect: vi.fn(),
    parse: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should use the first parser that detects the input and return the parsed result', () => {
    ;(mockParser1.detect as ReturnType<typeof vi.fn>).mockReturnValue(false)
    ;(mockParser2.detect as ReturnType<typeof vi.fn>).mockReturnValue(true)
    ;(mockParser2.parse as ReturnType<typeof vi.fn>).mockReturnValue({
      'primary-color': '#ff5733',
    })

    const manager = new PaletteParserManager([mockParser1, mockParser2])

    const input = '--primary-color: #ff5733;'
    const result = manager.parse(input)

    expect(result).toEqual({ 'primary-color': '#ff5733' })
    expect(mockParser1.detect).toHaveBeenCalledWith(input)
    expect(mockParser2.detect).toHaveBeenCalledWith(input)
    expect(mockParser2.parse).toHaveBeenCalledWith(input)
  })

  it('should throw an error when no suitable parser is found', () => {
    ;(mockParser1.detect as ReturnType<typeof vi.fn>).mockReturnValue(false)
    ;(mockParser2.detect as ReturnType<typeof vi.fn>).mockReturnValue(false)

    const manager = new PaletteParserManager([mockParser1, mockParser2])

    const input = '--primary-color: #ff5733;'
    expect(() => manager.parse(input)).toThrow(
      'No suitable parser found for the input.'
    )

    expect(mockParser1.detect).toHaveBeenCalledWith(input)
    expect(mockParser2.detect).toHaveBeenCalledWith(input)
    expect(mockParser1.parse).not.toHaveBeenCalled()
    expect(mockParser2.parse).not.toHaveBeenCalled()
  })

  it('should only call detect on parsers until it finds a match', () => {
    const mockParser3: PaletteParserInterface = {
      detect: vi.fn().mockReturnValue(true),
      parse: vi.fn().mockReturnValue({ 'secondary-color': '#00aaff' }),
    }

    const manager = new PaletteParserManager([
      mockParser1,
      mockParser2,
      mockParser3,
    ])

    const input = '--secondary-color: #00aaff;'
    const result = manager.parse(input)

    expect(result).toEqual({ 'secondary-color': '#00aaff' })
    expect(mockParser1.detect).toHaveBeenCalledWith(input)
    expect(mockParser2.detect).toHaveBeenCalledWith(input)
    expect(mockParser3.detect).toHaveBeenCalledWith(input)
    expect(mockParser3.parse).toHaveBeenCalledWith(input)

    // Ensure only the first matching parser is used
    expect(mockParser1.parse).not.toHaveBeenCalled()
    expect(mockParser2.parse).not.toHaveBeenCalled()
  })
})
