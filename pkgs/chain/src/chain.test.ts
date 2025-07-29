import { describe, it, expect } from 'vitest'
import { chain } from './chain'

describe('chain', () => {
  it('should create a chain with a value', () => {
    const result = chain(5)
    expect(result.get()).toBe(5)
  })

  it('should map values correctly', () => {
    const result = chain(5)
      .map(x => x * 2)
      .get()
    expect(result).toBe(10)
  })

  it('should filter values correctly', () => {
    const result = chain(5)
      .filter(x => x > 3)
      .get()
    expect(result).toBe(5)
  })
})
