export class ContractValidationError extends Error {
    details;
    constructor(message, details = []) {
        super(message);
        this.name = 'ContractValidationError';
        this.details = details;
    }
}
export function isRecord(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
export function isNonEmptyString(value) {
    return typeof value === 'string' && value.trim().length > 0;
}
export function isString(value) {
    return typeof value === 'string';
}
export function isNullableString(value) {
    return typeof value === 'string' || value === null;
}
export function isBoolean(value) {
    return typeof value === 'boolean';
}
export function isNullableNumber(value) {
    return (typeof value === 'number' && Number.isFinite(value)) || value === null;
}
export function isStringArray(value) {
    return Array.isArray(value) && value.every(isString);
}
//# sourceMappingURL=assertions.js.map