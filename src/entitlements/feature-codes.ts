import type { FeatureCode } from '../primitives/branded-types.js'

export const FEATURE_CODES = {
  sprintPlanningBasic: 'sprint.planning.basic',
  sprintPlanningAdvanced: 'sprint.planning.advanced',
  sprintIntelligenceCore: 'sprint.intelligence.core',
  sprintIntelligenceAdvanced: 'sprint.intelligence.advanced',
  dashboardMultiTeam: 'dashboard.multi_team',
  reportsBasic: 'reports.basic',
  reportsExport: 'reports.export',
  aiStandupGenerator: 'ai.standup.generator',
  aiSprintAdvisor: 'ai.sprint.advisor',
  realtimePresence: 'realtime.presence',
  realtimeChat: 'realtime.chat',
  notificationsPush: 'notifications.push',
  jiraIntegrationBasic: 'jira.integration.basic',
  jiraIntegrationMultiWorkspace: 'jira.integration.multi_workspace',
  orgMembersInvite: 'org.members.invite',
  orgMembersRolesAdvanced: 'org.members.roles.advanced',
  brandingCustom: 'branding.custom'
} as const satisfies Record<string, FeatureCode>

export const ALL_FEATURE_CODES = Object.freeze(Object.values(FEATURE_CODES))

export type FeatureCodeValue = (typeof ALL_FEATURE_CODES)[number]

export function isFeatureCode(value: unknown): value is FeatureCodeValue {
  return typeof value === 'string' && ALL_FEATURE_CODES.includes(value as FeatureCodeValue)
}
