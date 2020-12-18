import Koa from 'koa';
import koaBody from 'koa-body';
import * as appTracer from './app-request-tracer';
import { AppInterceptor } from './app-interceptor';
import { apiv1Router } from './v1-routes';

const _app = new Koa();
_app.use(koaBody());
_app.use(appTracer.forKoa());
_app.use(AppInterceptor.beforeHandler);
_app.use(AppInterceptor.errorHandler);
_app.use(apiv1Router.routes());
_app.use(AppInterceptor.completeHandler);
_app.use(AppInterceptor.notFoundHandler);

export const App = _app.callback();
