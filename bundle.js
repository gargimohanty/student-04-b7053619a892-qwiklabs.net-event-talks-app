const fs = require('fs');
const path = require('path');

const htmlFilePath = path.join(__dirname, 'index.html');
const cssFilePath = path.join(__dirname, 'style.css');
const jsFilePath = path.join(__dirname, 'script.js');

try {
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
    const cssContent = fs.readFileSync(cssFilePath, 'utf8');
    const jsContent = fs.readFileSync(jsFilePath, 'utf8');

    // Inline CSS
    htmlContent = htmlContent.replace('<style id="inlined-css"></style>', `<style>${cssContent}</style>`);

    // Inline JavaScript
    htmlContent = htmlContent.replace('<script id="inlined-js"></script>', `<script>${jsContent}</script>`);

    fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
    console.log('Successfully bundled HTML, CSS, and JS into index.html');
} catch (error) {
    console.error('Error bundling files:', error);
}
