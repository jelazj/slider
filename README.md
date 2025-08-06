# Responsive Image Slider

A fully responsive, animated image slider built with HTML, SCSS (CSS), jQuery, and vanilla JavaScript. Features smooth transitions, text overlays, and interactive pagination dots. Ideal for hero sections, landing pages, or modern portfolios.

Live Demo: [s-slider.netlify.app](https://s-slider.netlify.app/)



#Features

- Fullscreen responsive design
- Smooth image zoom & text animations
- Interactive pagination dots
- Autoplay with pause-on-hover
- Mobile-friendly layout with adaptive font sizes



## Project Structure

slider/
├── index.html # Main HTML structure
├── style.css # Compiled CSS styles (based on SCSS)
├── script.js # jQuery-based slider logic
└── images/ # Slider images


🛠️ Technologies Used

- HTML5
- SCSS (compiled to CSS)
- jQuery 3.7.1
- JavaScript (ES6+)


#How It Works?

- Only one slide is active at a time.
- Every 12 seconds, the active slide changes with a zoom-in effect and text animation.
- Pagination dots reflect and control the current slide.
- Hovering over the slider pauses the autoplay.
- Clicking a dot instantly jumps to that slide.



#Run Locally

-No build tools or package managers needed.

# Step 1: Clone the Repository

bash
git clone https://github.com/jelazj/slider.git
cd slider
Step 2: Open in Browser
Just open index.html in your browser:
Make sure the images/ folder is present in the same directory with the correct image filenames.

# Customization
To change images or titles:

Replace files in the images/ folder

Update the <img> src and <h2> titles in index.html

To adjust slide duration:

Change the 12000ms (12 seconds) interval in script.js

# To modify animations:

Edit the @keyframes in style.scss

Example Slides:

1. Inspiration

2. Innovation

3. Creativity

4. Cheers

# License
This project is open-source and free to use.

# Credits
Developed by @jelazj
Hosted on Netlify and GitHub