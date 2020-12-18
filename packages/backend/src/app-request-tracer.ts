import { ParameterizedContext, Next } from 'koa';
import { defaultNameSpace, CustomUtils } from '@demo/app-common';

export const forKoa = ({
	useHeader = true,
	headerName = 'X-Request-Id',
} = {}) => (ctx: ParameterizedContext, next: Next) => {
	defaultNameSpace.bindEmitter(ctx.req);
	defaultNameSpace.bindEmitter(ctx.res);

	let requestId: string | undefined = undefined;
	if (useHeader) {
		requestId = ctx.request.header[headerName.toLowerCase()];
	}
	requestId = requestId || CustomUtils.generateUUIDV4();

	return new Promise(defaultNameSpace.bind((res, rej) => {
		defaultNameSpace.set('requestId', requestId);
		return next().then(res).catch(rej);
	}));
};