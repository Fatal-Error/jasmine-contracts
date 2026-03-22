import type { TenantBlockerCode, TenantNoticeCode } from '../primitives/branded-types.js'

export type TenantState = {
  isFullyOperational: boolean
  blockers: TenantBlockerCode[]
  notices: TenantNoticeCode[]
}

export const TENANT_BLOCKER_CODES = {
  organizationSuspended: 'organization.suspended',
  organizationPending: 'organization.pending',
  membershipSuspended: 'membership.suspended',
  jiraMissing: 'jira.missing',
  jiraError: 'jira.error',
  onboardingIncomplete: 'onboarding.incomplete',
  serviceRestricted: 'service.restricted'
} as const satisfies Record<string, TenantBlockerCode>

export const TENANT_NOTICE_CODES = {
  jiraDegraded: 'jira.degraded',
  onboardingRecommended: 'onboarding.recommended',
  subscriptionWarning: 'subscription.warning',
  featureLimited: 'feature.limited'
} as const satisfies Record<string, TenantNoticeCode>

export type TenantBlockerCodeValue = (typeof TENANT_BLOCKER_CODES)[keyof typeof TENANT_BLOCKER_CODES]
export type TenantNoticeCodeValue = (typeof TENANT_NOTICE_CODES)[keyof typeof TENANT_NOTICE_CODES]
