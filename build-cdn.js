const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = 'C:\\Users\\harik\\Desktop\\design-elements-cdn';
const SVGS_DIR = path.join(OUTPUT_DIR, 'svgs');

// Ensure output dirs exist
['brushes', 'splatters', 'highlighters', 'ribbons', 'doodles'].forEach(cat => {
  fs.mkdirSync(path.join(SVGS_DIR, cat), { recursive: true });
});

console.log('Generating 200+ unique design elements for Harikrishnanvkph/design-elements-cdn...');
