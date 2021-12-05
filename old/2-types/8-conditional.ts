// T extends U ? X : Y;

// type nonUndefined<T> = T extends undefined ? never : T;
// type snbu = string | boolean | number | undefined;
// let v: nonUndefined<snbu> = undefined; //  string | boolean | number ;
// IUser & IInfo

import Func = jasmine.Func;

interface IHydrantA {
	name: string;
	type: 'A';
}

//
interface IHydrantB {
	name: string;
	type: 'B';
}

interface IHydrantC {
	name: string;
	type: 'C';
}

//
// //
type Hydrants = IHydrantA | IHydrantB | IHydrantC;
// //
// let h: Exclude<Hydrants, IHydrantB | IHydrantC> = {
// 	name: 'H1',
// 	type: 'A',
// };
//
// type cbsArr = [() => Hydrants, () => number];
// type ReturnValueType<T> = T extends (...args: unknown[]) => infer R ? R : never;
// type FirstTupleElReturnType<T> = T extends [infer Cb, ...unknown[]] ? Cb : never;
//
// const v: FirstTupleElReturnType<cbsArr> = true;
type fn = (a: string, c: boolean, b: IHydrantB, cb: () => void) => IHydrantA; // number | boolean | IHydrantA

// type FnParamsAndReturnType<T extends Function> = T extends (...args: [infer A, infer B]) => infer R
// 	? A | B | R
// 	: never;

// type OnlyNumKeys<T> = T extends number ? T : never;
//
// type FnParamsAndReturnType<T extends Function> = T extends (...args: infer Args) => infer R
// 	? Args[OnlyNumKeys<keyof Args>] | R
// 	: never;
//
// let v: FnParamsAndReturnType<fn> = 1;
//
// type TrimLeft<T extends string> = T extends `   ${infer R}` ? TrimLeft<R> : T;
//
// let v1: TrimLeft<'      http://localhost' | '      https://localhost'> = 'http://localhost';
//
// type Protocol<S extends string> = S extends `${infer P}:${string}` ? P : never;
// type Domain<S extends string> = S extends `${string}://${infer P}` ? P : never;
//
// let p: Domain<'asdasdasdas'> = 'asdasd';

//
// type MyArr = {
// 	0: string;
// 	1: string;
// 	2: number;
// 	length: number;
// 	pop: Function;
// 	//...
// };

// keyof MyArr => 0 | 1 | 2 |'length' | 'pop'
// MyArr[keyof MyArr] = string | number | Function

// type RequiredOrOmit<T, U, Z extends keyof U> = T extends true ? Required<U> : Omit<U, Z>;
//
// function test<T extends boolean>(show: T) {
// 	type Result = RequiredOrOmit<T, { test: number; value?: () => string }, 'value'>;
// 	if (show) {
// 		return {
// 			test: 1,
// 			value: () => 'v',
// 		} as Result;
// 	}
// 	return {
// 		test: 1,
// 	} as Result;
// }
//
// //
// //
// test(true);
// test(false);

type FlattenType<T> = T extends (infer U)[] ? FlattenType<U> : T;

function deepFlatten<Z extends unknown[]>(_arr: Z): FlattenType<Z>[] {
	throw new Error();
}

const arr1: number[] = deepFlatten([1, 2, 3, 4]);
const arr2: number[] = deepFlatten([1, [12, 34], 3, 4]);
const arr3: (number | string)[] = deepFlatten([1, [12, [1, '2', 3]], 3, 4]);
