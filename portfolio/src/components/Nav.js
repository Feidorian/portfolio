import { AppBar, Avatar, Badge, Card, Grid, Icon, IconButton,Paper, Toolbar, Typography } from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';
import { Box } from "@material-ui/system";
import wsb from '../images/wsb.png';
import generator from "element-id-generator";
import { Stack } from "@material-ui/core";
import { indigo} from '@material-ui/core/colors';
import {Paths} from "./utils";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const tabList = [
    { icon: 'user', title: 'AboutMe', badgeCount: 0, link: Paths.aboutMe },
    { icon: 'school', title: 'Education', badgeCount: 4, link: Paths.education },
    { icon: 'network-wired', title: 'Projects', badgeCount: 4, link: Paths.projects },
    { icon: 'code', title: 'Skills', badgeCount: '40', link: Paths.skills },
    { icon: 'book', title: 'Courses', badgeCount: '13', link: Paths.courses },
    { icon: 'briefcase', title: 'Work History', badgeCount: '1', link: Paths.workHistory },
    { icon: 'file', title: 'Resume', badgeCount: '1', link: Paths.resume },
    { icon: 'info', title: 'MetaData', link: Paths.metadata }
]

const defaultButtonStyle = {
    width: 'fit-content',
    backgroundColor: 'white',
    borderRadius: '0.7rem',
    color: indigo[900],
    ':hover': { backgroundColor: indigo[600], color: 'white' }
};
const selectedButtonStyle = {
    width: 'fit-content',
    backgroundColor: indigo[900],
    borderRadius: '0.7rem',
    color: 'white',
    ':hover': { backgroundColor: indigo[600], color: 'white' }
};
const TabItem = ({ data }) => {
    const location = useLocation();
    return (
        <Grid item>
            <Link to={data.link} style={{ textDecoration: 'none' }}>
                <Paper  component={Card} elevation={2} sx={location.pathname === data.link ? selectedButtonStyle : defaultButtonStyle}>
                    <Stack alignItems='center' justifyContent='center' sx={{ pt: '1rem', pb: '0.5rem', px: '1.2rem' }}>
                        <Badge badgeContent={data.badgeCount} color='error'>
                            <Icon baseClassName="fas" className={`fa-${data.icon}`} sx={{ fontSize: 'large', width: 'fit-content' }} />
                        </Badge>
                        <Typography>{data.title}</Typography>
                    </Stack>
                </Paper>
            </Link>
        </Grid>
    )
};


function Nav() {
    return (
        <>
            <AppBar color='transparent' position='static' elevation='0'>
                <Grid container columnSpacing={1}>
                    {/* nav bar */}
                    <Grid item xs={12}>
                        <Toolbar direction='row' spacing={1} justifyContent='space-between' component={Stack} py='0.2rem'
                            sx={{ backgroundImage: 'linear-gradient(180deg,  rgb(26, 35, 126),rgb(57, 73, 171),rgb(26, 35, 126))' }}>

                            <Stack direction='row' alignItems='center' spacing={0.5} >
                                <Avatar src={wsb} sx={{ mr: '0.2rem' }} sx={{ display: 'inline-block' }} />
                                <Box display='flex' flexDirection='column' justifyContent='center' textAlign='center' paddingLeft={0.3}>
                                <Typography className='colorTrans'  sx={{fontSize:{xs:'1.2rem', sm:'1.4rem'}, fontWeight:'500'}} >
                                    Brian Ojoh Mile
                                </Typography>
                                <Typography className='colorTrans'  sx={{fontSize:{xs:'1.2rem', sm:'1.4rem'}, fontWeight:'500'}}>
                                    Software Developer
                                </Typography>
                                </Box>
                            </Stack>

                            <Stack direction='row' alignItems='center'>
                                <IconButton component='a'  href='https://github.com/Feidorian' target='_blank' >
                                    <GitHubIcon sx={{color:'white', fontSize:'1.8rem', ':hover':{fontSize:'2rem'}}}/>
                                    </IconButton>
                                <IconButton component='a' href="https://www.linkedin.com/in/brian-ojoh-mile-a5a7b9154/" target='_blank'>
                                    <LinkedInIcon sx={{color:'white',fontSize:'2.1rem', ':hover':{fontSize:'2.4rem'}}}/>
                                    </IconButton>
                            </Stack>

                        </Toolbar>
                    </Grid>

                    {/* tab bar  */}
                    <Grid item container sx={{ pt: '1rem', pb:'0.5rem' }} xs={12}
                        justifyContent='center' alignItems='center' spacing={1}>
                        {tabList.map(item => <TabItem key={generator.generate()} data={item} />)}
                    </Grid>

                </Grid>
            </AppBar>
        </>
    )
}

export default Nav;