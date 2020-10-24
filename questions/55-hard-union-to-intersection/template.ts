type UnionToIntersection<U> = (U extends unknown ? (args: U) => void : never) extends (args: infer T) => void ? T : never
