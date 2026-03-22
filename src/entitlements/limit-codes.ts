import type { LimitCode } from '../primitives/branded-types.js'

export const LIMIT_CODES = {
  orgMembersMax: 'org.members.max',
  jiraConnectionsMax: 'jira.connections.max',
  sprintSnapshotsRetentionDays: 'sprint.snapshots.retention.days',
  aiRequestsMonthly: 'ai.requests.monthly',
  reportsExportsMonthly: 'reports.exports.monthly',
  teamsMax: 'teams.max',
  chatHistoryRetentionDays: 'chat.history.retention.days'
} as const satisfies Record<string, LimitCode>

export const ALL_LIMIT_CODES = Object.freeze(Object.values(LIMIT_CODES))

export type LimitCodeValue = (typeof ALL_LIMIT_CODES)[number]

export function isLimitCode(value: unknown): value is LimitCodeValue {
  return typeof value === 'string' && ALL_LIMIT_CODES.includes(value as LimitCodeValue)
}
