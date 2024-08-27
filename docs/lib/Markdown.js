import React, { useState, useEffect } from 'react';
import { Remarkable } from 'remarkable';

function Markdown(props) {
  const [content, setContent] = useState('');
  const md = new Remarkable();

  useEffect(() => {
    fetch(props.md_file)
      .then(response => response.text())
      .then(text => {
        setContent(md.render(text));
      })
      .catch(err => console.error('Error loading the markdown file:', err));
  }, [md]);

  return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default Markdown;
