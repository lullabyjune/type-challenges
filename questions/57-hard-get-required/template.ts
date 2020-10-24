//  never | undefined === undefined
//  so optional value convert to undefined here, but required is never;
type MapToNever<T> = {
  [P in keyof T]: never
}

//  if value is  extends never here, refer to origin value is required,
//  if not, origin value is optional.
type PickNever<T> = {
  [P in keyof T]-?: T[P] extends never ? P : never
}[keyof T]

type GetRequired<T> = {[P in PickNever<MapToNever<T>>]: T[P]}

// type TDict = { foo: number; bar?: string }

// type A = MapToNever<TDict>

// type TB = never | undefined
