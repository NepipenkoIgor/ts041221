let anyType: any = {};
anyType.a = 1;
anyType = 1;
anyType.a.b.c = () => {};
anyType();

let unkType: unknown = {};
unkType.a = 1;
unkType = 1;
unkType.a.b.c = () => {};
unkType();

function fn(): void {}

function fn1(): never {
	throw new Error();
}
