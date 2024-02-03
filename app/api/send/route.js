import { EmailTemplate } from '@/components/shared/email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const {name,
            company,
            email,
            contact,
            about,
            joined_interests} = body;

        console.log(body);
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['faslane.agency@gmail.com'],
            subject: name+' wants to contact',
            react: EmailTemplate(body),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
