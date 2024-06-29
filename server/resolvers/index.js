import fakeData from "../fakeData/index.js"

const resolvers = {
    Query: {
      folders: () => {
        return fakeData.folders;
      },
      folder : (parent, args)=>{
        const folderId = args.folderId
        console.log('folder', folderId)
        console.log('argfodler', args);
  
        return fakeData.folders.find(folder => folder.id === folderId)
  
      },
      note : (parent, args)=>{
  
          const noteId = args.noteId;
          
  
          return fakeData.notes.find(note => note.id === noteId)
  
      }
     
    },
    Folder: {
      author: (parent, args) => {
        const authorId = parent.authorId;
        return fakeData.author.find((author) => author.id === authorId);
      },
      notes: (parent,arg)=>{
        return fakeData.notes.filter(note => note.folderId === parent.id)
      }
    },
  };
  
  export default resolvers;