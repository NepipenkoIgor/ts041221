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
