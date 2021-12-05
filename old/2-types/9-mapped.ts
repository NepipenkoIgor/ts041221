/*
 {
  [P in K]: T
 }

 */

interface IPerson {
	readonly firstName: string;
	readonly age: number;
	info: { male: boolean };
	subjects?: string[];
}

type NotReadonlyAndRequire<T> = {
	-readonly [P in keyof T]-?: T[P];
};

let u: NotReadonlyAndRequire<IPerson> = {
	firstName: 'Ihor',
	age: 35,
	info: { male: true },
	subjects: ['ts'],
};

u.age = 25;

type RemoveKeyByValueTypeAndUnion<T, E> = {
	[P in keyof T]: T[P] extends E ? never : P;
}[keyof T];

/*
  firstName: never
  age: never
  info: info
  subjects: subjects
 */

// never | never | info |   subjects
const k: RemoveKeyByValueTypeAndUnion<IPerson, string | number> = 'firstName';

type RemoveByFieldName<T, E> = {
	[P in keyof T as Exclude<P, E>]: T[P];
};

/*
  firstName: string
  never: number
  info: {male:boolean}
  never: string[]


 */

let o: Omit<any, any>;

const user: RemoveByFieldName<IPerson, 'age' | 'subject'> = {
	firstName: 'Elena',
	info: { male: false },
};

type CapitalizedKeysAndGetter<T> = {
	[P in keyof T as `get${Capitalize<P & string>}`]: () => T[P];
};

const getUser: CapitalizedKeysAndGetter<IPerson> = {
	getFirstName: () => 'Ihor',
	getAge: () => 35,
	getInfo: () => ({ male: true }),
	getSubjects: () => ['ts'],
};

type TypedObject<T, U> = {
	[P in keyof T as `${U & string}${string & P}`]: T[P];
};
const createSimpleReducer = <T extends string>(name: T) => {
	const obj = {
		Pending1: () => {
			return 1;
		},
		Success: () => {
			return '1';
		},
		Error: () => {
			return true;
		},
	};
	const result: { [key: string]: Function } = {};
	for (const [key, value] of Object.entries(obj)) {
		result[`${name}${key}`] = value;
	}
	return result as TypedObject<typeof obj, T>;
};

createSimpleReducer('products');

interface IPerson {
	readonly firstName: string;
	readonly age: number;
	info: { male: boolean };
	subjects?: string[];
}

function updatePerson(_user: Partial<IPerson>) {}

updatePerson({ id: 1, age: 25 });
