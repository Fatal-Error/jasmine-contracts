export const ROLE_CODES = {
  owner: 'owner',
  admin: 'admin',
  member: 'member'
} as const

export const ALL_ROLE_CODES = Object.freeze(Object.values(ROLE_CODES))

export type MembershipRole = (typeof ALL_ROLE_CODES)[number]

export function isMembershipRole(value: unknown): value is MembershipRole {
  return typeof value === 'string' && ALL_ROLE_CODES.includes(value as MembershipRole)
}
