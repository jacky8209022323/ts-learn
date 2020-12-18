import { ParameterizedContext, Next } from 'koa';
import Router from '@koa/router';
import { CustomResult } from '@demo/app-common';
import { IStateResult } from '../app-types';
import { companyRouter } from './company-route';

const _router = new Router()
	.prefix('/api/v1');

_router.all('/', async (ctx: ParameterizedContext<IStateResult<CustomResult>>, next: Next): Promise<void> => {
	ctx.state.result = new CustomResult<string>().withResult('Hello world');
	await next();
});
_router.all('/throws', async (): Promise<void> => {
	throw new Error('Throw an exception');
});

_router
	.use(companyRouter);

export const apiv1Router = _router;
