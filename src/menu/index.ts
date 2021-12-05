import { IListEl } from './data';
import './style.css';

export function generateMenu(list: IListEl[]): string {
	let output: string = '<ul>';
	for (const el of list) {
		const items: IListEl[] | undefined = el.items;
		output += `<li><a class=${items ? 'title' : ''}>${el.title}</a>`;
		if (items) {
			output += generateMenu(items);
		}
		output += '</li>';
	}
	output += '</ul>';
	return output;
}
