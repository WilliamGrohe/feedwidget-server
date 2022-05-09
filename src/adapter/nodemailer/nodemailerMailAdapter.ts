import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4db20230389a33",
    pass: "cf263f8751c7e7"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe FeedWid <oi@feedwid.com>',
      to: 'William Grohe <william.grohe@gmail.com>',
      subject,
      html: body,
      
    })

  };
}