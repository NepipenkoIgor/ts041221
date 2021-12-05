type sn = string | number;

function isString(arg: sn): arg is string {
	return typeof arg === 'string';
}

function average(a: number, b: string): string;
function average(a: string, b: number): string;
function average(a: number, b: number, c: number): string;
function average(...args: sn[]): string {
	let total: number = 0;
	for (const a of args) {
		// const isString = typeof a === 'string';
		if (isString(a)) {
			total += Number(a);
		} else {
			total += a;
		}
	}
	const avg: number = total / args.length;
	return `Average is ${avg}`;
}
