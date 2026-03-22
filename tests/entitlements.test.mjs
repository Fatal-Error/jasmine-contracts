import test from 'node:test'
import assert from 'node:assert/strict'

import {
  FEATURE_CODES,
  LIMIT_CODES,
  getLimit,
  hasFeature,
  hasRole,
  hasRoleAtLeast,
  isUnlimitedLimit,
  listFeatures
} from '../dist/index.js'

const context = {
  membership: {
    role: 'admin'
  },
  entitlements: {
    features: [FEATURE_CODES.sprintPlanningBasic, FEATURE_CODES.dashboardMultiTeam],
    limits: {
      [LIMIT_CODES.orgMembersMax]: 10,
      [LIMIT_CODES.aiRequestsMonthly]: null
    },
    source: {
      planCode: 'starter',
      hasOverrides: true
    }
  }
}

test('hasFeature detects enabled features', () => {
  assert.equal(hasFeature(context, FEATURE_CODES.dashboardMultiTeam), true)
  assert.equal(hasFeature(context, FEATURE_CODES.aiSprintAdvisor), false)
})

test('getLimit and isUnlimitedLimit behave consistently', () => {
  assert.equal(getLimit(context, LIMIT_CODES.orgMembersMax), 10)
  assert.equal(isUnlimitedLimit(context, LIMIT_CODES.aiRequestsMonthly), true)
})

test('hasRole and hasRoleAtLeast handle role checks', () => {
  assert.equal(hasRole(context, 'admin'), true)
  assert.equal(hasRoleAtLeast(context, 'member'), true)
  assert.equal(hasRoleAtLeast(context, 'owner'), false)
})

test('listFeatures returns a copy of the active features', () => {
  const features = listFeatures(context)
  assert.deepEqual(features, [FEATURE_CODES.sprintPlanningBasic, FEATURE_CODES.dashboardMultiTeam])
  assert.notEqual(features, context.entitlements.features)
})
