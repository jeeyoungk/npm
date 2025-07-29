import { describe, it, expect } from 'vitest'
import { createTemporalTestHello } from './testing-helpers'

describe('createTemporalTestHello', () => {
  it('should return hello message', () => {
    const result = createTemporalTestHello()
    expect(result).toBe('Hello from Temporal Testing Library!')
  })
})
