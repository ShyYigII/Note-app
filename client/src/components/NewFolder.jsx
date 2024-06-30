import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { addNewFolder } from "../utils/folderUtils";
import { useNavigate, useSearchParams } from "react-router-dom";

function NewFolder() {
  const [open, setOpen] = useState(false);
  const [serachParams, setSearchParams] = useSearchParams();
  const popupName = serachParams.get("popup");
  const nav = useNavigate();

  const handleOpenPopup = () => {
    //setOpen(true);
    setSearchParams({ popup: "add-folder" });
  };
  const [newFolderName, setNewFolderName] = useState("");

  const handleNewFolderName = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleClose = () => {
    // setOpen(false);

    setNewFolderName("");
    nav(-1);
  };

  const handleAddNewFolder = async () => {
    const { addFolder } = await addNewFolder({ name: newFolderName });
    console.log(addFolder);
    handleClose();
  };

  useEffect(() => {
    if (popupName === "add-folder") {
      setOpen(true);
      return;
    }
    setOpen(false);
  }, [popupName]);

  return (
    <div>
      <Tooltip title="Add Folder" onClick={handleOpenPopup}>
        <IconButton size="small">
          <CreateNewFolderOutlined sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={newFolderName}
            onChange={handleNewFolderName}
          ></TextField>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNewFolder}>OK</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NewFolder;
