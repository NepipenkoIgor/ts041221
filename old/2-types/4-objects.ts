interface IUser {
	readonly firstName: string;
	readonly age?: number;

	//TODO good question
	// [dataProp: `data-${string}`]: () => number;
	// [dataProp1: `data1-${string}`]: boolean;
	[prop: string]: string | number | boolean;
}

const user: IUser = {
	firstName: 'Ihor',
	age: 35,
	'data-timestamp': () => 21,
	'data-value': () => 2,
	'data1-value': true,
};
user.age = 33;

user = {
	firstName: 'Ihor',
};

let hashMap: { [id: string]: IUser } = {
	asdasd124124: user,
	asdasd124123: user,
	asdasd12412: user,
	asdasd124125: user,
};

let admin = {
	firstName: 'Ihor',
	age: 35,
	info: {
		male: true,
	},
} as const;

admin.age = 33;
admin.info.male = false;
