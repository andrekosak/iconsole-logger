import { defaultConfig } from './defaults';
import { LoggerMethod, MethodOptions } from './interfaces';

const chalk = require('chalk');
const util = require('util');

const padLeft = (value: number, size: number): string => {
	let result = String(value);

	while (result.length < size) {
		result = `0${result}`;
	}

	return result;
};

const getTimeStamp = (date: Date = new Date()): string =>
	[
		padLeft(date.getHours(), 2),
		padLeft(date.getMinutes(), 2),
		padLeft(date.getSeconds(), 2)
	].join(':') + ` ${padLeft(date.getMilliseconds(), 3)}`;

const inspect = (arg: any): any => {
	if (arg === null || typeof arg !== 'object') {
		return arg;
	}

	// Preserve the full shape of nested objects so logs remain useful in CI output.
	return util.inspect(arg, {
		compact: false,
		depth: null,
		breakLength: 80
	});
};

const write = (level: LoggerMethod, options: MethodOptions, logArgs: any[]): void => {
	const colorize = chalk[options.color];
	const output = [options.token, `[${getTimeStamp()}]`, ...logArgs].map((arg: any) =>
		colorize(inspect(arg))
	);
	const consoleMethod = level === 'error' ? console.error : console.log;

	(consoleMethod as any).apply(console, output);
};

const createLogger = (level: LoggerMethod) => (...logArgs: any[]): void => {
	write(level, defaultConfig.methods[level], logArgs);
};

export const log = createLogger('log');
export const error = createLogger('error');
export const success = createLogger('success');
export const print = createLogger('print');
export const warn = createLogger('warn');
