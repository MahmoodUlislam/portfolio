# EmailJS Setup Guide

This guide will help you set up EmailJS to make the contact form functional.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Environment variables not working**: Restart your development server after adding `.env.local`
- **Email not received**: Check your spam folder and EmailJS dashboard for delivery status

## Security Notes

- The public key is safe to expose in client-side code
- Never share your private keys
- Consider rate limiting for production use
