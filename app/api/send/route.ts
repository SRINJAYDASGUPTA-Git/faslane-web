
import { EmailTemplate } from '@/components/shared/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
interface EmailTemplateProps {
    name: string;
    company: string;
    email: string;
    contact: string;
    about: string;
    interests: string[];
  }
export async function POST(request:Request) {// Assuming data is sent in the request body
    try {
        const requestBody = await request.json();
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'dasguptasrinjay2004@gmail.com', // Use recipient email from the data
            subject: 'Welcome to Faslane',
            react: EmailTemplate({
                name: requestBody?.name,
                company: requestBody?.company,
                email: requestBody?.company,
                contact: requestBody?.contact,
                about: requestBody?.about,
                interests: requestBody?.interests
            }), // Pass the entire data object to the template
            text: 'Welcome to Faslane',
        });
        if (error) {
            return Response.json({ error });
        }
        console.log(requestBody)
        return Response.json({ data });
    } catch (error) {
      return Response.json({ error });
    }
  }