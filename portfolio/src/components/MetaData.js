import { Paper, Typography, Stack, Box } from "@material-ui/core";



function MetaData() {
    return (
        <Box p={2} overflow='auto'>
        <Paper elevation='3' component={Stack} spacing={2} sx={{ maxWidth:480, mx:'auto', p: 2, borderRadius:'0.5rem'}}>
            {/* <Box>
                <Typography fontSize='1.6rem' fontWeight='500' color='#1A237E' textAlign='center'>About</Typography>
                <Typography textAlign='center'>
                    This website was developed as a react Application, built and deployed through github pages, and routed to the above domain: 
                    <Box component='span' color='green'> feidorian.dev.</Box> 
                </Typography>
                <Typography textAlign='center'>
                    The CSS implementation consists mostly of Material UI Components, with a few instances of  React-Bootstrap and Vanilla CSS.
                </Typography>
            </Box> */}

            <Box>
                <Typography fontSize='1.6rem' fontWeight='500' color='#1A237E' textAlign='center'>Credits</Typography>
                <Typography fontSize='1.2rem' color='#1A237E' textAlign='center'>Icons</Typography>
                <Typography textAlign='center'>
                    FlatIcons: Icons by
                    <Box component='a' href="https://www.freepik.com" target='_blank' display='inline'> Freepik </Box>
                    From
                    <Box component='a' href="https://www.flaticon.com/" target='_blank' display='inline'> FlatIcons</Box>.
                </Typography>
                <Typography textAlign='center'>
                    Material Icons: Icons by
                    <Box component='a' href="https://next.material-ui.com/components/material-icons/" target='_blank' display='inline'> Material UI</Box>.
                </Typography>
                <Typography textAlign='center'>
                    Dev Icons: Icons by
                    <Box component='a' href="https://devicon.dev" target='_blank' display='inline'> DevIcon.dev</Box>.
                </Typography>
                <Typography textAlign='center'>
                    FontAwesome Icons: Icons by
                    <Box component='a' href="https://fontawesome.com" target='_blank' display='inline'> FontAwesome.com</Box>.
                </Typography>
            </Box>
        </Paper>
        </Box>
    )
}

export default MetaData;