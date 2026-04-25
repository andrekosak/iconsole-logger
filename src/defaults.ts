import { LoggerConfig } from './interfaces';

export const defaultConfig: LoggerConfig = {
	methods: {
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
