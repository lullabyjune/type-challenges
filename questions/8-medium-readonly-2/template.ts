type Combine<T> = {
  [K in keyof T]: T[K]
}

type MyReadonly2<T, K extends keyof T = keyof T> = Combine<T & {
  readonly [U in K]: T[U];
}>
