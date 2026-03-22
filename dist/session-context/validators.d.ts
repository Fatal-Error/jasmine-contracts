import type { SessionContext } from './types.js';
export type SessionContextValidationResult = {
    success: true;
    data: SessionContext;
} | {
    success: false;
    errors: readonly string[];
};
export declare function validateSessionContext(value: unknown): SessionContextValidationResult;
export declare function assertSessionContext(value: unknown): asserts value is SessionContext;
export declare function parseSessionContext(value: unknown): SessionContext;
//# sourceMappingURL=validators.d.ts.map