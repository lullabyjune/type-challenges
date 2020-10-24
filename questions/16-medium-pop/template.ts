// 感觉考虑一下空数组要好一点
type Pop<T extends any[]> = T['length'] extends 0 ? T : T extends [...infer U, infer _] ? U : never
