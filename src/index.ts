const moment = require('moment');
const chalk = require('chalk');
const util = require('util');

class Logger {
	level: string;
	token: string;
	color: string;
	logArguments: any[] = [];
	constructor(level: keyof LoggerConfig['methods'], options: any) {
		this.level = level;
		this.token = options.token || '';
		this.color = options.color || 'white';
		return this;
	}
	log(...logArgs: any[]) {
		this.logArguments = logArgs;
		this.logArguments = this.addTimestamp();
		this.logArguments = this.addToken();
		this.logArguments = this.logArguments.map(el => {
			// Normalize object
			el = this.inspect(el);
			// Add color
			el = chalk[this.color](el);
			return el;
		});

		(<any>console)[this.level === 'error' ? this.level : 'log'].apply(
			console,
			this.logArguments
		);
	}
	addTimestamp() {
		return [`[${this.getTimeStamp()}]`, ...this.logArguments];
	}
	addToken() {
		return [this.token, ...this.logArguments];
	}
	inspect(arg: any) {
		// We want to inspect only objects
		if (typeof arg !== 'object' && !Array.isArray(arg)) {
			return arg;
		}
		return util.inspect(arg, {
			compact: false,
			depth: null,
			breakLength: 80
		});
	}
	getTimeStamp(format?: string) {
		format = format || 'HH:mm:ss SSS';
		return moment().format(moment().format(format));
	}
}

interface MethodOptions {
	color: string;
	token: string;
}

interface LoggerConfig {
	methods: {
		print: MethodOptions;
		warn: MethodOptions;
		success: MethodOptions;
		ok: MethodOptions;
		log: MethodOptions;
		error: MethodOptions;
	};
}
const defaultConfig: LoggerConfig = {
	methods: {
		ok: {
			color: 'yellow',
			token: ' ✔ ︎'
		},
		print: {
			color: 'gray',
			token: ' ▸ '
		},
		error: {
			color: 'red',
			token: ' ✘ '
		},
		log: {
			color: 'white',
			token: ' ℹ︎ '
		},
		warn: {
			color: 'magenta',
			token: ' ⚠︎ '
		},
		success: {
			color: 'green',
			token: ' ✓ ︎'
		}
	}
};

export const log = (...logArgs: any[]) => {
	const options = {
		token: defaultConfig.methods.log.token, 
		color: defaultConfig.methods.log.color
	};
	const loggerInstance = new Logger('log', options);
	loggerInstance.log(...logArgs);
};

export const error = (msg: any) => {
	const options = {
		token: defaultConfig.methods.error.token,
		color: defaultConfig.methods.error.color
	};
	const loggerInstance = new Logger('error', options);
	loggerInstance.log(msg);
};

export const success = (msg: any) => {
	const options = {
		token: defaultConfig.methods.success.token,
		color: defaultConfig.methods.success.color
	};
	const loggerInstance = new Logger('success', options);
	loggerInstance.log(msg);
};

export const print = (msg: any) => {
	const options = {
		token: defaultConfig.methods.print.token,
		color: defaultConfig.methods.print.color
	};
	const loggerInstance = new Logger('print', options);
	loggerInstance.log(msg);
};
