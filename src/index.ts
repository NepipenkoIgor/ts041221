import '../assets/css/style.css';

/*let/const**/
let period = 50;
const baseUrl = 'http://localhost';
console.log(period, baseUrl);

/***object***/
const firstName = 'Ihor';
const acc = {
	firstName,
	getName() {
		return this.firstName;
	},
};
console.log(acc);

/**spread*/
const person = { ...acc };
const dates = [...[11, 12, 13]];

console.log(dates);

/**desctructoring */
const { firstName: myName } = acc;
const [firstDate] = dates;

console.log(myName, firstDate);

/**template string*/

function userMessage([start, end]: TemplateStringsArray, { firstName: name }: typeof person) {
	return `${start}${name}${end}`;
}

console.log(userMessage`Good day, ${person} !!`);

/**()=>**/
const sum = (a: number, b: number): number => a + b;
console.log(sum(1, 1));

/**Class**/
class Point {
	public x: number = 1;

	public getX() {
		return this.x;
	}
}

const p = new Point();
console.log(p);

/**?.*/
const admin: any = {};
const user = admin?.info?.male;
console.log(user);

/***?? ***/
let admin1;
const p1 = admin1 ?? user;
console.log(p1);

const v = [1, 2, 3].includes(1);
console.log(v);
