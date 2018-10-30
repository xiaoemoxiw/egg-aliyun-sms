'use strict';

const assert = require('assert');
const SMSClient = require('@alicloud/sms-sdk');

module.exports = app => {

  const { accessKeyId, secretAccessKey, smsApiEndpoint, baseApiEndpoint, regionId, mnsVpc } = app.config.aliyunApiGateway || {};

  // check key & secret
  assert(accessKeyId && secretAccessKey && smsApiEndpoint && baseApiEndpoint && regionId && mnsVpc,
    '[egg-aliyun-sms] Must set `accessKeyId` and `secretAccessKey` and `smsApiEndpoint` and `baseApiEndpoint` and `regionId` and `mnsVpc` in aliyun-sms\'s config');

  app.coreLogger.info('[egg-egg-aliyun-api-geteway] setup');


  app.smsClient = new SMSClient({ accessKeyId, secretAccessKey, smsApiEndpoint, baseApiEndpoint, regionId, mnsVpc });

};
