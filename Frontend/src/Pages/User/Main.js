import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

//? Components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//! List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Main() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <div className="flex">
                <List>
                    <ListItem className="flex flex-col gap-4 p-4 w-full">
                        <p>Username</p>
                    </ListItem>
                    <ListItem className="flex flex-col gap-4 p-4 w-full hover:pointer">
                        <p>Username</p>
                    </ListItem>
                </List>
            </div>
            { id && <div>

            </div> }
        </>
    )
}

export default Main;
