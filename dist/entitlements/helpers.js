export function hasFeature(source, featureCode) {
    const entitlements = 'entitlements' in source ? source.entitlements : source;
    return entitlements.features.includes(featureCode);
}
export function getLimit(source, limitCode) {
    const entitlements = 'entitlements' in source ? source.entitlements : source;
    return entitlements.limits[limitCode];
}
export function isUnlimitedLimit(source, limitCode) {
    return getLimit(source, limitCode) === null;
}
export function hasRole(source, role) {
    const membership = 'membership' in source ? source.membership : source;
    return membership.role === role;
}
const ROLE_WEIGHTS = {
    member: 10,
    admin: 20,
    owner: 30
};
export function hasRoleAtLeast(source, minimumRole) {
    const membership = 'membership' in source ? source.membership : source;
    return ROLE_WEIGHTS[membership.role] >= ROLE_WEIGHTS[minimumRole];
}
export function listFeatures(source) {
    const entitlements = 'entitlements' in source ? source.entitlements : source;
    return [...entitlements.features];
}
//# sourceMappingURL=helpers.js.map