type MyReadonly<T extends any> = {
  readonly [U in keyof T]: T[U]
}
