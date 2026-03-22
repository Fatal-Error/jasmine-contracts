export const FEATURE_CODES = {
    sprintPlanningBasic: 'sprint.planning.basic',
    sprintPlanningAdvanced: 'sprint.planning.advanced',
    sprintIntelligenceCore: 'sprint.intelligence.core',
    sprintIntelligenceAdvanced: 'sprint.intelligence.advanced',
    backlogRefinement: "backlog.refinement",
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
};
export const ALL_FEATURE_CODES = Object.freeze(Object.values(FEATURE_CODES));
export function isFeatureCode(value) {
    return typeof value === 'string' && ALL_FEATURE_CODES.includes(value);
}
//# sourceMappingURL=feature-codes.js.map