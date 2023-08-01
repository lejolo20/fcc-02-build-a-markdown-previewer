import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Preview = ({ text }) => {
  return (
    <div id="preview">
      <div className="header">Preview</div>
      <div className="preview-container">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
