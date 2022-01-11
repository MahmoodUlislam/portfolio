import React from "react";
import { useQuill } from "react-quilljs";

export default function Quill(...props) {
  const { quill, quillRef } = useQuill();
  props.name = quillRef;
  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(`<h3>Enter your message...</h3>`);
    }
  }, [quill]);
  //console.log(quill); // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }
  return (
    <div
      style={{
        width: "60%",
        // height: "100px",
        marginTop: "2vh",
        backgroundColor: "#ff0072",
        color: "#ffffff",
      }}
    >
      <div ref={quillRef} />
    </div>
  );
}
