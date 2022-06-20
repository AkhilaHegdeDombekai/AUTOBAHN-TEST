import NavBarFixed from "../pages/navBarFixed";
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Hidden,
  Typography,
  Box,
  FormControl,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Copyright from "../pages/copyright";

export default function Update() {
    let history = useNavigate();
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  useEffect(() => {
      
    setID(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setBody(localStorage.getItem("body"));
  }, []);

  const updateData = () => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title,
      body,
      userId,
    }).then(() => {
        return(<Alert severity="success">Updated Successfuly!</Alert>
        ).then(
            history('/')
        );
        
    });
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
          Update
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
          {/* <TextField
            sx={{ display: "none" }}
            //onChange={(e) => setUserId(e.target.value + 1)}
            value={id}
          ></TextField> */}
          <TextField
            sx={{ mt: 1, mb: 1 }}
            required
            id="txtTitle"
            variant="outlined"
            name="txtTitle"
            label="Title"
            width="100"
            value={title}
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
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></TextField>
        </Box>
        <Box display="block" sx={{ margin: "8px auto 0" }}>
          <Button
            variant="contained"
            color="success"
            onClick={updateData}
            type="submit"
            sx={{ mr: 3 }}
          >
            Update
          </Button>
          <Link to="/" style={{ textDecoration: "none", ml: 3 }}>
            <Button variant="outlined" color="primary">
              Back
            </Button>
          </Link>
        </Box>
      </FormControl>
      <Copyright/>
    </div>
  );
}
