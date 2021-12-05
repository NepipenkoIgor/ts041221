import 'reflect-metadata';

export function LogValue(
	target: Object,
	key: string,
	descriptor: TypedPropertyDescriptor<any>,
): TypedPropertyDescriptor<any> {
	const originalValue = descriptor.value;
	return {
		...descriptor,
		value(e: Event) {
			const value: string = (e.target as HTMLInputElement).value;
			console.log(`Input value in method ${key} of ${target.constructor.name} equal to ${value}`);
			return originalValue.call(this, e);
		},
	};
}

export function Debounce(ms: number) {
	let timeId: number | null;
	return (
		_target: Object,
		_key: string,
		descriptor: TypedPropertyDescriptor<any>,
	): TypedPropertyDescriptor<any> => {
		const originalValue = descriptor.value;
		return {
			...descriptor,
			value(e: Event) {
				if (timeId) {
					clearTimeout(timeId);
				}
				timeId = window.setTimeout(() => {
					return originalValue.call(this, e);
				}, ms);
			},
		};
	};
}

export function SavePersistence(_target: Object, key: string): void {
	const localKey = `ts041221_${key}`;

	const getter = () => {
		return localStorage.getItem(localKey);
	};

	const setter = (newValue: any) => {
		localStorage.setItem(localKey, newValue);
	};

	Object.defineProperty(_target, key, {
		get: getter,
		set: setter,
		enumerable: true,
		configurable: true,
	});
}

export function CheckTypeInRuntime(_target: Object, key: string): void {
	console.log();
	const { name: type } = Reflect.getMetadata('design:type', _target, key);
	let value: any;

	Object.defineProperty(_target, key, {
		get() {
			return value;
		},
		set(newValue) {
			const realType = typeof newValue;
			const expectedType = type.toLowerCase();
			if (realType !== expectedType) {
				throw Error(`type of ${key} is not  ${expectedType}. You tried to set ${realType}`);
			}
			value = newValue;
		},
		enumerable: true,
		configurable: true,
	});
}

const RANGE_KEY = 'design:RANGE_KEY';

export function Range1(min: number, max: number) {
	return (target: Object, propertyKey: string | symbol, parameterIndex: number): void => {
		const existingRange = Reflect.getMetadata(RANGE_KEY, target, propertyKey) ?? {};
		existingRange[parameterIndex] = [min, max];
		Reflect.defineMetadata(RANGE_KEY, existingRange, target, propertyKey);
	};
}

export function Validate(
	target: Object,
	key: string,
	descriptor: TypedPropertyDescriptor<any>,
): void {
	const originalValue = descriptor.value;
	descriptor.value = function (...args: any[]) {
		const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
		for (const [paramIndex, range] of Object.entries(existingRange)) {
			const [min, max] = range as [min: number, max: number];
			const numParamIndex = Number(paramIndex);
			const paramValue = args[numParamIndex];
			if (paramValue < min || paramValue > max) {
				throw new Error(`Error in ${target.constructor.name} instance.
				Parameter of method ${key} on position ${numParamIndex + 1} out of range
				[${[min, max]}]. Current value  ${paramValue}
				`);
			}
		}
		return originalValue.call(this, ...args);
	};
}
