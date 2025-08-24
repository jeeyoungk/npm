import { describe, it, expect, vi } from 'vitest'
import { sleep, isNotNullish, chunk, pick, omit } from '../utils'

describe('utils', () => {
  describe('sleep', () => {
    it('should resolve after specified time', async () => {
      const start = Date.now()
      await sleep(100)
      const elapsed = Date.now() - start
      expect(elapsed).toBeGreaterThanOrEqual(100)
    })
  })

  describe('isNotNullish', () => {
    it('should return false for null', () => {
      expect(isNotNullish(null)).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isNotNullish(undefined)).toBe(false)
    })

    it('should return true for values', () => {
      expect(isNotNullish(0)).toBe(true)
      expect(isNotNullish('')).toBe(true)
      expect(isNotNullish(false)).toBe(true)
      expect(isNotNullish({})).toBe(true)
    })
  })

  describe('chunk', () => {
    it('should chunk array into specified size', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
    })

    it('should handle empty array', () => {
      expect(chunk([], 2)).toEqual([])
    })
  })

  describe('pick', () => {
    it('should pick specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 })
    })
  })

  describe('omit', () => {
    it('should omit specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 })
    })
  })
})