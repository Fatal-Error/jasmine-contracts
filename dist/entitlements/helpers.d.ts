import type { MembershipRole } from './role-codes.js';
import type { SessionContext, SessionEntitlements } from '../session-context/types.js';
export declare function hasFeature<TFeatureCode extends string>(source: Pick<SessionContext<TFeatureCode>, 'entitlements'> | SessionEntitlements<TFeatureCode>, featureCode: TFeatureCode | string): boolean;
export declare function getLimit<TFeatureCode extends string, TLimitCode extends string>(source: Pick<SessionContext<TFeatureCode, TLimitCode>, 'entitlements'> | SessionEntitlements<TFeatureCode, TLimitCode>, limitCode: TLimitCode | string): number | null | undefined;
export declare function isUnlimitedLimit<TFeatureCode extends string, TLimitCode extends string>(source: Pick<SessionContext<TFeatureCode, TLimitCode>, 'entitlements'> | SessionEntitlements<TFeatureCode, TLimitCode>, limitCode: TLimitCode | string): boolean;
export declare function hasRole(source: Pick<SessionContext, 'membership'> | {
    role: MembershipRole;
}, role: MembershipRole): boolean;
export declare function hasRoleAtLeast(source: Pick<SessionContext, 'membership'> | {
    role: MembershipRole;
}, minimumRole: MembershipRole): boolean;
export declare function listFeatures<TFeatureCode extends string>(source: Pick<SessionContext<TFeatureCode>, 'entitlements'> | SessionEntitlements<TFeatureCode>): readonly TFeatureCode[];
//# sourceMappingURL=helpers.d.ts.map