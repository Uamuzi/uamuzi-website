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
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote",
          "|",
          "undo",
          "redo",
        ],
        removePlugins: [
          "Image",
          "ImageToolbar",
          "ImageUpload",
          "ImageCaption",
          "ImageStyle",
          "ImageResize",
        ],
      }}
      data={value}
      onChange={(event, editor) => onChange(editor.getData())}
    />
  )
}

export default PapersEditRichText
