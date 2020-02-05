'use strict';

const aliyunSms = require('./lib/aliyunSms');
module.exports = app => {
  aliyunSms(app);
};
