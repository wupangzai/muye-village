/** 提供一些可能用得到的类型工具 */

// 接收一个泛型 T，返回一个只具有该泛型的可选属性的类型
export type getPartial<T> = {
    [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
};

// 接收一个泛型 T，返回一个只具有该泛型的必选属性的类型
export type getRequired<T> = {
    [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};

/**
 * 接收一个泛型 T
 * 接收一个 类型枚举 K
 * 返回一个将 类型 T 中的 指定属性 K 变成可选属性的类型
 */
export type requiredToOptional<T, K extends keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>;

// Test 测试类型
// interface Test {
//     a: string;
//     b: number;
//     c?: string;
// }

// const a: getRequired<Test> = {
//     a: '1',
//     b: 2,
// };
