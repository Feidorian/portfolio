import { Box, IconButton, Paper, Stack, Typography } from "@material-ui/core";
import { indigo, teal, deepOrange } from '@material-ui/core/colors';
import Masonry from 'react-masonry-css'
import NearMeIcon from '@material-ui/icons/NearMe';
import data from '../data/courses';

function Courses() {
    return (
        <Box  width='100%' overflow='auto' my={1} p={1}>
            <Box width='90%' mx='auto'>
                <Masonry breakpointCols={{ default: 5, 705: 1, 981: 2, 1305: 3, 1550: 4 }} style={{ display: 'flex', width: '100%' }}>
                    {data.map(item =>
                        <Box p={0.5}>
                            <Paper elevation='3' mx='auto' component={Stack} maxWidth={352} spacing={2} sx={{ p: 1, borderRadius: '0.5rem' }} >
                                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                                    <Typography>{item.code}</Typography>
                                    <Typography>{item.term}</Typography>
                                    {!!item.link &&
                                        <IconButton component='a' sx={{ backgroundColor: teal[50], ':hover': { backgroundColor: teal[200] } }}
                                            href={item.link} target='_blank'>
                                            <NearMeIcon sx={{ color: indigo[500] }} />
                                        </IconButton>
                                    }
                                </Stack>
                                <Typography textAlign='center' fontSize='1.2rem' fontWeight='500' color={teal[900]}>{item.name}</Typography>
                                <Typography textAlign='center' color={indigo[900]}>{item.summary}</Typography>
                                <Typography textAlign='center' color={deepOrange[900]} >{item.concepts}</Typography>
                            </Paper>
                        </Box>
                    )}
                </Masonry>
            </Box>
        </Box>
    )
};

export default Courses;