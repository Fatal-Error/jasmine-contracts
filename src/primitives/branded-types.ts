export type Brand<TValue, TBrand extends string> = TValue & { readonly __brand: TBrand }

export type UserId = string
export type OrganizationId = string
export type MembershipId = string
export type JiraConnectionId = string
export type FeatureCode = string
export type LimitCode = string
export type TenantBlockerCode = string
export type TenantNoticeCode = string
