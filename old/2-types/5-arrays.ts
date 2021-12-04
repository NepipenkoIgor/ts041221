interface IUser {
	readonly firstName: string;
	readonly age?: number;
}

const user: IUser = {
	firstName: 'Ihor',
	age: 35,
};

let arr: readonly IUser[] = [user];

arr.push(user);
arr[100] = user;

let point: readonly [lat: number, long: number] = [1, 2];
point.push(1);
point[100] = 1;

let p: [...typeof point, string, ...IUser[]] = [12, 12, 'Kiev', user, user];

let u = [user] as const;
let u1: typeof u = [user];
u1.push(user);
u1[100] = user;

let v1: (string | number)[] = ['1', 1, 1, 1, '2'];
let v2: [string, number, ...any[]] = [1, 1, () => {}, 1];

//TODO infinite first array
let v3: [...typeof p, 'ease', ...IUser[]] = [12, 12, 'Kiev', user, 'ease', 1];
