export default {
  author: [
    {
      id: '1',
      name: "Dung",
    },
    {
      id: '2',
      name: "Minh",
    },
  ],

  folders: [
    {
      id: '1',
      name: "Folder1",
      createAt: "6/27/2024",
      authorId: 1,
    },
    {
      id: '2',
      name: "Folder2",
      createAt: "7/27/2024",
      authorId: 2,
    },
  ],
  notes :[
    {
      id: '1',
      content :'<p>go to supermarket</p>',
      folderId: '1'
    },
    {
      id: '2',
      content :'<p>go to park</p>',
      folderId: '2'
    },
    {
      id: '3',
      content :'<p>go to school</p>',
      folderId: '1'
    }


  ]
};
