import type { JiraConnectionId } from '../primitives/branded-types.js'

export const JIRA_CONNECTION_STATUSES = {
  connected: 'connected',
  degraded: 'degraded',
  missing: 'missing',
  error: 'error'
} as const

export type JiraConnectionStatus = (typeof JIRA_CONNECTION_STATUSES)[keyof typeof JIRA_CONNECTION_STATUSES]

export type JiraIntegrationState = {
  jiraConnected: boolean
  jiraConnectionId?: JiraConnectionId
  jiraStatus?: JiraConnectionStatus
}

export function isJiraConnectionStatus(value: unknown): value is JiraConnectionStatus {
  return typeof value === 'string' && Object.values(JIRA_CONNECTION_STATUSES).includes(value as JiraConnectionStatus)
}
