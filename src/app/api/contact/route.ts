import { Contact } from '@/types/contact';
import { NextResponse } from 'next/server'
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY

const sendFeedbackEmail = ({
  name,
  email,
}: Contact, resend: Resend) => {
  resend.emails.send({
    from: 'contato@controlgameapp.com',
    to: email,
    subject: 'Contato',
    html: `<p>Olá ${name}, agradecemos pelo contato! <br />Sua mensagem foi recebida e será respondida em breve.</p>`,
  });
}

const sendEmailToUs = ({
  name,
  email,
  content
}: Contact, resend: Resend) => {
  
  resend.emails.send({
    from: 'contato@controlgameapp.com',
    to: ['adrknapp@gmail.com', 'thugtroll8@gmail.com'],
    subject: 'Contato',
    html: `<p>E-mail: ${email} <br /> Nome: ${name} <br /> Conteúdo: ${content} </p>`
  });
}

export async function POST(request: Request) {
  const { contact }: {
    contact: Contact
  } = await request.json();

  const resend = new Resend(resendApiKey);

  sendFeedbackEmail(contact, resend)
  sendEmailToUs(contact, resend)

  return NextResponse.json(
    { message: `E-mail successfully sent to ${contact.email}.` },
    {
      status: 200
    }
  )
}
