import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const initialText =
  '# Hello World \n## new line \n[FreeCodeCamp](https://freecodecamp.org) \ninline code `<div>test</div>`\n ```\nthis is a multiline code \n const arrowFunction= () =>{console.log("Arrow Function")}\n console.log(arrowFunction)\n``` \nwe have list item to \n- one \n- two \n>a blockquote \n>>other \n \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) \n I just love **bold text**.';

const Textarea = () => {
  const [text, setText] = useState(initialText);

  return (
    <>
      <h3>Editor</h3>
      <textarea
        name="editor"
        id="editor"
        onChange={(e) => setText(e.target.value)}
      >
        {text}
      </textarea>
      <h3>Preview</h3>
      <div id="preview">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </>
  );
};

export default Textarea;
