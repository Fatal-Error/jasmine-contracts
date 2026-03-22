export declare const ROLE_CODES: {
    readonly owner: "owner";
    readonly admin: "admin";
    readonly member: "member";
};
export declare const ALL_ROLE_CODES: readonly ("owner" | "admin" | "member")[];
export type MembershipRole = (typeof ALL_ROLE_CODES)[number];
export declare function isMembershipRole(value: unknown): value is MembershipRole;
//# sourceMappingURL=role-codes.d.ts.map