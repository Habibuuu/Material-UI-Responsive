import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [Mode, setMode] = useState("light")
  const darkThemes = createTheme({
    palette: {
      mode: Mode,
    },
  });

  return (
    <ThemeProvider theme={darkThemes}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Sidebar setMode={setMode} Mode={Mode} />
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
