import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.habib.main,
        color:"#888",
        margin: 5,
        "&:hover":{
            backgroundColor:"lightblue"
        },
        "&:disabled":{
            backgroundColor:"gray",
            color:"white"
        }
  }));
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" startIcon={<Settings/>} color="secondary">Settings</Button>
      <Button variant="contained" startIcon={<Add/>} color="habib">Add New Post</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
    </Typography>
    <Button variant="contained" disabled sx={{
        backgroundColor:"skyblue",
        color:"#888",
        margin: 5,
        "&:hover":{
            backgroundColor:"lightblue"
        },
        "&:disabled":{
            backgroundColor:"gray",
            color:"white"
        }
    }}>My Button</Button>
    <BlueButton variant="contained">Another Button</BlueButton>
    </div>
  );
}

export default App;
