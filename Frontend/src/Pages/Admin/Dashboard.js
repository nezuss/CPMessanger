import React from 'react';
import axios from 'axios';

//? Components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//! List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//! Icon button
import IconButton from '@mui/material/IconButton';
//! Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
//! Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
//! Card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function CallLoad() {}
function CallDelete() {}
function CallUpdate() {}

function Dashboard() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return (
        <div className="flex flex-col gap-4 p-4">
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className="flex flex-col gap-4 p-4">
                    <h1>Are you sure you want to delete this item?</h1>
                </div>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
            <div>
                <h2>Dashboard</h2>
                <br />
                <div className="flex flex-row gap-4">
                    <Card variant="outlined" className="bg-green/40! w-full">
                        <CardContent className="flex flex-row justify-between items-center gap-4">
                            <div className="flex flex-col gap-2">
                                <h1>74</h1>
                                <p>Online</p>
                            </div>
                            <PersonIcon sx={{ fontSize: 64 }} />
                        </CardContent>
                    </Card>
                    <Card variant="outlined" className="bg-gray/40! w-full">
                        <CardContent className="flex flex-row justify-between items-center gap-4">
                            <div className="flex flex-col gap-2">
                                <h1>224</h1>
                                <p>Offline</p>
                            </div>
                            <PersonIcon sx={{ fontSize: 64 }} />
                        </CardContent>
                    </Card>
                    <Card variant="outlined" className="bg-blue/40! w-full">
                        <CardContent className="flex flex-row justify-between items-center gap-4">
                            <div className="flex flex-col gap-2">
                                <h1>21</h1>
                                <p>Admins</p>
                            </div>
                            <AdminIcon sx={{ fontSize: 64 }} />
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div>
                <h2>List of users</h2>
                <br />
                <List disablePadding className="rounded overflow-hidden">
                    <ListItem
                        className="bg-gray-100 hover:bg-gray-200 cursor-pointer"
                        secondaryAction={
                            <span className="flex flex-row gap-2">
                                <IconButton edge="end" aria-label="edit" onClick={handleClickOpen}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
                                    <DeleteIcon />
                                </IconButton>
                            </span>
                        }
                        key="1">
                        Hello
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default Dashboard;
