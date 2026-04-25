export type LoggerColor = 'gray' | 'green' | 'magenta' | 'red' | 'white' | 'yellow';
export type LoggerMethod = 'error' | 'log' | 'print' | 'success' | 'warn';

export interface MethodOptions {
	color: LoggerColor;
	token: string;
}

export interface LoggerConfig {
	methods: Record<LoggerMethod, MethodOptions>;
}
