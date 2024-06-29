import {Box, Card, CardContent, Grid, List,Typography} from '@mui/material'
import { useState } from 'react';
import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';

function NoteList() {

    const  {folder} = useLoaderData();


    const {noteId} = useParams();

    const [activeNoteId, setActiveNoteId] = useState(noteId);
    
    return (
        <>
       
       <Grid container height='100%'>
      <Grid
        item
        xs={3}
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: '#F0EBE3',
          height: '100%',
          overflowY: 'auto',
          padding: '10px',
          textAlign: 'left',
        }}
      >
        <List
         subheader={
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>Notes</Typography>
               
            </Box>
          }
        >
         {folder.notes.map(({id, content})=>{
            return (<Link
                key={id}
                to={`note/${id}`}
                style={{textDecoration: 'none'}}
                onClick={()=>{setActiveNoteId(id)}}
            >
                <Card sx={{pb: '5px', background: id === noteId ? 'rgb(255 211 140)' : null}} >
                    <CardContent sx={{'&:last-child': {pb: '10px'}, padding: '10px'}}>
                        {content}
                    </CardContent>
                </Card>

            </Link>)
         })}   

        </List>
        </Grid>
<Grid item xs={9}><Outlet/></Grid>
        </Grid>

       </>
    );
}

export default NoteList;