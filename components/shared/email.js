import * as React from 'react';

export const EmailTemplate = (data) => (
    <div>
        <h1>{data.name} want's to get in touch with Faslane,</h1>
        <h3>Email: {data.email}</h3>
        <h3>Contact: {data.contact}</h3>
        <h3>Business Name: {data.company}</h3>
        <h3>About Business: {data.about}</h3>
        <h3>Services Intrested: {data.joined_interests}</h3>
    </div>
);