// type GetReadonlyKeys<T extends object> = {
//   [K in keyof T]:
//   (<S>() => S extends { [Z in K]: T[Z] } ? 2 : 1) extends
//   (<S>() => S extends {-readonly [Z in K]: T[Z]} ? 2 : 1) ? never : K
// }[keyof T]

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

// type Equal<X,Y> = 

type GetReadonlyKeys<
  T,
  U extends Readonly<T> = Readonly<T>,
  K extends keyof T = keyof T
> = K extends keyof T ? Equal<Pick<T, K>, Pick<U, K>> extends true ? K : never : never

type Test<X> = <T>() => T extends X ? 1 : 2
const a: Test<Pick<{a: 1}, 'a'>> = 1
