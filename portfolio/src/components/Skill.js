import { Box, Chip, Grid, Icon, Paper, Typography } from "@material-ui/core";
import Masonry from 'react-masonry-css';
import { data } from "../data/skills";

function Skills() {

    return (
        <Box backgroundColor='re' sx={{ overflowY: 'auto', p: 1 }}>
            <Box maxWidth='70rem' mx='auto' backgroundColor='blu'>
                    <Masonry style={{display:'flex'}} breakpointCols={{default:3, 500:1, 800:2}}>
                        {data.map(item =>
                            <Box p={0.8} mx='auto' display={item.data.length ? 'block' : 'none'}>
                                <Paper component={Box} elevation='2' sx={{ borderRadius: '0.5rem', p: 1, mx: 'auto', maxWidth: 400 }}>
                                    <Typography textAlign='center' fontSize='1.3rem' fontWeight='500' color={item.color}>{item.category}</Typography>
                                    <Grid container spacing={1} justifyContent='center' mt={0.5}>
                                        {item.data.map(data =>
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
























        // <Box display='flex' justifyContent='center' overflow='auto' width='100%' backgroundColor='blu' p={1}>
        //     <Box component={Grid} container width='60rem' backgroundColor='purpl' spacing={3} flexWrap='wrap'>
        //         <Grid item width={{ xs: 1, sm: 5 / 8 }}>
        //             <Box sx={{ backgroundColor: 'transparent' }}>
        //                 <Typography mx='auto' component={Paper} fontSize='1.7rem' fontWeight='600' backgroundColor='white' width='fit-content' borderRadius='0.5rem'
        //                     p={0.4} color={indigo[900]} mb={2}>
        //                     Hard Skills
        //                 </Typography>

        //                 <Stack spacing={1}>
        //                     {/* Categories  */}
        //                     {hardData.map(data =>

        //                         <Stack alignItems='center'>
        //                             <Paper sx={Object.assign(data.sx || {}, { borderRadius: '1rem', px: 1, py: 0.4, width: 'fit-content' })} >
        //                                 <Typography textAlign='center' color='white' fontSize='1.2rem' fontWeight='600'>{data.category}</Typography>
        //                                 <Grid container spacing={1} p={1} flexWrap='wrap' justifyContent='center'>
        //                                     {data.data.map(item =>
        //                                         // items 
        //                                         <Grid item>
        //                                             <Chip item color='primary' sx={{
        //                                                 fontSize: '1.2rem', color: 'white', borderColor: 'black', backgroundColor: 'black',
        //                                                 borderRadius: '0.3rem'
        //                                             }}
        //                                                 icon={<Icon className={item.icon}
        //                                                     sx={item.iconName ? { width: 'fit-content', fontSize: '1.2rem', fontWeight: 600, mb: '0.4rem' } : {}}>{item.iconName}</Icon>}
        //                                                 label={item.item} variant='outlined' />
        //                                         </Grid>
        //                                     )}
        //                                 </Grid>
        //                             </Paper>
        //                         </Stack>

        //                     )}
        //                 </Stack>
        //             </Box>
        //         </Grid>
        //         <Grid item width={{ xs: 1, sm: 3 / 8 }} >
        //             <Typography component={Paper} mx='auto' fontSize='1.7rem' fontWeight='600' backgroundColor='white' width='fit-content' 
        //             mb={3} borderRadius='0.5rem' p={0.4} color={purple[700]}>
        //                 Soft Skills
        //             </Typography>
        //             <Box component={Grid} container justifyContent='center' columnSpacing={0.5} rowSpacing={1} flexWrap='wrap'
        //                 borderRadius='1rem'  py={3} sx={{ background: `linear-gradient(to bottom, ${teal[900]}, ${teal[700]}, ${teal[900]})` }}>
        //                 {softData.map(data =>
        //                     <Grid item>
        //                         <Chip item color='primary' sx={{
        //                             fontSize: '1.2rem', color: 'white', borderColor: 'black', backgroundColor: 'black',
        //                             borderRadius: '0.3rem', width: 'fit-content'
        //                         }}
        //                             icon={<Icon component='img' src={data.icon} />}
        //                             label={data.item} variant='outlined' />
        //                     </Grid>
        //                 )}
        //             </Box>

        //         </Grid>
        //     </Box>
        // </Box>
    )
}

export default Skills;