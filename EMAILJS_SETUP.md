# EmailJS Setup Guide

## Step 1: Get Your EmailJS Credentials

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in to your account
3. Get your credentials from:
   - **Service ID**: Email Services → Copy your service ID
   - **Template ID**: Email Templates → Copy your template ID
   - **Public Key**: Account → API Keys → Copy your public key

## Step 2: Create Environment File

Create a `.env` file in your project root (same level as `package.json`) and add:

```env
EMAILJS_SERVICE_ID=your_service_id_here
EMAILJS_TEMPLATE_ID=your_template_id_here
EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Note**: We're using server-side environment variables (without `NEXT_PUBLIC_` prefix) for security. This `.env` file will be used in both development and production.

## Step 3: Restart Development Server

```bash
npm run dev
```

## Step 4: Test the Contact Form

The contact form should now work properly. The email sending is handled server-side for better security.

## How It Works

- **Server Action**: `app/actions/email.ts` handles email sending on the server
- **Client Component**: `ContactsPage.tsx` calls the server action
- **Security**: Environment variables are kept server-side, not exposed to the client

## Troubleshooting

- Make sure the `.env` file is in the project root
- Ensure all three environment variables are set (without `NEXT_PUBLIC_` prefix)
- Restart the development server after adding the file
- Check server logs for any EmailJS errors
- The `.env` file will be used in both development and production environments
