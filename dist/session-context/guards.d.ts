import { type MembershipStatus, type OrganizationStatus, type SessionContext } from './types.js';
export declare function isOrganizationStatus(value: unknown): value is OrganizationStatus;
export declare function isMembershipStatus(value: unknown): value is MembershipStatus;
export declare function isSessionContext(value: unknown): value is SessionContext;
export declare function hasKnownLimitShape(context: SessionContext): boolean;
export declare function hasOnlyStringLimitKeys(context: SessionContext): boolean;
//# sourceMappingURL=guards.d.ts.map