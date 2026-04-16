export declare const LIMIT_CODES: {
    readonly orgMembersMax: "org.members.max";
    readonly jiraConnectionsMax: "jira.connections.max";
    readonly sprintSnapshotsRetentionDays: "sprint.snapshots.retention.days";
    readonly aiRequestsMonthly: "ai.requests.monthly";
    readonly reportsExportsMonthly: "reports.exports.monthly";
    readonly teamsMax: "teams.max";
    readonly chatArchivedReviewableMax: "chat.archived.reviewable.max";
    readonly chatHistoryRetentionDays: "chat.history.retention.days";
};
export declare const ALL_LIMIT_CODES: readonly ("org.members.max" | "jira.connections.max" | "sprint.snapshots.retention.days" | "ai.requests.monthly" | "reports.exports.monthly" | "teams.max" | "chat.archived.reviewable.max" | "chat.history.retention.days")[];
export type LimitCodeValue = (typeof ALL_LIMIT_CODES)[number];
export declare function isLimitCode(value: unknown): value is LimitCodeValue;
//# sourceMappingURL=limit-codes.d.ts.map