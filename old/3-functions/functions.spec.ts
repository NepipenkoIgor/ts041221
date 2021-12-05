describe('Functions', () => {
	it('Average', () => {
		expect(average('1', 1)).toEqual(`Average is 1`);
		expect(average(1, '1')).toEqual(`Average is 1`);
		expect(average(2, 2, 2)).toEqual(`Average is 2`);
	});
});
