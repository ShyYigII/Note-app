import { graphqlRequest } from "./request";

export const notesLoader = async ({ params: { folderId } }) => {
  const query = `query Folder($folderId: String) {
                    folder(folderId: $folderId) {
                        id
                        name
                        notes {
                        id
                        content
                        updatedAt
                        }
                }
                    }

                `;
  const data = await graphqlRequest({
    query,
    variables: {
      folderId,
    },
  });

  return data;
};

export const noteLoader = async ({ params: { noteId } }) => {
  const query = `query Note($noteId: String) {
  note(noteId: $noteId) {
    id
    content
    
  }
}
               `;
  const data = await graphqlRequest({
    query,
    variables: {
      noteId,
    },
  });

  return data;
};

export const addNewNote = async ({ params, request }) => {
  const newNote = await request.formData();

  const formDataObj = {};
  newNote.forEach((value, key) => (formDataObj[key] = value));

  console.log("formDataObj", formDataObj);

  const query = `mutation AddNewNote($content :String!, $folderId:ID!){
    addNote(content: $content, folderId: $folderId){
      id    
      content
    }
  
  }`;

  const { addNote } = await graphqlRequest({
    query,
    variables: formDataObj,
  });

  return addNote;
};

export const updateNote = async ({ params, request }) => {
  const updatedNote = await request.formData();

  const formDataObj = {};
  updatedNote.forEach((value, key) => (formDataObj[key] = value));

  console.log("formDataObj", formDataObj);

  const query = `mutation AddNewNote($id: String!,$content :String!){
    updateNote(content: $content, id: $id){
      id    
      content
    }
  
  }`;

  const { updateNote } = await graphqlRequest({
    query,
    variables: formDataObj,
  });

  return updateNote;
};
