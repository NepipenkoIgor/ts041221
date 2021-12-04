// interface IUserAccount {
// 	firstName: string;
// 	age: number;
// }
//
// const user = IUserAccount;
// console.log(user);

// const account = {
// 	firstName: 'Ihor',
// 	age: 35,
// };
//
// const user: typeof account = {
// 	firstName: 'Ihor',
// 	age: 35,
// };
//
// class Point {
// 	public x!: number;
// }
//
// const p: Point = new Point();

let n1: number = 1;
n1 = 0x0101;
n1 = NaN;
n1 = Infinity;
// ¬n = null;

n1.toPrecision();

let s: string = 's';
s = `${n1}`;

let b: boolean = true;
b = false;

let nill: null = null;
let und: undefined = undefined;

let bInt: bigint = 4n;

const key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3 = Symbol('key2');

const strictObj = {
	[key1]: 'value',
	[key2]: 'value',
	[key3]: 'value',
};

const v = strictObj[key1];
