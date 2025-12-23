# EmailJS Setup Guide

## Step 1: Get Your EmailJS Credentials

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in to your account
3. Get your credentials from:
   - **Service ID**: Email Services → Copy your service ID
   - **Template ID**: Email Templates → Copy your template ID
   - **Public Key**: Account → API Keys → Copy your public key
   - **Private Key**: Account → API Keys → Copy your private key

## Step 2: Create Environment File

Create a `.env` file in your project root (same level as `package.json`) and add:

```env
GMAIL_SERVICE=your_service_id_here
EMAIL_TEMPLATE=your_template_id_here
EMAILJS_API_PUBLIC_KEY=your_public_key_here
EMAILJS_PRIVATE_KEY=your_private_key_here
```

**Note**: We're using server-side environment variables (without `NEXT_PUBLIC_` prefix) for security. This keeps your API keys secure on the server.

## Step 3: Restart Development Server

```bash
npm run dev
```

## Step 4: Test the Contact Form

The contact form should now work properly. The email sending is handled server-side for better security.

## How It Works

- **API Route**: `app/api/contact/route.ts` handles email sending on the server
- **Client Component**: `ContactsPage.tsx` calls the API endpoint
- **Security**: Environment variables are kept server-side, not exposed to the client

## Template Parameters

The following parameters are sent to your EmailJS template:

- `from_name` - Sender's name
- `from_email` - Sender's email
- `subject` - Email subject
- `message` - Email message content
- `to_name` - Recipient name (set to "Mahmood ul Islam")

## Troubleshooting

- Make sure the `.env` file is in the project root
- Ensure all four environment variables are set correctly
- Restart the development server after adding/modifying the `.env` file
- Check server logs for any EmailJS errors
- The `.env` file is gitignored and won't be committed to version control
