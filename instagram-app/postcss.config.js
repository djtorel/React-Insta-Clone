const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    process.env.NODE_ENV === 'production' &&
      purgecss({
        content: ['./src/**/*.jsx', './src/**/*.js', './public/index.html'],
        css: ['./src/tailwind.css'],
        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
};
