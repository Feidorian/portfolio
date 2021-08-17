import { Box, Chip, Grid, Icon, Paper, Typography } from "@material-ui/core";
import Masonry from 'react-masonry-css';
import { data } from "../data/skills";

function Skills() {

    const sortFunc = (a, b) => a.item === b.item ? 0 : a.item < b.item ? -1 : 1;
    return (
        <Box sx={{ overflowY: 'auto', p: 1 }}>
            <Box maxWidth='70rem' mx='auto' backgroundColor='blu'>
                <Masonry style={{ display: 'flex' }} breakpointCols={{ default: 3, 500: 1, 800: 2 }}>
                    {data.map(item =>
                        <Box p={0.8} mx='auto' display={item.data.length ? 'block' : 'none'}>
                            <Paper component={Box} elevation='2' sx={{ borderRadius: '0.5rem', p: 1, mx: 'auto', maxWidth: 400 }}>
                                <Typography textAlign='center' fontSize='1.3rem' fontWeight='500' color={item.color}>{item.category}</Typography>
                                <Grid container spacing={1} justifyContent='center' mt={0.5}>
                                    {item.data.sort(sortFunc).map(data =>
                                        <Grid item>
                                            <Chip sx={{ borderRadius: '0.5rem', fontSize: '1rem', color: item.color, borderColor: item.color }}
                                                icon={<Icon component={data.icon} fill={item.color} />}
                                                label={<Typography>{data.item}</Typography>}
                                                variant='outlined' />
                                        </Grid>
                                    )}
                                </Grid>
                            </Paper>
                        </Box>
                    )}
                </Masonry>
            </Box>
        </Box>
    )
};
export default Skills;