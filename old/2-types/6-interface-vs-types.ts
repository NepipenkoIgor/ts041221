/**Objects/Functions*/
// interface IPoint {
// 	x: number;
// 	y: number;
// }
//
// type TPoint = { x: number; y: number };
//
// const p: TPoint = { x: 1, y: 1 };
//
// interface ISum {
// 	(x: number, y: number): number;
// }
//
// type TSum = {
// 	(x: number, y: number): number;
// };
// // type TSum = (x: number, y: number) => number;
//
// const sum: TSum = (x: number, y: number) => x + y;

/**Extends*/

interface IX {
	x: number;
}

interface IY {
	y: number;
}

type TX = {
	x: number;
};

type TY = {
	y: number;
};

interface IPoint extends TX, IY {}

type TPoint = TX & IY;

const p: TPoint = {
	x: 1,
	y: 1,
};

/***implements**/

class Point implements IX, IY {
	public x = 1;

	public y = 2;

	public z = 3;
}

// type snb = string | boolean;
// type snb = number | boolean;

interface IX {
	z: number;
}
