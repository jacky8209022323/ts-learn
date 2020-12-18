import * as request from 'supertest';
import { HttpCodes } from '@demo/app-common';
import { App } from '../src';

describe('Root api spec', () => {
	const agent = request.agent(App);
	test('Hello world', async (done) => {
		const res = await agent
			.get('/api/v1');

		expect(res.status).toBe(HttpCodes.OK);
		expect(res.body).toEqual({
			traceId: expect.any(String),
			code: 0,
			message: '',
			result: 'Hello world',
		});
		done();
	});
	test('Throw exception', async (done) => {
		const res = await agent
			.get('/api/v1/throws');

		expect(res.status).toBe(HttpCodes.INTERNAL_ERROR);
		expect(res.body).toEqual({
			traceId: expect.any(String),
			code: 99999,
			message: 'Throw an exception',
		});
		done();
	});
	test('Path not found', async (done) => {
		const res = await agent
			.get('/api/v1/notExistPath');

		expect(res.status).toBe(HttpCodes.NOT_FOUND);
		done();
	});
});
