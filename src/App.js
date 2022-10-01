import React,{useState} from 'react';
import Markdown from 'marked-react';

const App = () => {
  const [text,setText] = useState(`
  ![Dwinatech Logo](https://yt3.ggpht.com/ytc/AKedOLRCB8l9dwq0qVxZIb7C7b1G5lvYlFIYzymD1Dkx=s176-c-k-c0x00ffffff-no-rj)
  
  # Hello, 
  ## You'r welcom at
  ### DwinaTech Channel
  
  
  \`<div>Inline code</div>\`
  
  \`\`\`
  const multipleLineCode = (param) => {
      if(param) {
          return param
      }
  }
  \`\`\`
  
  **Some bold text**
  
  [Visit My Channel](https://www.youtube.com/channel/UCSS0kFyF7KWjE19Rj9PgNQA)
  
  > Block Quot
  
  1. First list item
  2. Second list item
  `)

  return (
    <div>
     <div>
      <textarea onChange={(e) => setText(e.target.value)} id="editor" >{text}</textarea>

     </div>
     <div id="preview">
      <Markdown>{text}</Markdown>

     </div>

    </div>
  )
}

export default App
