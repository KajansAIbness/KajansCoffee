# Milkman London - Free Treat Redemption Form

A modern, responsive form for Milkman London's complimentary treat program. Located in Euston at 134 Drummond Street, Milkman is Euston's favorite ice cream and dessert takeaway destination.

## Features

- Clean, minimalist design matching Milkman's modern branding
- Cool blue color scheme reflecting the ice cream focus
- Responsive layout optimized for all devices
- Form validation for name, email, and phone number
- Integration with n8n webhook for automated form processing
- Built with Next.js and Tailwind CSS
- Showcases full range of offerings (ice cream, desserts, crepes, drinks)

## About Milkman London

Milkman London is a vibrant ice cream and dessert takeaway spot located at 134 Drummond Street, Euston, NW1 2PA. 

### Our Offerings:
- **Soft-serve & Scooped Ice Cream** - Their core product
- **Sweet Treats** - Including cakes and waffles
- **Crepes** - Both savory and sweet styles
- **Smoothies** - Fresh and fruity options
- **Specialty Hot Drinks** - For example, Karak Chai

### Connect With Us:
- **Website**: [milkmanlondon.co.uk](https://milkmanlondon.co.uk/)
- **Instagram**: [@milkmanlondon](https://www.instagram.com/milkmanlondon/)
- **Facebook**: [Milkman London](https://www.facebook.com/profile.php?id=100071274365934)

## Technical Details

### Webhook Integration
The form submits to an n8n workflow endpoint for automated processing:
- **Endpoint**: `https://c56e-144-82-8-167.ngrok-free.app/webhook/free-coffee`
- **Method**: POST
- **Fields**: name, email, phone

### Form Fields
- **name**: Customer's full name (required, text input)
- **email**: Customer's email address (required, email validation)
- **phone**: Customer's phone number (required, tel input with pattern validation)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/yourusername/milkman-london-form.git
   cd milkman-london-form
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the form

## Customization

The form can be easily customized:
- Update colors in the Tailwind classes
- Replace the logo image in `/public/images/`
- Modify the webhook endpoint in the form action
- Adjust the offerings and messaging

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fmilkman-london-form)

## License

[MIT](LICENSE)
