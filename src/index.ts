// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(
// 	target: Object,
// 	propertyKey: string | symbol,
// 	descriptor: TypedPropertyDescriptor<T>,
// ) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (
// 	target: Object,
// 	propertyKey: string | symbol,
// 	parameterIndex: number,
// ) => void;

import {
	CheckTypeInRuntime,
	Debounce,
	LogValue,
	SavePersistence,
	Range1,
	Validate,
} from './decorators';

class SearchComponent {
	@CheckTypeInRuntime
	@SavePersistence
	public inputValue!: string;

	public constructor(private readonly inputEl: HTMLInputElement) {
		this.inputEl.addEventListener<'input'>('input', this.onSearch.bind(this));
		console.log('INIT', this.inputValue);
	}

	@Debounce(300)
	@LogValue
	private onSearch(_event: Event) {
		this.updatePercentage(10, 30);
		// this.inputValue = (_event.target as HTMLInputElement).value;
		// console.log(event);
		// send data to server
	}

	@Validate
	public updatePercentage(oldValue: number, @Range1(10, 40) newValue: number) {
		console.log(oldValue, newValue);
	}
}

const inputEl = document.querySelector('input') as HTMLInputElement;
const sc = new SearchComponent(inputEl);
console.log(sc);

setTimeout(() => {
	// (sc.inputValue as any) = 123123;
	sc.updatePercentage(10, 80);
}, 5000);
