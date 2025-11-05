# Personal Website

A minimal, clean personal website built with HTML, CSS, and JavaScript.

## Quick Start

1. Open `index.html` in your browser to preview locally
2. Customize the content with your information
3. Deploy to Netlify or Vercel (instructions below)

## Customization

### Update Your Information

Edit `index.html` and replace the following placeholders:

- **Name**: Replace "Your Name" in the header and title
- **Tagline**: Update the tagline with your role/description
- **Bio**: Write your personal bio in the "About Me" section
- **Projects**: Add your actual projects (you can add or remove project cards)
- **Contact Info**: Update all contact links with your actual email, GitHub, LinkedIn, Twitter, etc.

### Styling

The website uses a minimal, clean design. If you want to customize colors or styles, edit `styles.css`.

## Deployment

### Option 1: Deploy to Netlify

1. **Sign up** at [netlify.com](https://www.netlify.com)
2. **Drag and drop** your project folder into Netlify's deploy interface
3. **Done!** Your site will be live at `your-site-name.netlify.app`

#### Using Netlify CLI (Alternative)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your project directory
cd personal-website

# Deploy
netlify deploy --prod
```

### Option 2: Deploy to Vercel

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
3. **Navigate to your project** and deploy:
   ```bash
   cd personal-website
   vercel
   ```
4. Follow the prompts, and your site will be live at `your-site-name.vercel.app`

#### Using Vercel Dashboard (Alternative)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Add New Project"
3. Import from Git or upload your files
4. Click "Deploy"

### Option 3: GitHub Pages (Bonus)

If you want to use GitHub Pages:

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings → Pages
4. Select your main branch as the source
5. Your site will be live at `yourusername.github.io/repository-name`

## Adding a Custom Domain

Once deployed, both Netlify and Vercel make it easy to add a custom domain:

- **Netlify**: Go to Domain Settings → Add custom domain
- **Vercel**: Go to Project Settings → Domains → Add

Follow their guides to update your DNS settings with your domain registrar.

## File Structure

```
personal-website/
├── index.html      # Main HTML file
├── styles.css      # Styling
└── README.md       # This file
```

## Features

- Responsive design (works on mobile, tablet, and desktop)
- Clean, minimal aesthetic
- Easy to customize
- No build process required
- Fast loading times
- SEO-friendly structure

## Future Enhancements

Consider adding:
- A blog section
- Dark mode toggle
- Project images/screenshots
- Animations with JavaScript
- Contact form
- Analytics tracking

## License

Feel free to use this template for your own personal website!
