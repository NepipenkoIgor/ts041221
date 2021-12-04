// type AnimationType = 'ease';
// type AnimationDirect = 'in' | 'out' | 'off';
//
// interface IAnimationOpt {
// 	delay: number;
// 	type: `${AnimationType}-${AnimationDirect}`;
// }

// const easeIn = 'ease-in';
//
// interface IAnimationOpt {
// 	delay: number;
// 	type: typeof easeIn;
// }
//
// function animationFn(options: IAnimationOpt) {
// 	if (options.type === easeIn) {
// 	}
// }
// enum AnimationType {
// 	EASE_IN = 'ease-in',
// 	EASE_OUT = 'ease-out',
// }
//
// interface IAnimationOpt {
// 	delay: number;
// 	type: AnimationType;
// }
//
// function animationFn(options: IAnimationOpt) {
// 	if (options.type === AnimationType.EASE_IN) {
// 	}
// }
//
// animationFn({ delay: 1000, type: AnimationType.EASE_IN });

// let num = 1 as const;
//
// const num1e: typeof num = 2;

// type IFact = {
// 	factId: string;
// 	clientId: string;
// 	userId: number;
// };
//
// const uniqueValue = (): keyof IFact => {
// 	// 'factId' | 'clientId' | 'userId'
// 	return 'factId';
// };
//
// const dataList: { action: string; data: IFact }[] = [];
//
// dataList.map((item) => {
// 	if (item.data[uniqueValue()]) {
// 	}
// 	return item;
// });
//
// let fact: IFact[keyof IFact] = () => {}; // string | number
//
// //TODO add to Mapped
// type IFact1 = {
// 	[key in AnimationType]: string;
// };
//
// let f: IFact1 = {
// 	'ease-in': 's',
// 	'ease-out': 's',
// };
//
// const values = Object.keys(AnimationType).map((key: string) => {
// 	return AnimationType[key as keyof typeof AnimationType];
// });

const enum Status {
	SUCCESS = 'Success',
	ERROR = 'Error',
}

interface ISuccess {
	type: `${string}${Status.SUCCESS}`;
	body: string;
}

interface IError {
	type: `${string}${Status.ERROR}`;
	message: string;
}

function handler(res: ISuccess | IError) {
	if (res.type === 'HttpSuccess') {
	} else {
	}
}

let str = /\s/;
str = new RegExp('\\s');
