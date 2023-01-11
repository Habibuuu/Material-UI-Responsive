import { Box } from "@mui/material";

const Rightbar = () => {
    return (
        <Box 
            sx={{
                display: { xs: "none", sm: "block" } 
            }}
            flex={1}
            p={2}
        >
            <Box position="fixed">Hello</Box>
        </Box>
    );
}
 
export default Rightbar;