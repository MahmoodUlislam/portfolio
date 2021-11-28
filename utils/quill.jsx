import React from "react";
import { useRef, useState, useEffect, RefObject } from 'react';
import { useQuill } from "react-quilljs";

export default function Quill(...props) {

 const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h3>Enter your message...</h3>');
    }
  }, [quill]);
  return (
    <div style={{width: '60%', height:'100%', marginTop:'2vh', backgroundColor:'#ff0072',color:'#ffffff'}}>
      <div ref={quillRef} />
    </div>
  );
 
}