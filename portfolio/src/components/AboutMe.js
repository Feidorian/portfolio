import {
    Box, Grid, Icon, List, ListItem, ListItemText, SvgIcon,
    ListItemIcon, Paper, Stack, Typography, Divider, Chip, Avatar, Card
} from "@material-ui/core";
import Masonry from 'react-masonry-css'
import avatar from "../images/profilePic.jpg";
import { red, indigo, teal } from '@material-ui/core/colors';
import AI from "../images/artificial-intelligence.svg";
import Investing from "../images/profits.svg";
import MachineLearning from "../images/brain.svg";
import WebDevelopment from "../images/web-programming.svg";
import MobileDevelopment from "../images/app-development.svg";
import Simulation from "../images/interactive.svg";
import UIDesign from "../images/graphic-design.svg";
import Movies from "../images/movies.svg";
import Gaming from "../images/game-controller.svg";
import Money from "../images/money.svg";

function AboutMe() {
    return (
        <Box overflow='auto' >
            <Box sx={{ backgroundColor: 're', maxWidth: '60rem', mx: 'auto' }}>

                <Masonry breakpointCols={{ default: 2, 816:1 }} style={{ backgroundColor: 'blac', display: 'flex' }}>
                    {/* profile card  */}
                    <Box p={0.5}>
                        <Paper component={Box} elevation={3} mx='auto' p={1} maxWidth='25rem' sx={{ borderRadius: '0.5rem', flexGrow: 0.2 }}>
                            <Stack direction='row'>
                                <Box component='img' src={avatar} width='9rem' height='11rem' borderRadius='0.5rem' border='1px solid #d3d3d3' p={10 / 12} />
                                <Stack flexGrow='1' justifyContent='center' spacing={1}>
                                    {[
                                        {content:'Brian Ojoh Mile', fontSize:'1.5rem', color:teal[900]},
                                        {content:'Software Developer', fontSize:'1.1rem', color:indigo[900]},
                                        {content:'Employment Status:', fontSize:'1.1rem', color:teal[900]},
                                        {content:'Available!', fontSize:'1.2rem', color:red[900]}
                                    ].map(item => 
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
                                {[
                                    { header: 'Full Name', icon: 'face', content: 'Brian T. Ojoh Mile' },
                                    { header: 'Phone Number', icon: 'smartphone', content: '(240) 524-0631' },
                                    { header: 'Email', icon: 'email', content: 'contact@feidorian.dev' },
                                    { header: 'Degree', icon: 'receipt', content: 'BS Computer Science' },
                                    { header: 'Alma Mater', icon: 'school', content: 'University of Maryland' }
                                ].map((item, index) =>
                                    <>
                                        {Boolean(index) && <Divider />}
                                        <Stack direction='row' justifyContent='space-between'>
                                            <Stack direction='row' spacing={1} alignItems='center'>
                                                <Icon sx={{color:teal[900]}}>{item.icon}</Icon>
                                                <Typography fontSize='1.2rem' fontWeight='500' color={teal[900]}>{item.header}</Typography>
                                            </Stack>
                                            <Typography fontSize='1.2rem'>{item.content}</Typography>
                                        </Stack>
                                    </>
                                )}
                            </Stack>
                        </Paper>
                    </Box>
                    {/* personal quote card  */}
                    <Box p={0.5}>
                    <Paper component={Box} elevation={3} borderRadius='0.5rem' maxWidth='30rem' mx='auto' sx={{ backgroundColor: indigo[900], color: 'white' }}>
                        <Typography sx={{ textAlign: 'center', p: '0.4rem', fontStyle: 'italic' }}>
                            "Programming to me is the multitudes of points where imagination meets reality. The multitude
                            of points when I gaze over fragments of code and Exclaim to
                            myself: I IMAGINED that, I BUILT that, and I made it USEFUL."
                        </Typography>
                    </Paper>
                    </Box>

                    <Paper />
                    <Box p={1}>
                    <Paper elevation={3} component={Stack} spacing={1} alignItems='center' p={1} maxWidth='30rem' mx='auto' sx={{ borderRadius: '0.5rem', backgroundColor: 'white' }}>
                        <Typography fontSize='1.3rem' fontWeight={600} color={indigo[900]}>Background</Typography>
                        <Typography textAlign='center' fontWeight={500}>
                            I am a Software Developer with a Bachelor's degree in Computer Science from the University of Maryland College Park.
                            I Specialize in Web Development, with proficiency in libraries such as React, Bootstrap, Tailwind & Material UI.
                            I Subspecialize in mobile app development (particularly android App Development with Kotlin).
                            I also have some DataScience Experience: Jupyter, Docker, Data Visualization(seaborn, matplotlib),
                            Data Management(panda, sql, csv, json, html tables, etc), & Data Modeling(machine learning models).
                        </Typography>
                    </Paper>
                    </Box>
                    
                    <Box p={1}>
                    <Paper elevation={3} component={Stack} alignItems='center' p={1} maxWidth='30rem' mx='auto' sx={{ borderRadius: '0.5rem', backgroundColor: 'white' }}>
                        <Typography fontSize='1.3rem' fontWeight={500} color='#1A237E'>Interests</Typography>
                        <Grid container justifyContent='center' spacing={1} flexWrap='wrap'>
                            <Grid item>
                                <Chip component={Grid} item color='primary' sx={{ fontSize: '1rem', pl: '4px', color: '#1A237E', borderColor: '#1A237E' }}
                                    icon={<Icon component='img' src={MachineLearning} />}
                                    label='Machine Learning' variant='outlined' />
                            </Grid>
                            <Grid item>
                                <Chip component={Grid} item sx={{ fontSize: '1rem', color: '#1A237E', pl: '4px', borderColor: '#1A237E' }}
                                    icon={<Icon component='img' src={AI} />}
                                    label='Artificial Intelligence' variant='outlined' />
                            </Grid>
                            <Grid item>
                                <Chip component={Grid} item color='primary' sx={{ fontSize: '1rem', pl: '4px', color: '#1A237E', borderColor: '#1A237E' }}
                                    icon={<Icon component='img' src={WebDevelopment} />}
                                    label='Web Developement' variant='outlined' />
                            </Grid>
                            <Grid item>
                                <Chip component={Grid} item color='primary' sx={{ fontSize: '1rem', pl: '4px', color: '#1A237E', borderColor: '#1A237E' }}
                                    icon={<Icon component='img' src={MobileDevelopment} />}
                                    label='Mobile Developement' variant='outlined' />
                            </Grid>
                            <Grid item>
                                <Chip component={Grid} item color='primary' sx={{ fontSize: '1rem', pl: '4px', color: '#1A237E', borderColor: '#1A237E' }}
                                    icon={<Icon component='img' src={Simulation} />}
                                    label='Discrete Event Simulation' variant='outlined' />
                            </Grid>
                        </Grid>
                    </Paper>
                    </Box>

                    <Paper />

                    <Box p={0.5}>
                    <Paper elevation={3} component={Stack} alignItems='center' p={1} elevation={2} maxWidth='30rem' mx='auto' sx={{ borderRadius: '0.5rem', backgroundColor: 'white' }}>
                        <Typography fontSize='1.3rem' fontWeight={500} color={red[900]}>Hobbies</Typography>
                        <Grid container justifyContent='center' spacing={1} flexWrap='wrap'>
                            <Grid item>
                                <Chip item sx={{ fontSize: '1rem', color: '#B71C1C', pl: '4px', borderColor: '#B71C1C' }}
                                    icon={<Icon component='img' src={Investing} />}
                                    label='Investing' variant='outlined' />
                            </Grid>
                            <Grid item>
                                <Chip component={Grid} item sx={{ fontSize: '1rem', color: '#B71C1C', pl: '4px', borderColor: '#B71C1C' }}
                                    icon={<Icon component='img' src={UIDesign} />}
                                    label='UI Design' variant='outlined' />
                            </Grid>
                            <Grid item>
                                <Chip component={Grid} item color='primary' sx={{ fontSize: '1rem', color: '#B71C1C', pl: '4px', borderColor: '#B71C1C' }}
                                    icon={<Icon component='img' src={Movies} />}
                                    label='Movies/TV Shows' variant='outlined' />
                            </Grid>
                            <Grid item>
                                <Chip component={Grid} item color='primary' sx={{ fontSize: '1rem', color: '#B71C1C', pl: '4px', borderColor: '#B71C1C' }}
                                    icon={<Icon component='img' src={Gaming} />}
                                    label='Casual Gaming' variant='outlined' />
                            </Grid>
                            <Grid item>
                                <Chip component={Grid} item color='primary' sx={{ fontSize: '1rem', color: '#B71C1C', pl: '4px', borderColor: '#B71C1C' }}
                                    icon={<Icon component='img' src={Money} />}
                                    label='Financial Management' variant='outlined' />
                            </Grid>
                        </Grid>
                    </Paper>

                    </Box>

                </Masonry>
            </Box>
        </Box>

    )
}

export default AboutMe;