import * as React from 'react';

interface EmailTemplateProps {
  name: string;
    company: string;
    email: string;
    contact: string;
    about: string;
    interests: string[];
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    company,
    email,
    contact,
    about,
    interests
}) => (
  <div>
    <p>
    <span>Name: {name}</span><br/>
    <span>Company: {company}</span><br/>
    <span>Email: {email}</span><br/>
    <span>Contact: {contact}</span><br/>
    <span>About: {about}</span><br/>
    <span>Interests:
        {
            interests.map((interest, index) => (
                <span key={index}>{interest}</span>
            ))
        }
    </span>
    </p>
  </div>
);
