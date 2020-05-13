export interface MethodOptions {
	color: string;
	token: string;
}

export interface LoggerConfig {
	methods: {
		print: MethodOptions;
		warn: MethodOptions;
		success: MethodOptions;
		ok: MethodOptions;
		log: MethodOptions;
		error: MethodOptions;
	};
}
