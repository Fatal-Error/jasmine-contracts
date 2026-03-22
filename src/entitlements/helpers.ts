import type { MembershipRole } from './role-codes.js'
import type { SessionContext, SessionEntitlements } from '../session-context/types.js'

export function hasFeature<TFeatureCode extends string>(
  source: Pick<SessionContext<TFeatureCode>, 'entitlements'> | SessionEntitlements<TFeatureCode>,
  featureCode: TFeatureCode | string
): boolean {
  const entitlements = 'entitlements' in source ? source.entitlements : source
  return entitlements.features.includes(featureCode as TFeatureCode)
}

export function getLimit<TFeatureCode extends string, TLimitCode extends string>(
  source: Pick<SessionContext<TFeatureCode, TLimitCode>, 'entitlements'> | SessionEntitlements<TFeatureCode, TLimitCode>,
  limitCode: TLimitCode | string
): number | null | undefined {
  const entitlements = 'entitlements' in source ? source.entitlements : source
  return entitlements.limits[limitCode]
}

export function isUnlimitedLimit<TFeatureCode extends string, TLimitCode extends string>(
  source: Pick<SessionContext<TFeatureCode, TLimitCode>, 'entitlements'> | SessionEntitlements<TFeatureCode, TLimitCode>,
  limitCode: TLimitCode | string
): boolean {
  return getLimit(source, limitCode) === null
}

export function hasRole(
  source: Pick<SessionContext, 'membership'> | { role: MembershipRole },
  role: MembershipRole
): boolean {
  const membership = 'membership' in source ? source.membership : source
  return membership.role === role
}

const ROLE_WEIGHTS: Record<MembershipRole, number> = {
  member: 10,
  admin: 20,
  owner: 30
}

export function hasRoleAtLeast(
  source: Pick<SessionContext, 'membership'> | { role: MembershipRole },
  minimumRole: MembershipRole
): boolean {
  const membership = 'membership' in source ? source.membership : source
  return ROLE_WEIGHTS[membership.role] >= ROLE_WEIGHTS[minimumRole]
}

export function listFeatures<TFeatureCode extends string>(
  source: Pick<SessionContext<TFeatureCode>, 'entitlements'> | SessionEntitlements<TFeatureCode>
): readonly TFeatureCode[] {
  const entitlements = 'entitlements' in source ? source.entitlements : source
  return [...entitlements.features]
}
