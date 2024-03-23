var quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['blockquote', 'link','code-block']
      ]
    },
    scrollingContainer: '#scrolling-container',
    placeholder: '',
    theme: 'snow'  // or 'bubble'
  });
  quill.on("text-change",function(){
    var delta=quill.getContents();
    document.getElementById("save").innerHTML=JSON.stringify(delta);

    
  });
  
const quillDeltaToHtml = require('quill-delta-to-html'); // Library to convert Quill.js JSON to HTML

// Define a Handlebars helper to parse Quill.js JSON to HTML
