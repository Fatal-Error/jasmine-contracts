export declare const FEATURE_CODES: {
    readonly sprintPlanningBasic: "sprint.planning.basic";
    readonly sprintPlanningAdvanced: "sprint.planning.advanced";
    readonly sprintIntelligenceCore: "sprint.intelligence.core";
    readonly sprintIntelligenceAdvanced: "sprint.intelligence.advanced";
    readonly dashboardMultiTeam: "dashboard.multi_team";
    readonly reportsBasic: "reports.basic";
    readonly reportsExport: "reports.export";
    readonly aiStandupGenerator: "ai.standup.generator";
    readonly aiSprintAdvisor: "ai.sprint.advisor";
    readonly realtimePresence: "realtime.presence";
    readonly realtimeChat: "realtime.chat";
    readonly notificationsPush: "notifications.push";
    readonly jiraIntegrationBasic: "jira.integration.basic";
    readonly jiraIntegrationMultiWorkspace: "jira.integration.multi_workspace";
    readonly orgMembersInvite: "org.members.invite";
    readonly orgMembersRolesAdvanced: "org.members.roles.advanced";
    readonly brandingCustom: "branding.custom";
};
export declare const ALL_FEATURE_CODES: readonly ("sprint.planning.basic" | "sprint.planning.advanced" | "sprint.intelligence.core" | "sprint.intelligence.advanced" | "dashboard.multi_team" | "reports.basic" | "reports.export" | "ai.standup.generator" | "ai.sprint.advisor" | "realtime.presence" | "realtime.chat" | "notifications.push" | "jira.integration.basic" | "jira.integration.multi_workspace" | "org.members.invite" | "org.members.roles.advanced" | "branding.custom")[];
export type FeatureCodeValue = (typeof ALL_FEATURE_CODES)[number];
export declare function isFeatureCode(value: unknown): value is FeatureCodeValue;
//# sourceMappingURL=feature-codes.d.ts.map