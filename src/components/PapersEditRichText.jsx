import React, {useEffect, useState } from "react"

function PapersEditRichText({ value, onChange }) {
  const [Editor, setEditor] = useState(null)

  useEffect(() => {
    Promise.all([
      import("@ckeditor/ckeditor5-react"),
      import("@ckeditor/ckeditor5-build-classic"),
    ]).then(([ckeditor, classicEditor]) => {
      setEditor({
        CKEditor: ckeditor.CKEditor,
        ClassicEditor: classicEditor.default,
      })
    })
  }, [])

  if (!Editor) {
    return <p>loading editor</p>
  }

  const { CKEditor, ClassicEditor } = Editor
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
      onChange={(_, editor) => onChange(editor.getData())}
    />
  )
}

export default PapersEditRichText
