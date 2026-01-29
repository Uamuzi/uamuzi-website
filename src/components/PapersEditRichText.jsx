import React from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"


function PapersEditRichText({ value, onChange }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData() // HTML string
        onChange(data)
      }}
    />
  )
}

export default PapersEditRichText
