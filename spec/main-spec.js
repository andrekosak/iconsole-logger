describe('iconsole-logger', function () {
	const logger = require('../dist');
	const { log, error, success, print, warn } = logger;
	const ansiPattern = /\u001b\[[0-9;]*m/g;
	const stripAnsi = value => String(value).replace(ansiPattern, '');

	afterEach(function () {
		jasmine.clock().uninstall();

		if (console.log.and) {
			console.log.and.callThrough();
		}

		if (console.error.and) {
			console.error.and.callThrough();
		}
	});

	it('exports the public log methods', function () {
		expect(log).toEqual(jasmine.any(Function));
		expect(error).toEqual(jasmine.any(Function));
		expect(success).toEqual(jasmine.any(Function));
		expect(print).toEqual(jasmine.any(Function));
		expect(warn).toEqual(jasmine.any(Function));
	});

	it('writes non-error messages through console.log', function () {
		jasmine.clock().install();
		jasmine.clock().mockDate(new Date(2020, 0, 2, 3, 4, 5, 6));
		spyOn(console, 'log');

		log('hello', { nested: { ok: true } });

		expect(console.log).toHaveBeenCalledTimes(1);
		const args = console.log.calls.mostRecent().args.map(stripAnsi);

		expect(args[0]).toBe(' ℹ︎ ');
		expect(args[1]).toBe('[03:04:05 006]');
		expect(args[2]).toBe('hello');
		expect(args[3]).toContain('nested');
	});

	it('writes errors through console.error', function () {
		spyOn(console, 'error');

		error('broken');
		const args = console.error.calls.mostRecent().args.map(stripAnsi);

		expect(args[0]).toBe(' ✘ ');
		expect(args[1]).toMatch(/^\[\d{2}:\d{2}:\d{2} \d{3}\]$/);
		expect(args[2]).toBe('broken');
	});
});
