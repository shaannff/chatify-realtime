import { Resend } from 'resend';
import { ENV } from './env.js';

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender  = {
email: ENV.EMAIL_FROM,
name:ENV.EMAIL_NAME
}


// (async function () {
//   const { data, error } = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['delivered@resend.dev'],
//     subject: 'Hello World',
//     html: '<strong>It works!</strong>',
//   });

//   if (error) {
//     return console.error({ error });
//   }

//   console.log({ data });
// })();