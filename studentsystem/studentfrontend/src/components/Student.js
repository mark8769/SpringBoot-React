// Student.js: Component
// Adding student form

// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

export default function Student() {
    
    const paperStyle = {padding: '50px 20px', width: 600, margin:"20px auto"}
    const[nameVar, setName]=useState("") // State management for name field. (Name state)
    const[addressVar, setAddress]=useState("") // State management for address field. (Address State)

    return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color: "blue"}}><u>Add Student</u></h1>
            <Box component="form" sx={{'& > :not(style)': { m: 1},}} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
            value={nameVar} // Using var declared in const
            onChange={(e) => setName(e.target.value)} // when we write something (event), save text into nameVar
            />
            <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
            value={addressVar}
            onChange={(e) => setName(e.target.value)}
            />
            </Box>
        </Paper>
        <h2>Watch as values change through state management with useState</h2>
        {nameVar}
        {addressVar}
    </Container>
    );
}
