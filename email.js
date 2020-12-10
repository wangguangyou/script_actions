// 引入 nodemailer
var nodemailer = require('nodemailer');
const {
  EMAIL_ROLE
} = process.env
const [user, pass] = EMAIL_ROLE.split('&')
// 创建一个SMTP客户端配置
var config = {
  host: 'smtp.qq.com', //网易163邮箱 smtp.163.com
  port: 465, //网易邮箱端口 25
  auth: {
    user,
    pass
  }
};

// 创建一个SMTP客户端对象
var transporter = nodemailer.createTransport(config);

// 发送邮件
function send(mail) {
  return transporter.sendMail(mail);
};



module.exports = {
  send
}