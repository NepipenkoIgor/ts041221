// function fn(x: number, y: number) {
// 	// ...do something
// }
//
// fn(1, 32);
// fn(2, 0);

// interface, type, functions, class

// interface IUser<Info extends { male: boolean }, Id = number> {
// 	id: Id;
// 	firstName: string;
// 	info: Info;
// }
//
// let user: IUser<{ male: boolean }, string> = {
// 	id: '1asdqwe',
// 	firstName: 'Ihor',
// 	info: {
// 		male: true,
// 	},
// };
//
// let admin: IUser<{ male: boolean; subjects: string[] }> = {
// 	id: 123123,
// 	firstName: 'Elena',
// 	info: {
// 		male: false,
// 		subjects: ['ts', 'js'],
// 	},
// };
//
// let a: Array<number> = [1];

interface IUser {
	firstName: string;
	age: number;
}

interface IProduct {
	name: string;
	price: number;
}

interface IState {
	user: IUser;
	products: IProduct[];
	bonuses: number;
}

const state: IState = {
	user: { firstName: 'Ihor', age: 35 },
	products: [
		{ name: 'IPhone X', price: 33 },
		{ name: 'IPad', price: 34 },
	],
	bonuses: 0.8,
};

type Select<S> = <F extends keyof S>(state: S, field: F) => S[F];
/*
 *  field = 'user' | 'products' | 'bonuses'
 *
 *
 * */

const select: Select<IState> = (store, field) => store[field];
// function select<T>(stateSnapshot: T, field: keyof T) {
// 	return stateSnapshot[field];
// }

const user: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
const b: number = select(state, 'bonuses');
