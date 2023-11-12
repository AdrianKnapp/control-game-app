import { NextResponse } from 'next/server'
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY

export async function POST(request: Request) {
  const data = await request.json();

  const resend = new Resend(resendApiKey);

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'adrknapp@gmail.com',
    subject: 'Contato',
    html: '<p>E-mail sent from Next API</p>'
  });

  return NextResponse.json(
    { message: 'E-mail sent!' },
    {
      status: 200
    }
  )
}
