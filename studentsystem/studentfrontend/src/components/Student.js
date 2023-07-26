// Student.js: Component
// Adding student form
// https://mui.com/material-ui/react-text-field/
// 

// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

export default function Student() {
    
    const paperStyle = {padding: '50px 20px', width: 600, margin:"20px auto"};
    const[name, setName]=useState(""); // State management for name field. (Name state)
    const[address, setAddress]=useState(""); // State management for address field. (Address State)

    const[students, setStudents]=useState([]) // Create empty array for students pulled from database.

    const handleClick=(e)=>{
        e.preventDefault();
        // Must match Student attribute names used in Java Code, Cant be different...
        // Or you could construct the JSON...
        // payload = {"name": nameVar, "address": addressVar}
        // Doing it the way shown below, sets the key as whatever is declared in use state...
        // E.g. {"nameVar": nameVar, "addressVar": addressVar} which won't work when unpacked in Java Code
        const student={name, address};
        console.log(student);
        console.log("Making POST request to add student")
        fetch("http://localhost:8080/student/add",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(student)
        }).then( ()=> {
            console.log("New student added");
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
        .then(res => res.json())
        .then((result) => {
            setStudents(result)
        })
    },[]) // What is this syntax???

    return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color: "blue"}}><u>Add Student</u></h1>
            <Box component="form" sx={{'& > :not(style)': { m: 1},}} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
            value={name} // Using var declared in const
            onChange={(e) => setName(e.target.value)} // when we write something (event), save text into nameVar
            />
            <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
            </Box>
        </Paper>
        <h2>Watch as values change through state management with useState</h2>
        {name}
        {address}
        //////////////////////////////////////////////////////////////
        // Showing all students
        <Paper elevation={3} style={paperStyle}>
            {students.map(student =>(
                <Paper elevation={6} style={{margin: "10px", padding: "15px", textAlign: "left"}} key={student.id}>
                    ID: {student.id}
                    Namee: {student.name}
                    Address: {student.address}
                </Paper>
            ))}
        </Paper>
        //////////////////////////////////////////////////////////////
    </Container>
    );
}
