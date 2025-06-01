# Inner Essence Therapy Website

A professional, modern website for Inner Essence Therapy - a psychotherapy practice providing individual, group, and family therapy services, wellness workshops, and speaking engagements.

## Features

- **Modern Design**: Clean, professional design with a calming color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Comprehensive Services**: Showcases all therapy services offered
- **Contact Forms**: Interactive contact form for easy client communication
- **Workshop Information**: Detailed information about wellness workshops and speaking engagements
- **Crisis Resources**: Important mental health crisis support information
- **Professional Branding**: Consistent branding throughout the site

## Services Highlighted

- Individual Therapy
- Group Therapy
- Family Therapy
- Wellness Workshops
- Speaking Engagements
- Consultation Services

## Technology Stack

- **Next.js 15**: React framework for production
- **React 19**: Latest React features
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **JavaScript**: No TypeScript as requested

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd inneressence
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.js          # Navigation header
│   │   ├── Hero.js            # Hero section
│   │   ├── Services.js        # Services showcase
│   │   ├── About.js           # About section
│   │   ├── Workshops.js       # Workshops & speaking engagements
│   │   ├── Contact.js         # Contact form & information
│   │   └── Footer.js          # Site footer
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   └── page.js                # Home page
```

## Customization

### Colors

The site uses a professional blue and gray color scheme. You can customize colors by modifying the Tailwind classes in the components.

### Content

Update the content in each component file to match your specific practice information:

- Contact information in `Header.js` and `Footer.js`
- Service descriptions in `Services.js`
- Workshop details in `Workshops.js`
- About content in `About.js`

### Images

Replace placeholder gradients with actual images by:

1. Adding images to the `public` folder
2. Using Next.js `Image` component
3. Updating the image sources in components

## Key Components

### Header

- Responsive navigation
- Contact information display
- Mobile-friendly hamburger menu

### Hero Section

- Compelling headline and call-to-action
- Service highlights
- Professional imagery area

### Services

- Comprehensive service listings
- Feature descriptions
- Call-to-action buttons

### About

- Professional credentials
- Company values
- Trust-building elements

### Workshops

- Workshop schedules and details
- Speaking engagement information
- Registration capabilities

### Contact

- Contact form with validation
- Business information
- Crisis support resources
- Insurance information

### Footer

- Complete site navigation
- Contact details
- Crisis resources
- Legal links

## Best Practices Implemented

- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO**: Proper meta tags and structured content
- **Performance**: Optimized images and efficient loading
- **User Experience**: Intuitive navigation and clear calls-to-action
- **Mobile-First**: Responsive design prioritizing mobile users
- **Professional Appearance**: Clean design appropriate for healthcare

## Deployment

This project can be deployed to:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any hosting service supporting Node.js

## License

This project is created for Inner Essence Therapy. All rights reserved.

## Support

For technical support or customization requests, please contact the development team.

---

**Note**: This website template includes placeholder contact information. Please update all contact details, addresses, and business information before deploying to production.
