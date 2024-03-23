const handlebars = require('handlebars');
const quillDeltaToHtml = require('quill-delta-to-html');

// Define a Handlebars helper to parse Quill.js JSON to HTML
handlebars.registerHelper('parseQuillJSON', (quillJson) => {
  try {
    const delta = JSON.parse(quillJson);
    const html = quillDeltaToHtml(delta.ops);
    return new handlebars.SafeString(html);
  } catch (error) {
    console.error('Error parsing Quill.js JSON:', error);
    return new handlebars.SafeString('<p>Error parsing content</p>');
  }
});

module.exports = handlebars;