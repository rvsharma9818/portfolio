# Email Setup Instructions

This portfolio website uses EmailJS to send emails from the contact form directly to your email address without requiring a backend server.

## Setting up EmailJS

1. **Create an EmailJS account**
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - The free tier allows 200 emails per month

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Design your email template with the following variables:
     - `{{from_name}}` - The name of the person contacting you
     - `{{from_email}}` - The email address of the person contacting you
     - `{{subject}}` - The subject of the message
     - `{{message}}` - The content of the message
   - Save your template

4. **Get your credentials**
   - Note your Service ID from the Email Services page
   - Note your Template ID from the Email Templates page
   - Get your Public Key from the Account page (under "API Keys")

5. **Update environment files**
   - Open `src/environments/environment.ts` and `src/environments/environment.prod.ts`
   - Replace the placeholder values with your actual EmailJS credentials:
     ```typescript
     export const environment = {
       production: false, // or true for environment.prod.ts
       emailjs: {
         serviceId: 'YOUR_EMAILJS_SERVICE_ID',
         templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
         publicKey: 'YOUR_EMAILJS_PUBLIC_KEY'
       }
     };
     ```

## Testing the Contact Form

After setting up EmailJS:

1. Run your application locally
2. Navigate to the contact form
3. Fill out the form and submit it
4. You should receive an email at the address you configured in your EmailJS service

## Security Considerations

- The EmailJS public key is exposed in the client-side code, but this is normal and expected
- EmailJS has built-in protections against abuse
- For additional security, you can set up domain restrictions in your EmailJS dashboard 
