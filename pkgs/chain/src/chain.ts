// Example chain utility function
export function chain<T>(value: T): {
  value: T
  map<U>(fn: (value: T) => U): ReturnType<typeof chain<U>>
  filter(predicate: (value: T) => boolean): ReturnType<typeof chain<T | null>>
  get(): T
} {
  return {
    value,
    map<U>(fn: (value: T) => U) {
      return chain(fn(value))
    },
    filter(predicate: (value: T) => boolean) {
      return predicate(value) ? this : chain(null as T | null)
    },
    get() {
      return value
    },
  }
}
