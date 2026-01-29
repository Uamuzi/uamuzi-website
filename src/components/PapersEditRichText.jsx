import React from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

function PapersEditRichText({ value, onChange }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          "heading",
          "|",

          "bold",
          "italic",
          "underline",
          "strikethrough",
          "code",
          "subscript",
          "superscript",

          "|",
          "link",
          "blockQuote",
          "codeBlock",

          "|",
          "bulletedList",
          "numberedList",
          "outdent",
          "indent",

          "|",
          "alignment:left",
          "alignment:center",
          "alignment:right",
          "alignment:justify",

          "|",
          "insertTable",

          "|",
          "undo",
          "redo",
        ],
        image: {
          upload: {
            types: [],
          },
        },
      }}
      data={value}
      onChange={(event, editor) => onChange(editor.getData())}
    />
  )
}

export default PapersEditRichText
