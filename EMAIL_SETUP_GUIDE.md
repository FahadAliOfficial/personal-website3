# Contact Form Email Setup Guide

This guide will help you set up email functionality for your contact form. There are several options available:

## Option 1: EmailJS (Recommended - Easy Setup)

EmailJS allows you to send emails directly from the frontend without a backend server.

### Steps:

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account (allows 200 emails/month)

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template content:

   ```
   Subject: New Contact Form Submission from {{from_name}}

   You have received a new message from your portfolio contact form:

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   Budget: {{budget}}
   Timeline: {{timeline}}

   Message:
   {{message}}

   ---
   This email was sent from your portfolio contact form.
   ```

4. **Get Your Keys**
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account > API Keys

5. **Update Environment Variables**
   - Edit `.env.local` file in your project root
   - Replace the placeholder values:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   ```

6. **Test the Form**
   - Restart your development server
   - Fill out and submit the contact form
   - Check your email inbox

## Option 2: Resend API (Server-side - More Professional)

For a more professional setup with better deliverability:

1. **Sign up for Resend**
   - Go to https://resend.com/
   - Create account (free tier: 3,000 emails/month)

2. **Add API Route**
   - Create `app/api/contact/route.ts`:

   ```typescript
   import { Resend } from 'resend';
   import { NextRequest, NextResponse } from 'next/server';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request: NextRequest) {
     try {
       const body = await request.json();
       const { name, email, message, subject, budget, timeline } = body;

       const data = await resend.emails.send({
         from: 'Portfolio Contact <noreply@yourdomain.com>',
         to: [process.env.CONTACT_EMAIL!],
         subject: `New Contact: ${subject}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Subject:</strong> ${subject}</p>
           <p><strong>Budget:</strong> ${budget}</p>
           <p><strong>Timeline:</strong> ${timeline}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>
         `,
       });

       return NextResponse.json({ success: true, data });
     } catch (error) {
       return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
     }
   }
   ```

3. **Install Resend**
   ```bash
   npm install resend
   ```

4. **Update Environment Variables**
   ```env
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your-email@example.com
   ```

## Option 3: Nodemailer with SMTP

For using your own email server:

1. **Install Nodemailer**
   ```bash
   npm install nodemailer @types/nodemailer
   ```

2. **Create API Route**
   - Similar to Resend but using Nodemailer with SMTP

3. **Environment Variables**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=your-email@example.com
   ```

## Security Notes

- Never commit your API keys to version control
- Use environment variables for all sensitive data
- Consider rate limiting for production
- Validate and sanitize form inputs
- Add CAPTCHA for spam protection

## Testing

1. Test with your own email first
2. Check spam folders
3. Test all form fields
4. Verify error handling works

Choose Option 1 (EmailJS) for the quickest setup, or Option 2 (Resend) for a more professional solution.
