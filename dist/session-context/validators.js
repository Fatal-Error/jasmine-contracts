import { ContractValidationError, isNullableNumber, isRecord } from '../internal/assertions.js';
import { isSessionContext } from './guards.js';
export function validateSessionContext(value) {
    const errors = [];
    if (!isSessionContext(value)) {
        errors.push('Value does not conform to the SessionContext contract.');
        return { success: false, errors };
    }
    if (value.integrations.jiraConnected && value.integrations.jiraStatus === 'missing') {
        errors.push('integrations.jiraConnected cannot be true when integrations.jiraStatus is "missing".');
    }
    if (!value.integrations.jiraConnected && value.integrations.jiraStatus === 'connected') {
        errors.push('integrations.jiraConnected cannot be false when integrations.jiraStatus is "connected".');
    }
    if (value.tenantState.isFullyOperational && value.tenantState.blockers.length > 0) {
        errors.push('tenantState.isFullyOperational cannot be true when blockers are present.');
    }
    if (!isRecord(value.entitlements.limits)) {
        errors.push('entitlements.limits must be a record.');
    }
    else {
        for (const [limitCode, limitValue] of Object.entries(value.entitlements.limits)) {
            if (!isNullableNumber(limitValue)) {
                errors.push(`entitlements.limits.${limitCode} must be a finite number or null.`);
            }
        }
    }
    return errors.length === 0 ? { success: true, data: value } : { success: false, errors };
}
export function assertSessionContext(value) {
    const result = validateSessionContext(value);
    if (!result.success) {
        throw new ContractValidationError('Invalid SessionContext', result.errors);
    }
}
export function parseSessionContext(value) {
    assertSessionContext(value);
    return value;
}
//# sourceMappingURL=validators.js.map