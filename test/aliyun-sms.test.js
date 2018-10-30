'use strict';

const mock = require('egg-mock');

describe('test/aliyun-sms.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/aliyun-sms-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, aliyunSms')
      .expect(200);
  });
});
