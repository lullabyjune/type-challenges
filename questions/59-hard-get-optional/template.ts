type TMapToNever<T> = {
  [K in keyof T]: never
}

type TPickNotNever<T> = {
  [K in keyof T]-?: T[K] extends never ? never : K
}[keyof T]

type GetOptional<T> = {
  [K in TPickNotNever<TMapToNever<T>>]?: T[K]
}

// type TA = { foo: number; bar?: string }

// type TB = TMapToNever<TA>

// type TC = GetOptional<TA>

// type TD = Required<TA['bar']>
