import { useEffect, useState } from "react";
import {EditorState, convertFromHTML, convertToRaw,ContentState} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg'
import draftToHtml  from 'draftjs-to-html'
import { useLoaderData } from "react-router-dom";

function Note() {



    const {note} = useLoaderData();

    const [editorState, setEditorState] = useState(()=> (
        EditorState.createEmpty()
    ))

    const [rawHTML, setRawHTML] = useState(note.content);

    useEffect(()=>{
        setRawHTML(note.content);


    },[note.content])

    
  useEffect(() => {
    const blocksFromHTML = convertFromHTML(note.content)
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(state));
  }, [note.id]);


    const handleOnChange = (e)=>{
setEditorState(e)
setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())))
}
    


    return ( 
    <>
    
    <Editor
    editorState={editorState}
    onEditorStateChange={handleOnChange}
    placeholder="Write some thing"
    >

    </Editor>
    </>
    
    
    
     );
}

export default Note;