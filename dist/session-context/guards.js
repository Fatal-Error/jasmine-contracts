import { ALL_LIMIT_CODES, isLimitCode } from '../entitlements/limit-codes.js';
import { isMembershipRole } from '../entitlements/role-codes.js';
import { isJiraConnectionStatus } from '../integrations/jira.js';
import { isBoolean, isNonEmptyString, isNullableNumber, isNullableString, isRecord, isString, isStringArray } from '../internal/assertions.js';
import { MEMBERSHIP_STATUSES, ORGANIZATION_STATUSES } from './types.js';
export function isOrganizationStatus(value) {
    return typeof value === 'string' && Object.values(ORGANIZATION_STATUSES).includes(value);
}
export function isMembershipStatus(value) {
    return typeof value === 'string' && Object.values(MEMBERSHIP_STATUSES).includes(value);
}
export function isSessionContext(value) {
    if (!isRecord(value))
        return false;
    if (!isRecord(value.user) || !isRecord(value.organization) || !isRecord(value.membership))
        return false;
    if (!isRecord(value.entitlements) || !isRecord(value.integrations) || !isRecord(value.tenantState))
        return false;
    const { user, organization, membership, entitlements, integrations, tenantState } = value;
    if (!isNonEmptyString(user.id) || !isNonEmptyString(user.email) || !isNullableString(user.fullName))
        return false;
    if (user.avatarUrl !== undefined && !isNullableString(user.avatarUrl))
        return false;
    if (!isNonEmptyString(organization.id) ||
        !isNonEmptyString(organization.name) ||
        !isNonEmptyString(organization.slug) ||
        !isOrganizationStatus(organization.status)) {
        return false;
    }
    if (organization.onboardingState !== undefined && !isNullableString(organization.onboardingState))
        return false;
    if (!isNonEmptyString(membership.id) ||
        !isMembershipRole(membership.role) ||
        !isMembershipStatus(membership.status)) {
        return false;
    }
    if (!isStringArray(entitlements.features))
        return false;
    if (!isRecord(entitlements.limits) || !isRecord(entitlements.source))
        return false;
    for (const [key, limitValue] of Object.entries(entitlements.limits)) {
        if (!isString(key) || !isNullableNumber(limitValue))
            return false;
    }
    if (entitlements.source.planCode !== undefined && !isNullableString(entitlements.source.planCode))
        return false;
    if (!isBoolean(entitlements.source.hasOverrides))
        return false;
    if (!isBoolean(integrations.jiraConnected))
        return false;
    if (integrations.jiraConnectionId !== undefined && !isNonEmptyString(integrations.jiraConnectionId))
        return false;
    if (integrations.jiraStatus !== undefined && !isJiraConnectionStatus(integrations.jiraStatus))
        return false;
    if (!isBoolean(tenantState.isFullyOperational))
        return false;
    if (!isStringArray(tenantState.blockers) || !isStringArray(tenantState.notices))
        return false;
    return true;
}
export function hasKnownLimitShape(context) {
    return ALL_LIMIT_CODES.every((limitCode) => {
        const value = context.entitlements.limits[limitCode];
        return value === undefined || isNullableNumber(value);
    });
}
export function hasOnlyStringLimitKeys(context) {
    return Object.keys(context.entitlements.limits).every((key) => typeof key === 'string' && (isLimitCode(key) || key.length > 0));
}
//# sourceMappingURL=guards.js.map