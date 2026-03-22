export declare class ContractValidationError extends Error {
    readonly details: readonly string[];
    constructor(message: string, details?: readonly string[]);
}
export declare function isRecord(value: unknown): value is Record<string, unknown>;
export declare function isNonEmptyString(value: unknown): value is string;
export declare function isString(value: unknown): value is string;
export declare function isNullableString(value: unknown): value is string | null;
export declare function isBoolean(value: unknown): value is boolean;
export declare function isNullableNumber(value: unknown): value is number | null;
export declare function isStringArray(value: unknown): value is string[];
//# sourceMappingURL=assertions.d.ts.map