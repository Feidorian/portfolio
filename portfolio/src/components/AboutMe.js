import {Box, Grid, Icon, Paper, Stack, Typography, Divider, Chip} from "@material-ui/core";
import Masonry from 'react-masonry-css';
import avatar from "../images/profilePic.jpg";
import { red, indigo, teal } from '@material-ui/core/colors';
import { profile, generalInfo, personalQuote, background, interests, Hobbies } from "../data/aboutMe";


function AboutMe() {
    return (
        <Box overflow='auto' >
            <Box sx={{maxWidth: '60rem', mx: 'auto' }}>

                <Masonry breakpointCols={{ default: 2, 816: 1 }} style={{display: 'flex' }}>
                    {/* profile card  */}
                    <Box p={0.5}>
                        <Paper component={Box} elevation={3} mx='auto' p={1} maxWidth='25rem' sx={{ borderRadius: '0.5rem', flexGrow: 0.2 }}>
                            <Stack direction='row'>
                                <Box component='img' src={avatar} width='9rem' height='11rem' borderRadius='0.5rem' border='1px solid #d3d3d3' p={10 / 12} />
                                <Stack flexGrow='1' justifyContent='center' spacing={1}>
                                    {profile.map(item =>
                                        <Typography textAlign='center' fontWeight='600' fontSize={item.fontSize} color={item.color}>{item.content}</Typography>
                                    )}
                                </Stack>
                            </Stack>
                        </Paper>
                    </Box>
                    {/* general info card  */}
                    <Box p={0.5}>
                        <Paper component={Box} elevvation={3} p={2} maxWidth='30rem' mx='auto'>
                            <Stack spacing={2}>
                                {generalInfo.map((item, index) =>
                                    <>
                                        {Boolean(index) && <Divider />}
                                        <Stack direction='row' justifyContent='space-between'>
                                            <Stack direction='row' spacing={1} alignItems='center'>
                                                <Icon sx={{ color: teal[900] }}>{item.icon}</Icon>
                                                <Typography fontSize='1.2rem' fontWeight='500' color={teal[900]}>{item.header}</Typography>
                                            </Stack>
                                            <Typography fontSize='1.2rem'>{item.content}</Typography>
                                        </Stack>
                                    </>
                                )}
                            </Stack>
                        </Paper>
                    </Box>
                    {/* Personal Quote  */}
                    <Box p={0.5}>
                        <Paper component={Box} elevation={3} borderRadius='0.5rem' maxWidth='30rem' mx='auto' sx={{ backgroundColor: indigo[900], color: 'white' }}>
                            <Typography sx={{ textAlign: 'center', p: '0.4rem', fontStyle: 'italic' }}>{personalQuote}</Typography>
                        </Paper>
                    </Box>
                    <Paper />
                    {/* Background */}
                    <Box p={1}>
                        <Paper elevation={3} component={Stack} spacing={1} alignItems='center' p={1} maxWidth='30rem' mx='auto' sx={{ borderRadius: '0.5rem', backgroundColor: 'white' }}>
                            <Typography fontSize='1.3rem' fontWeight={600} color={indigo[900]}>{background.title}</Typography>
                            <Typography textAlign='center' fontWeight={500}>{background.content}</Typography>
                        </Paper>
                    </Box>
                    {/* Interests  */}
                    <Box p={1}>
                        <Paper elevation={3} component={Stack} alignItems='center' p={1} maxWidth='30rem' mx='auto' sx={{ borderRadius: '0.5rem', backgroundColor: 'white' }}>
                            <Typography fontSize='1.3rem' fontWeight={500} color='#1A237E'>{interests.title}</Typography>
                            <Grid container justifyContent='center' spacing={1} flexWrap='wrap'>
                                {interests.content.map(content =>
                                    <Grid item>
                                        <Chip component={Grid} item color='primary' sx={{ fontSize: '1rem', pl: '4px', color: '#1A237E', borderColor: '#1A237E' }}
                                            icon={<Icon component='img' src={content.icon} />}
                                            label={content.item} variant='outlined' />
                                    </Grid>
                                )}
                            </Grid>
                        </Paper>
                    </Box>
                    <Paper />
                    {/* Hobbies  */}
                    <Box p={0.5}>
                        <Paper elevation={3} component={Stack} alignItems='center' p={1} elevation={2} maxWidth='30rem' mx='auto' sx={{ borderRadius: '0.5rem', backgroundColor: 'white' }}>
                            <Typography fontSize='1.3rem' fontWeight={500} color={red[900]}>{Hobbies.title}</Typography>
                            <Grid container justifyContent='center' spacing={1} flexWrap='wrap'>
                                {Hobbies.content.map(content =>
                                    <Grid item>
                                        <Chip item sx={{ fontSize: '1rem', color: '#B71C1C', pl: '4px', borderColor: '#B71C1C' }}
                                            icon={<Icon component='img' src={content.icon} />}
                                            label={content.item} variant='outlined' />
                                    </Grid>
                                )}
                            </Grid>
                        </Paper>
                    </Box>
                </Masonry>
            </Box>
        </Box>

    )
}

export default AboutMe;