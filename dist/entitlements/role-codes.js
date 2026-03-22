export const ROLE_CODES = {
    owner: 'owner',
    admin: 'admin',
    member: 'member'
};
export const ALL_ROLE_CODES = Object.freeze(Object.values(ROLE_CODES));
export function isMembershipRole(value) {
    return typeof value === 'string' && ALL_ROLE_CODES.includes(value);
}
//# sourceMappingURL=role-codes.js.map