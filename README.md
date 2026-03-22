# @jasmine/contracts

Shared runtime contract for Jasmine Workspace and Jasmine Control Plane.

This package contains only:
- shared TypeScript types
- stable feature, role and limit codes
- pure helpers such as `hasFeature`, `getLimit`, and `hasRole`
- manual runtime validators for the `SessionContext` boundary

This package intentionally contains **no**:
- HTTP clients
- fetch logic
- Supabase dependencies
- Jira API calls
- entitlement resolution logic
- bootstrap services
- business or provisioning logic

## Install

```bash
npm install @jasmine/contracts
```

## Build

```bash
npm run build
```

## Test

```bash
npm run test
```
