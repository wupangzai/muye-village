/** 提供一些可能用得到的类型工具 */

// 接收一个泛型 T，返回一个只具有该泛型的可选属性的类型
export type getPartial<T> = {
    [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
};

// 接收一个泛型 T，返回一个只具有该泛型的必选属性的类型 TODO FIXME
export type getRequired<T> = {
    [P in keyof T]: {} extends T[P] ? never : T[P];
};

// Test 测试类型
interface Test {
    a: string;
    b: number;
    c?: string;
}

const a: getRequired<Test> = {
    a: '1',
    b: 1,
    c: '1',
};
