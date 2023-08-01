import React, { useState } from "react";
import Preview from "./Preview";

const Textarea = () => {
  const [text, setText] = useState();

  const initialText =
    text?.length == null || 0
      ? '# Hello World \n## new line \n[FreeCodeCamp](https://freecodecamp.org) \ninline code `<div>test</div>`\n ```\nthis is a multiline code \n const arrowFunction= () =>{console.log("Arrow Function")}\n console.log(arrowFunction)\n``` \nwe have list item to \n- one \n- two \n>a blockquote \n>>other \n \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) \n I just love **bold text**.'
      : { text };

  return (
    <>
      <form>
        <div className="header-editor">Editor</div>
        <textarea id="editor" onChange={(e) => setText(e.target.value)}>
          {initialText}
        </textarea>
      </form>
      <Preview text={text?.length == null || 0 ? initialText : text} />
    </>
  );
};

export default Textarea;
