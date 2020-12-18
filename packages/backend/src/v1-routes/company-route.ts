import { ParameterizedContext, Next } from 'koa';
import Router from '@koa/router';
import { CustomResult } from '@demo/app-common';
import * as appCore from '@demo/app-core';
import { IStateResult } from '../app-types';

class CompanyController {

  public async create(ctx: ParameterizedContext<IStateResult>, next: Next): Promise<void> {
    const mReq = new appCore.CreateCompanyRequest()
      .from(ctx.request.body);
    mReq.checkRequired();
    
    ctx.state.result = new CustomResult();
    await next();
  }
}

const _ctrl = new CompanyController();

const _router = new Router()
  .prefix('/companies')
  .post('/', _ctrl.create);

export const companyRouter = _router.routes();
