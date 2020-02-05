/** @Author : YuXueWen
 * @File : request.js
 * @Email : 8586826@qq.com
 **/

'use strict';

const assert = require('assert');
const SMSClient = require('@alicloud/sms-sdk');

function checkBucketConfig(config) {
  assert(config.accessKeyId && config.secretAccessKey, '[egg-aliyun-sms] must set `accessKeyId` and `secretAccessKey` in config files.');

  if (config.mnsVpc && config.mnsVpc.vpc) {
    assert(config.smsApiEndpoint && config.baseApiEndpoint && config.regionId,
      'if you use vpc , [egg-aliyun-sms] must set `smsApiEndpoint` and `baseApiEndpoint` and `regionId` and `mnsVpc` in config files.');
  }

}

module.exports = app => {
  app.addSingleton('aliyunSms', config => {
    checkBucketConfig(config);

    const { accessKeyId, secretAccessKey, smsApiEndpoint, baseApiEndpoint, regionId, mnsVpc } = config || {};

    const options = {};
    Object.assign(options, { accessKeyId, secretAccessKey });
    if (mnsVpc && mnsVpc.vpc) {
      Object.assign(options, { smsApiEndpoint, baseApiEndpoint, regionId });
    }

    return new SMSClient(options);
  });


};
