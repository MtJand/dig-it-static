# Dig It Gardening Website

A modern, professional website for Dig It Gardening - a local gardening company serving Leeds, Harrogate, York and Ripon. The website establishes brand legitimacy and provides multiple contact options for potential clients.

## Project Structure

```
gardening-website/
├── public/
│   ├── index.html             # Main HTML document
│   ├── README.md              # Project documentation
│   ├── assets/
│   │   ├── banner.jpg         # Hero section background image
│   │   ├── design.jpg         # Landscape design service image
│   │   ├── garden1.jpg        # Gallery image 1
│   │   ├── garden2.jpg        # Gallery image 2
│   │   ├── garden3.jpg        # Gallery image 3
│   │   ├── garden4.jpg        # Gallery image 4
│   │   ├── garden5.jpg        # Gallery image 5
│   │   ├── garden6.jpg        # Gallery image 6
│   │   ├── logo.jpg           # Company logo
│   │   ├── maintenance.jpg    # Garden maintenance service image
│   │   ├── owner.jpg          # Image of the owner/operator
│   │   └── reno.jpg           # Garden renovation service image
│   ├── scripts/
│   │   └── main.js           # JavaScript for interactive features
│   └── styles/
│       └── main.css          # Complete CSS styling with responsive design
```

## Features

### Core Sections
- **Hero Section**: Eye-catching banner with company branding, service area coverage, and key statistics
- **Services Section**: Three main service categories with dedicated imagery and descriptions
- **Testimonials Section**: Customer reviews with star ratings and Google rating display
- **Gallery Section**: Interactive image gallery showcasing completed projects
- **About Section**: Personal introduction to the owner with professional imagery
- **Contact Section**: Multiple contact methods including phone, social media links

### Interactive Features
- **Responsive Navigation**: Mobile-friendly hamburger menu with smooth animations
- **Image Gallery Modal**: Click-to-expand gallery images (desktop only)
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Hover Effects**: Enhanced button and card interactions
- **Mobile Optimization**: Optimized layouts and touch-friendly interfaces

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd gardening-website
   ```

2. Open the website:
   ```bash
   # Simply open the index.html file in your browser
   open public/index.html
   
   # Or serve locally (optional)
   cd public
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. For development:
   - Edit `public/index.html` for content changes
   - Modify `public/styles/main.css` for styling updates
   - Update `public/scripts/main.js` for interactive features
   - Replace images in `public/assets/` as needed

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile Safari (iOS 11+)
- Chrome Mobile

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.