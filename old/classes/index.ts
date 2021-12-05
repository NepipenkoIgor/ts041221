type sn = string | number;

interface IPointCoord {
	x: sn;
}

interface IPointActions {
	sum(): number;
}

type Constructable = new (...args: any[]) => any;

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
	return class extends BC {
		public timestamp = Date.now();
	};
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
	return class extends BC {
		public tags = ['ts', 'js'];
	};
}

class BasePoint implements IPointCoord, IPointActions {
	#p: number = 3;

	public constructor(x: string, y: number, z: number);
	public constructor(x: number, y: string, z: number);
	public constructor(x: number, y: number, z: number);
	public constructor(public x: sn, protected y: sn, private z: number) {}

	public sum(): number {
		return Number(this.x) + Number(this.x) + this.z + this.#p;
	}
}

class Point extends Tagged(Timestamped(BasePoint)) {
	public constructor(x: number, y: number, z: number) {
		super(x, y, z);
		console.log(this.y);
	}
}

// const p = new Point(1, '1', 1);
// const p1 = new Point('1', 1, 1);
const p2 = new Point(1, 1, 1);
console.log(p2);
console.log(p2.timestamp);

class Singleton {
	private static instance: Singleton;

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}
}

// class B extends  Singleton {
//
// }

// class Singleton {
// 	private static instance: Singleton;
//
// 	static {
// 		console.log('STATIC BLOCK');
// 		Singleton.instance = new Singleton();
// 	}
//
// 	public constructor() {
// 		console.log('INIT');
// 		return Singleton.instance;
// 	}
// }

// const inst1 = Singleton.getInstance();
// const inst2 = Singleton.getInstance();
// const inst3 = Singleton.getInstance();
// const inst4 = Singleton.getInstance();
// const inst5 = Singleton.getInstance();
// const inst1 = new Singleton();
// const inst2 = new Singleton();
// const inst3 = new Singleton();
// const inst4 = new Singleton();
// const inst5 = new Singleton();

// console.log(inst1 === inst4);

abstract class AbstractControl<T = string> {
	public abstract model: T;

	public abstract getModel(): T;

	public onFocus() {
		// do something;
	}

	public onBlur() {
		// do something;
	}
}

abstract class AbstractControlWithSet<T = string> extends AbstractControl<T> {
	public abstract setModel(model: T): void;
}

class MHInputControl extends AbstractControl {
	public model = '';

	public getModel(): string {
		return '';
	}
}

interface IDropDownItem {
	text: string;
	value: string;
}

class MHInputDropDown extends AbstractControlWithSet<IDropDownItem[]> {
	public model: IDropDownItem[] = [];

	public getModel(): IDropDownItem[] {
		return [];
	}

	public override setModel(model: IDropDownItem[]) {
		this.model = model;
	}
}
