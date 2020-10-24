// 有多余的未使用变量。 不优雅=。=
// type Last<T extends any[]> = T extends [...infer U, infer Y] ? Y : never

// type Last<T extends any[]> = ((...args: T) => any) extends ((first: infer F, ...rest: infer U) => any) ? U['length'] extends 0 ? F : Last<U> : never

// = =强行加一个元素然后取最后一个可nmd太秀了。。。https://github.com/type-challenges/type-challenges/issues/100
type Last<T extends any[]> = [any, ...T][T['length']]
