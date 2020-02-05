'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log('this.app---create', this.app.aliyunSms.create({
      accessKeyId: 'LTAI4FiW7ykVpsp1C3M2EBzg',
      secretAccessKey: 'hZZmISbQzKUucNPe2woxXFYa3aplaP',
      loginTemplate: 'SMS_161591103',
      registerTemplate: 'SMS_161596094',
      resetPasswordTemplate: 'SMS_161591107',
      replacePhoenTemplate: 'SMS_162140110',
    }));
    this.ctx.body = 'hi, ' + this.app.plugins.aliyunSms.name;
  }
}

module.exports = HomeController;
