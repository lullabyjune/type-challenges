type TupleToObject<T extends readonly any[]> = {
  [U in T[number]]: U
}
