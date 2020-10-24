type TupleToUnion<T extends any[]> = T[number]

// type Tuple = [123, '456', true]

// type PickFirst<T extends any[]> = T extends [infer U, ...any[]] ? U : never
// type PickRest<T extends any[]> = T extends [any, ...infer U] ? U : never

// type UnionTuple<T = unknown> = T extends any[] ? PickRest<T> extends any[] ? PickFirst<T> | [UnionTuple<PickRest<T>>] : PickFirst<T> : never

// type Test = UnionTuple<Tuple>

// type ValueOrArray<T> = T extends any[] ? T | Array<ValueOrArray<T>> : never
