import * as request from 'supertest';
import { CustomError } from '@demo/app-common';
import { coreErr } from '@demo/app-core';
import { App } from '../src';

const _ENDPOINT = '/api/v1/companies';

describe('Create company spec', () => {
  const agent = request.agent(App);
  beforeAll(async (done) => {
    done();
  });
  afterAll(async (done) => {
    done();
  });
  describe.only('Required fields', () => {
    test('[10001] Field "shortName" is empty', async (done) => {
      const res = await agent
        .post(_ENDPOINT)
        .send({
          shortName: '',
          fullName: 'aaa',
          permitNumber: '1234555',
        });
      const code = new CustomError(coreErr.ERR_SHORT_NAME_EMPTY);
      expect(res.status).toBe(code.httpStatus);
      expect(res.body).toEqual({
        traceId: expect.any(String),
        code: code.code,
        message: code.message,
      });
      done();
    });
    test('[10002] Field "fullName" is empty', async (done) => {
      const res = await agent
        .post(_ENDPOINT)
        .send({
          shortName: 'bbb',
          fullName: '',
          permitNumber: '1234555',
        });
      const code = new CustomError(coreErr.ERR_FULL_NAME_EMPTY);
      expect(res.status).toBe(code.httpStatus);
      expect(res.body).toEqual({
        traceId: expect.any(String),
        code: code.code,
        message: code.message,
      });
      done();
    });
    test('[10003] Field "permitNumber" is empty', async (done) => {
      const res = await agent
        .post(_ENDPOINT)
        .send({
          shortName: 'bbb',
          fullName: 'aaa',
          permitNumber: '',
        });
      const code = new CustomError(coreErr.ERR_PERMIT_NUMBER_EMPTY);
      expect(res.status).toBe(code.httpStatus);
      expect(res.body).toEqual({
        traceId: expect.any(String),
        code: code.code,
        message: code.message,
      });
      done();
    });
  });
  describe('Validation rules', () => {
    beforeAll(async (done) => {
      done();
    });
    test('[10004] Duplicated permit number was founded', async (done) => {
      const res = await agent
        .post(_ENDPOINT)
        .send({
          shortName: 'bbb',
          fullName: 'aaa',
          permitNumber: 'k9',
        });
      const code = new CustomError(coreErr.ERR_DUP_PERMIT_NUMBER);
      expect(res.status).toBe(code.httpStatus);
      expect(res.body).toEqual({
        traceId: expect.any(String),
        code: code.code,
        message: code.message,
      });
      done();
    });
  });
  describe('Success', () => {
    test('[Success]', async (done) => {
      const res = await agent
        .post(_ENDPOINT)
        .send({
          shortName: 'bbb',
          fullName: 'aaa',
          permitNumber: 'k9',
        });
      expect(res.status).toBe(200);
      done();
    });
  });
});

