import { TextField, Button, Container, Hidden, Typography, Alert } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import axios from 'axios';
import NavBarFixed from "../pages/navBarFixed";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SuccessAlert from "./alert";
import Copyright from "../pages/copyright";

export default function Create() {
    let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const postData = () => {
    axios.post(`https://jsonplaceholder.typicode.com/posts`, {
            title,
            body,
            userId
        }).then(() => {
            return(<SuccessAlert></SuccessAlert>
            )})
            .then(() => {
            console.log('back')
            navigate('/');
        })
  };
  return (
      
      <div>
          <NavBarFixed></NavBarFixed>
          <Container maxWidth="sm">
          <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Add new post
            </Typography>
            </Container>
    <FormControl
      sx={{ alignContent: "center", display: "flex", ml: 35, mr: 35, mt: 5 }}
    >
      {/* <TextFields
        required
        id="outlined-required"
        label="Required" variant="outlined"/> */}
      <Box display="flex" flexDirection="column">
        <TextField
          sx={{ display: "none" }}
          onChange={(e) => setUserId(e.target.value+1)}
        ></TextField>
        <TextField
          sx={{ mt: 1, mb: 1 }}
          required
          id="txtTitle"
          variant="outlined"
          name="txtTitle"
          label="Title"
          width="100"
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <TextField
          sx={{ mt: 1, mb: 1 }}
          required
          id="txtBody"
          variant="outlined"
          name="txtBody"
          label="Body"
          width="100"
          multiline
          minRows="8"
          onChange={(e) => setBody(e.target.value)}
        ></TextField>
      </Box>
      <Box display="block" sx={{ margin: "8px auto 0" }}>
        <Button variant="contained" color="success" onClick={postData} type='submit' sx={{mr:3}}>
          Create
        </Button>
        <Link to="/" style={{ textDecoration: 'none',ml:3 }}>
        <Button variant="outlined" color="primary">        
          Back
        </Button></Link>
      </Box>
    </FormControl>
    <Copyright/>
    </div>
  );
}
