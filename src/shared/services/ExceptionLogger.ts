type LogLevel = 'info' | 'warn' | 'error'

export interface Logger {
  logException(level: LogLevel, message: string, error?: Error): void
}

export class ConsoleLogger implements Logger {
  logException(level: LogLevel, message: string, error?: Error): void {
    switch (level) {
      case 'info':
        console.log(`[INFO] ${message}`)
        break
      case 'warn':
        console.warn(`[WARN] ${message}`)
        break
      case 'error':
        if (error) {
          console.error(`[ERROR] ${message}:`, error)
        } else {
          console.error(`[ERROR] ${message}`)
        }
        break
      default:
        console.log(`[LOG] ${message}`)
    }
  }
}

/**
 * Classe Singleton para registrar exceções.
 *
 * @class ExceptionLogger
 *
 * @example
 * ```typescript
 * const logger = new Logger();
 * ExceptionLogger.initialize(logger);
 * const exceptionLogger = ExceptionLogger.getInstance();
 * exceptionLogger.log('error', 'Ocorreu um erro', new Error('Erro de exemplo'));
 * ```
 */
export class ExceptionLogger {
  private static instance: ExceptionLogger
  private logger: Logger

  private constructor(logger: Logger) {
    this.logger = logger
  }

  public static initialize(logger: Logger): void {
    if (!ExceptionLogger.instance) {
      ExceptionLogger.instance = new ExceptionLogger(logger)
    }
  }

  public static getInstance(): ExceptionLogger {
    if (!ExceptionLogger.instance) {
      throw new Error('ExceptionLogger is not initialized. Call initialize() first.')
    }
    return ExceptionLogger.instance
  }

  public log(level: LogLevel, message: string, error?: Error): void {
    if (level === 'error' && error) {
      this.logger.logException(level, message, error)
    } else {
      this.logger.logException(level, message)
    }
  }
}
