import type { JiraConnectionId } from '../primitives/branded-types.js';
export declare const JIRA_CONNECTION_STATUSES: {
    readonly connected: "connected";
    readonly degraded: "degraded";
    readonly missing: "missing";
    readonly error: "error";
};
export type JiraConnectionStatus = (typeof JIRA_CONNECTION_STATUSES)[keyof typeof JIRA_CONNECTION_STATUSES];
export type JiraIntegrationState = {
    jiraConnected: boolean;
    jiraConnectionId?: JiraConnectionId;
    jiraStatus?: JiraConnectionStatus;
};
export declare function isJiraConnectionStatus(value: unknown): value is JiraConnectionStatus;
//# sourceMappingURL=jira.d.ts.map