import type { TenantBlockerCode, TenantNoticeCode } from '../primitives/branded-types.js';
export type TenantState = {
    isFullyOperational: boolean;
    blockers: TenantBlockerCode[];
    notices: TenantNoticeCode[];
};
export declare const TENANT_BLOCKER_CODES: {
    readonly organizationSuspended: "organization.suspended";
    readonly organizationPending: "organization.pending";
    readonly membershipSuspended: "membership.suspended";
    readonly jiraMissing: "jira.missing";
    readonly jiraError: "jira.error";
    readonly onboardingIncomplete: "onboarding.incomplete";
    readonly serviceRestricted: "service.restricted";
};
export declare const TENANT_NOTICE_CODES: {
    readonly jiraDegraded: "jira.degraded";
    readonly onboardingRecommended: "onboarding.recommended";
    readonly subscriptionWarning: "subscription.warning";
    readonly featureLimited: "feature.limited";
};
export type TenantBlockerCodeValue = (typeof TENANT_BLOCKER_CODES)[keyof typeof TENANT_BLOCKER_CODES];
export type TenantNoticeCodeValue = (typeof TENANT_NOTICE_CODES)[keyof typeof TENANT_NOTICE_CODES];
//# sourceMappingURL=tenant-state.d.ts.map