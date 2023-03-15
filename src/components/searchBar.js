import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';


export default function SearchBar() {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault()

        if (origin.length === 0) {
            toast.error("Name has left Blank!");
        }
        else if (destination.length === 0) {
            toast.error("Last name has left Blank!");
        }
        else {
            handleApi();
        }
    }




    function handleApi() {


        const urlOrigin = 'http://localhost:3001/src/api/getOrigin.php';
        let originData = new FormData();
        originData.append('origin', origin);

        fetch(urlOrigin, {
            method: 'POST',
            body:  originData,
        })
            .then(response => response.text())
            .then(data => {
                if (data) {
                    console.log(data);
               
                    const urlDestination = 'http://localhost:3001/src/api/getDestination.php';
                    let destinationData = new FormData();
                    destinationData.append('destination', destination);
            
                    fetch(urlDestination, {
                        method: 'POST',
                        body: destinationData,
                    })
                        .then(response => response.text())
                        .then(data => {
                            if (data) {
                                console.log(data);
                            } else {
                                toast.error(data);
                            }
            
                        })
               
                } else {
                    toast.error(data);
                }

            })


       

    }






    return (
        <Box sx={{ flexGrow: 1, marginTop: 3 }} >
            <ToastContainer />
            <AppBar  sx={{  alignItems: 'center', marginTop:8,  background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <Box component="form" sx={{ mt: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    value={origin}
                                    id="Origin"
                                    label="ORIGIN"
                                    name="Origin"
                                    onChange={(e) => setOrigin(e.target.value)}
                                    color="secondary"  
                                    focused
                                     
                                      />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    
                                    required
                                    fullWidth
                                    value={destination}
                                    name="destination"
                                    label="DESTINATION"
                                    type="text"
                                    id="destination"
                                    onChange={(e) => setDestination(e.target.value)}
                                    color="secondary"        
                                    background= "beige"        
                                    focused      

                                />
                                
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    color="secondary"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleSubmit}
                                >
                                    Check
                                </Button>
                            </Grid >
                        </Grid>
                    </Box>
                </Toolbar>
            </AppBar>

        </Box>
    );
}