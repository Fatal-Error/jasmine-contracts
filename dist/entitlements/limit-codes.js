export const LIMIT_CODES = {
    orgMembersMax: 'org.members.max',
    jiraConnectionsMax: 'jira.connections.max',
    sprintSnapshotsRetentionDays: 'sprint.snapshots.retention.days',
    aiRequestsMonthly: 'ai.requests.monthly',
    reportsExportsMonthly: 'reports.exports.monthly',
    teamsMax: 'teams.max',
    chatArchivedReviewableMax: 'chat.archived.reviewable.max',
    chatHistoryRetentionDays: 'chat.history.retention.days'
};
export const ALL_LIMIT_CODES = Object.freeze(Object.values(LIMIT_CODES));
export function isLimitCode(value) {
    return typeof value === 'string' && ALL_LIMIT_CODES.includes(value);
}
//# sourceMappingURL=limit-codes.js.map