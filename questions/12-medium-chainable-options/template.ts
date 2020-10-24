type Union<T> = {[K in keyof T]: T[K]}

interface Chainable<T = {}> {
  option<K extends string, Y>(key: K extends keyof T ? never : K, value: Y): Chainable<Union<T & {[P in K]: Y}>>
  get(): T
}
