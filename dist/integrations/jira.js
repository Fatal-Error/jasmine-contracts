export const JIRA_CONNECTION_STATUSES = {
    connected: 'connected',
    degraded: 'degraded',
    missing: 'missing',
    error: 'error'
};
export function isJiraConnectionStatus(value) {
    return typeof value === 'string' && Object.values(JIRA_CONNECTION_STATUSES).includes(value);
}
//# sourceMappingURL=jira.js.map