describe('Import', function () {
	const { log, error, success, print, warn } = require('../dist');

	it('of log object should be possible', function () {
		expect(log).not.toBeUndefined();
	});
	it('of error object should be possible', function () {
		expect(error).not.toBeUndefined();
	});
	it('of success object should be possible', function () {
		expect(success).not.toBeUndefined();
	});
	it('of print object should be possible', function () {
		expect(print).not.toBeUndefined();
	});
	it('of warn object should be possible', function () {
		expect(warn).not.toBeUndefined();
	});
});
