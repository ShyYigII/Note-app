import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoot from "./ProtectedRoot";
import ErrorPage from "../pages/ErrorPage";
import NoteList from "../components/NoteList";
import Note from "../components/Note";
import {
  addNewNote,
  noteLoader,
  notesLoader,
  updateNote,
} from "../utils/noteUtils";
import { folderLoader } from "../utils/folderUtils";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

const CreateBrowserRouter = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },

      {
        element: <ProtectedRoot />,
        children: [
          {
            element: <Home />,
            path: "/",
            loader: folderLoader,
            children: [
              {
                element: <NoteList />,
                path: "folders/:folderId",
                action: addNewNote,
                loader: notesLoader,
                children: [
                  {
                    element: <Note />,
                    path: "note/:noteId",
                    action: updateNote,
                    loader: noteLoader,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default CreateBrowserRouter;
