import { Box } from "@mui/material";

const Rightbar = () => {
    return (
        <Box 
        sx={{
            backgroundColor:"red",
            display: { xs: "none", sm: "block" } 
        }}
        flex={1}
        p={2}>Rightbar</Box>
    );
}
 
export default Rightbar;