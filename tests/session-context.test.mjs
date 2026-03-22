import test from 'node:test'
import assert from 'node:assert/strict'

import {
  FEATURE_CODES,
  LIMIT_CODES,
  parseSessionContext,
  validateSessionContext
} from '../dist/index.js'

const validContext = {
  user: {
    id: 'user_1',
    email: 'adriano@example.com',
    fullName: 'Adriano',
    avatarUrl: null
  },
  organization: {
    id: 'org_1',
    name: 'Jasmine Labs',
    slug: 'jasmine-labs',
    status: 'active',
    onboardingState: 'completed'
  },
  membership: {
    id: 'mem_1',
    role: 'owner',
    status: 'active'
  },
  entitlements: {
    features: [FEATURE_CODES.sprintIntelligenceCore, FEATURE_CODES.realtimePresence],
    limits: {
      [LIMIT_CODES.orgMembersMax]: 25,
      [LIMIT_CODES.aiRequestsMonthly]: null
    },
    source: {
      planCode: 'pro',
      hasOverrides: false
    }
  },
  integrations: {
    jiraConnected: true,
    jiraConnectionId: 'jira_1',
    jiraStatus: 'connected'
  },
  tenantState: {
    isFullyOperational: true,
    blockers: [],
    notices: []
  }
}

test('validateSessionContext accepts a valid SessionContext', () => {
  const result = validateSessionContext(validContext)
  assert.equal(result.success, true)
})

test('parseSessionContext returns the parsed value for a valid SessionContext', () => {
  const parsed = parseSessionContext(validContext)
  assert.equal(parsed.organization.slug, 'jasmine-labs')
})

test('validateSessionContext rejects contradictory jira state', () => {
  const result = validateSessionContext({
    ...validContext,
    integrations: {
      jiraConnected: false,
      jiraStatus: 'connected'
    }
  })

  assert.equal(result.success, false)
  assert.match(result.errors[0], /jiraConnected cannot be false/i)
})
