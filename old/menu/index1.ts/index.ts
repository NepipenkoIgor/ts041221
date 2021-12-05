import { generateMenu } from '../index';
import { list } from '../data';

//declare function ParseTrace(selector: string): any;

$('.menu')
	.html(generateMenu(list))
	.on('click', (e) => {
		const el: HTMLElement = e.target as HTMLElement;
		if (!el.classList.contains('title')) {
			return;
		}
		const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
		parentLi.classList.toggle('menu-open');
	});
/*
const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
*/

// navMenu.innerHTML = generateMenu(list);
// navMenu.addEventListener('click', (e: MouseEvent) => {
// 	const el: HTMLElement = e.target as HTMLElement;
// 	if (!el.classList.contains('title')) {
// 		return;
// 	}
// 	const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
// 	parentLi.classList.toggle('menu-open');
// });
