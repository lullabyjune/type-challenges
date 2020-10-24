type Curry<T extends (...args: any[]) => any> = T extends (arg?: any) => any
  ? T
  : T extends (first: infer P, ...args: infer U) => infer R
    ? (first: P) => Curry<(...args: U) => R>
    : never

declare function Currying<T extends (...args: any[]) => any>(fn: T): Curry<T>
