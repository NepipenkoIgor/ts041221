function sleep(ms: number) {
	return new Promise((res) => {
		setTimeout(res, ms);
	});
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
	for (const item of items) {
		await sleep(1000);
		yield item;
	}
}

export async function speakLikeSloth1(items: string[]) {
	throw new Error('My Error');
	for await (const item of getItemsReallySlowly(items)) {
		console.log(item);
	}
}
