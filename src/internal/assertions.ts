export class ContractValidationError extends Error {
  public readonly details: readonly string[]

  public constructor(message: string, details: readonly string[] = []) {
    super(message)
    this.name = 'ContractValidationError'
    this.details = details
  }
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isNullableString(value: unknown): value is string | null {
  return typeof value === 'string' || value === null
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

export function isNullableNumber(value: unknown): value is number | null {
  return (typeof value === 'number' && Number.isFinite(value)) || value === null
}

export function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString)
}
