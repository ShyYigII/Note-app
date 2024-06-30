import { NoteAddOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  List,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLoaderData,
  useParams,
  useSubmit,
  useNavigate,
} from "react-router-dom";
import moment from "moment";

function NoteList() {
  const { folder } = useLoaderData();

  const navigate = useNavigate();

  const { noteId, folderId } = useParams();

  const [activeNoteId, setActiveNoteId] = useState(noteId);

  const submit = useSubmit();
  const handleAddNewNote = () => {
    submit(
      {
        content: "",
        folderId,
      },
      { method: "post", action: `/folders/${folderId}` }
    );
  };

  useEffect(
    () => {
      if (noteId) {
        setActiveNoteId(noteId);
        return;
      }
      console.log(folder.notes[0]);
      if (folder?.notes?.[0]) {
        navigate(`note/${folder.notes[0].id}`);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [noteId, folder.notes]
  );

  return (
    <>
      <Grid container height="100%">
        <Grid
          item
          xs={4}
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "#F0EBE3",
            height: "100%",
            overflowY: "auto",
            padding: "10px",
            textAlign: "left",
          }}
        >
          <List
            subheader={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Notes</Typography>
                <Tooltip title="Add Note">
                  <IconButton onClick={handleAddNewNote}>
                    <NoteAddOutlined />
                  </IconButton>
                </Tooltip>
              </Box>
            }
          >
            {folder.notes.map(({ id, content, updatedAt }) => {
              return (
                <Link
                  key={id}
                  to={`note/${id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setActiveNoteId(id);
                  }}
                >
                  <Card
                    sx={{
                      mb: "5px",
                      background: id === noteId ? "rgb(255 211 140)" : null,
                    }}
                  >
                    <CardContent
                      sx={{ "&:last-child": { pb: "10px" }, padding: "10px" }}
                    >
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          marginBottom: "3px",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `${content.substring(0, 30) || "Empty"}`,
                        }}
                      ></div>
                      <Typography sx={{ fontSize: "10px" }}>
                        {moment(updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={8}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}

export default NoteList;
