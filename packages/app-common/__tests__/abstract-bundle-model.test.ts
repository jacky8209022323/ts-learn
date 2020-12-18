
import { AbstractBundleModel } from '../src/custom-models/abstract-bundle-model';

describe('Abstract base request test', () => {
  test('Should bind all keys', (done) => {
    class TestRequest extends AbstractBundleModel<TestRequest> {
      public name: string = '';
      public age: number = 0;
      constructor() {
        super();
      }
      public checkRequired(): TestRequest {
        return this;
      }
    }
    const obj = {
      name: 'xxxhand',
      age: 20,
      aka: 'ssss',
    };
    const req = new TestRequest()
      .from(obj);

    expect(req.name).toBe(obj.name);
    expect(req.age).toBe(obj.age);
    expect(req.checkRequired()).toBeInstanceOf(TestRequest);
    done();
  });
  test('Should success w/ multi source', (done) => {
    class TestRequest extends AbstractBundleModel<TestRequest> {
      public accountId: string = '';
      public name: string = '';
      public age: number = 0;
      constructor() {
        super();
      }
      public checkRequired(): TestRequest {
        return this;
      }
    }
    const params = {
      accountId: 'xxxhand',
    };
    const body = {
      name: 'xxxhand',
      age: 20,
    };
    const req = new TestRequest()
      .from(params)
      .from(body);

    expect(req.accountId).toBe(params.accountId);
    expect(req.name).toBe(body.name);
    expect(req.age).toBe(body.age);
    expect(req.checkRequired()).toBeInstanceOf(TestRequest);
    done();
  });
});
