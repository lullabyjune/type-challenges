type MyOmit<T, K> = {
  [U in Exclude<keyof T, K>]: T[U]
}
