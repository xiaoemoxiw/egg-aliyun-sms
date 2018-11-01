'use strict';

const assert = require('assert');
const SMSClient = require('@alicloud/sms-sdk');

module.exports = app => {

  const { accessKeyId, secretAccessKey, smsApiEndpoint, baseApiEndpoint, regionId, mnsVpc } = app.config.aliyunSms || {};

  let options = {};

  assert(accessKeyId && secretAccessKey , '[egg-aliyun-sms] must set `accessKeyId` and `secretAccessKey` in config files.');

  Object.assign(options,{accessKeyId, secretAccessKey});

  if (mnsVpc && mnsVpc.vpc) {
      assert(smsApiEndpoint && baseApiEndpoint && regionId,
          'if you use vpc , [egg-aliyun-sms] must set `smsApiEndpoint` and `baseApiEndpoint` and `regionId` and `mnsVpc` in config files.');

      Object.assign(options,{smsApiEndpoint, baseApiEndpoint, regionId});
  }

  app.coreLogger.info('[egg-aliyun-sms] begin');

  app.smsClient = new SMSClient(options);

};
