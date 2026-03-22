import type { LimitCodeValue } from '../entitlements/limit-codes.js';
import type { MembershipRole } from '../entitlements/role-codes.js';
import type { JiraIntegrationState } from '../integrations/jira.js';
import type { MembershipId, OrganizationId, UserId } from '../primitives/branded-types.js';
import type { TenantState } from '../tenant/tenant-state.js';
export declare const ORGANIZATION_STATUSES: {
    readonly active: "active";
    readonly suspended: "suspended";
    readonly pending: "pending";
};
export declare const MEMBERSHIP_STATUSES: {
    readonly active: "active";
    readonly pending: "pending";
    readonly invited: "invited";
    readonly suspended: "suspended";
};
export type OrganizationStatus = (typeof ORGANIZATION_STATUSES)[keyof typeof ORGANIZATION_STATUSES];
export type MembershipStatus = (typeof MEMBERSHIP_STATUSES)[keyof typeof MEMBERSHIP_STATUSES];
export type SessionUser = {
    id: UserId;
    email: string;
    fullName: string | null;
    avatarUrl?: string | null;
};
export type SessionOrganization = {
    id: OrganizationId;
    name: string;
    slug: string;
    status: OrganizationStatus;
    onboardingState?: string | null;
};
export type SessionMembership = {
    id: MembershipId;
    role: MembershipRole;
    status: MembershipStatus;
};
export type EntitlementSource = {
    planCode?: string | null;
    hasOverrides: boolean;
};
export type SessionEntitlements<TFeatureCode extends string = string, TLimitCode extends string = LimitCodeValue> = {
    features: TFeatureCode[];
    limits: Partial<Record<TLimitCode, number | null>> & Record<string, number | null>;
    source: EntitlementSource;
};
export type SessionContext<TFeatureCode extends string = string, TLimitCode extends string = LimitCodeValue> = {
    user: SessionUser;
    organization: SessionOrganization;
    membership: SessionMembership;
    entitlements: SessionEntitlements<TFeatureCode, TLimitCode>;
    integrations: JiraIntegrationState;
    tenantState: TenantState;
};
//# sourceMappingURL=types.d.ts.map