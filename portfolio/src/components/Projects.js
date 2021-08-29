import { useReducer, useState, useEffect } from 'react';
import {
    Box, Card, CardContent, CardHeader, CardMedia, CardActions, Button,
    Grid, Typography, Paper, Chip, Icon, Stack, Avatar, MenuItem, Collapse
} from "@material-ui/core";
import { teal, indigo, red } from "@material-ui/core/colors";
import { ReactComponent as APIIcon } from "../images/api-avatar.svg";
import { ReactComponent as WebDevelopment } from "../images/web.svg";
import { ReactComponent as DataScience } from "../images/data-science.svg";
import { ReactComponent as Android } from "../images/android-icon.svg";
import { Carousel } from "react-bootstrap";
import projects from "../data/projects";
import Masonry from 'react-masonry-css';
import ArrowCircleDownIcon from '@material-ui/icons/ArrowCircleDown';
import ArrowCircleUpIcon from '@material-ui/icons/ArrowCircleUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const ProjectType = ({ type }) => {
    const DataScienceProjectIcon = () => (
        <Avatar sx={{ bgcolor: 'transparent', width: '3rem', p: 1 }}>
            <DataScience style={{ fill: red[900], backgroundColor: red[50] }} />
        </Avatar>
    );
    const AndroidProjectIcon = () => (
        <Avatar sx={{ bgcolor: 'transparent', width: '3rem', p: 1 }}>
        <Android style={{ fill: indigo[900], backgroundColor: indigo[50], height: '3rem' }} />
    </Avatar>
    );
    const WebProjectIcon = () => (
        <Avatar sx={{ bgcolor: 'transparent', width: '3rem', p: 1 }}>
            <WebDevelopment style={{ fill: indigo[900], backgroundColor: indigo[50], height: '3rem' }} />
        </Avatar>
    );
    const APIProjectIcon = () => (
        <Avatar sx={{ bgcolor: 'transparent', width: '3rem', p: 1 }}>
            <APIIcon style={{ fill: red[900], backgroundColor: red[50] }} />
        </Avatar>
    );

    switch (type) {
        case 'web':
            return <WebProjectIcon />
        case 'api':
            return <APIProjectIcon />
        case 'dataScience':
            return <DataScienceProjectIcon />
        case 'android':
            return <AndroidProjectIcon />
        default:
            return <></>
    }
}

const ImageSlider = ({ list }) => (
    <Carousel fade interval={null}>
        {list.map(image =>
            <Carousel.Item>
                <Box height={250} style={{ borderRadius: '50rem' }} >
                    <Box sx={{ backgroundImage: `url('${image}')`, height: '100%', width: '100%', position: 'absolute', zIndex: '-1', filter: 'blur(25px)' }} />
                    {/* 360 X 320px  */}
                    <Box component='img' src={image} sx={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                </Box>
            </Carousel.Item>
        )}
    </Carousel>
)

const ProjectStatus = ({ status }) => {
    let color = () => {
        switch (status) {
            case 'Completed': return 'info.dark'
            case 'Development': return 'warning.light'
            case 'Planned': return 'error.dark'
            default: return 'success.dark'
        }
    }
    return <Typography ml={-1} textAlign='center' fontWeight='500' color={color}><Box component='span' color='success.main'>Status: </Box>Completed</Typography>
};

const CardLinksAction = ({ item, links }) => {
    const LinkIcon = ({ location }) => {
        if (location === 'internal') return <ArrowCircleDownIcon sx={{ color: indigo[500], fontSize: '2rem' }} />
        else return <ArrowCircleUpIcon sx={{ color: indigo[500], fontSize: '2rem' }} />
    }
    return (
        <Box sx={{ ':hover': { '& :nth-child(2)': { display: 'block' } } }}>
            <LinkIcon location={item.location} />
            <Box component={Paper} elevation={4} borderRadius='0.8rem' position='absolute' right='-18px' display='none' zIndex={1000}>
                {links.map(item => <MenuItem component='a' href={item.link}><Typography mx='auto' fontWeight='500' color={teal[700]}>{item.label}</Typography></MenuItem>)}
            </Box>
        </Box>
    )
};

const ExpandedSummary = ({ data }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <Stack mt={-2} alignItems='center' size='small' pt={1}>
                <Button sx={{ borderColor: 'black', textTransform: 'capitalize' }}
                    onClick={() => setExpanded(!expanded)}>
                    <Typography color='error.dark'>More details</Typography>
                    {expanded ?
                        <ExpandLessIcon sx={{ color: 'primary.dark' }} />
                        :
                        <ExpandMoreIcon sx={{ color: 'primary.dark' }} />
                    }
                </Button>
            </Stack>
            <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ px: 3 }}>
                <Stack spacing={1}>
                    {data.map(item => <Typography variant="body2" color="text.secondary" textAlign='center'>{item}</Typography>)}
                </Stack>
            </Collapse>
        </>
    )
}

const sortAscending = (item1, item2) => item1.title < item2.title ? -1 : item1.title > item2.title ? 1 : 0
const sortDescending = (item1, item2) => item1.title < item2.title ? 1 : item1.title > item2.title ? -1 : 0
const filterStatus = (item, target) => item.status === target
const filterType = (item, target) => item.type === target

const reducer = (state, action) => {
    let newProjectList;
    switch (action.type) {
        case 'setSort':
            return {...state, sortValue:action.data}
        case 'setFilter':
            return {...state, filterValue:action.data}
        case 'sort':
            newProjectList = () => {
                switch (state.sortValue) {
                    case '1': return [...projects].sort(sortAscending)
                    case '2': return [...projects].sort(sortDescending)
                    case '3': return [...projects]
                    default: return state.projectList
                }
            };
            return {...state, projectList: newProjectList() }
        case 'filter':
            newProjectList = () => {
                switch (state.filterValue) {
                    case '1': return state.projectList.filter(item=>filterStatus(item, 'Completed'))
                    case '2': return state.projectList.filter(item=>filterStatus(item, 'Development'))
                    case '3': return state.projectList.filter(item=>filterStatus(item, 'Planned'))
                    case '4': return state.projectList.filter(item=>filterType(item, 'web'))
                    case '5': return state.projectList.filter(item=>filterType(item, 'api'))
                    default: return state.projectList
                }
            };
            return {...state, projectList: newProjectList() }
        default:
            return state
    }
};
const initialState = {
    projectList: [...projects].sort(sortAscending).filter(x=>filterStatus(x, 'Completed')),
    sortValue: 0,
    filterValue: 0
};

function Projects() {
    const [projectsState, dispatcher] = useReducer(reducer, initialState);
    
    useEffect(()=> {
        dispatcher({type:'sort'})
        dispatcher({type:'filter'})
    }, [projectsState.sortValue, projectsState.filterValue])

    return (
        <Box overflow='auto' p={3} mb='0.5rem' >
            <Stack direction='row' spacing={1} justifyContent='center' marginBottom={2}>
                <Box component='select' name='sortOption' borderRadius='0.4rem' backgroundColor='white' padding='0.2rem' color={teal[900]}
                onChange={e=> dispatcher({type:'setSort', data:e.target.value})}>
                    <Box component='option' value={0} disabled>Sort Projects By</Box>
                    <Box component='option' value={1} selected>Ascending</Box>
                    <Box component='option' value={2}>Descending</Box>
                    <Box component='option' value={3}>Suggested</Box>
                    {/* <Box component='option'>Python</Box> */}
                </Box>
                <Box component='select' name='sortOption' borderRadius='0.4rem' backgroundColor='white' padding='0.2rem' color={indigo[900]} onChange={e=> dispatcher({type:'setFilter', data:e.target.value})}>
                    <Box component='option' value={0} disabled>Filter Projects By</Box>
                    <Box component='option' value={1} selected>Completed</Box>
                    <Box component='option' value={2}>Development</Box>
                    <Box component='option' value={3}>Planned</Box>
                    <Box component='option' value={4}>Web Projects</Box>
                    <Box component='option' value={5}>API Projects</Box>
                    <Box component='option' value={6}>Data Science Projects</Box>
                    <Box component='option' value={7}>Android Projects</Box>
                </Box>
            </Stack>

            <Masonry style={{display:'flex'}} breakpointCols={{ default: 4, 1459: 3, 1101: 2, 725: 1 }}maxWidth='90rem' mx='auto' >
                {projectsState.projectList.map(item =>
                    <Box p={1} position='relative' display='flex' justifyContent='center'>
                        <Card component={Paper} elevation={5} sx={{ borderRadius: '1rem', maxWidth: 360, minWidth: 330 }}>
                            <CardHeader
                                // Project Avatar
                                avatar={<ProjectType type={item.type} />}
                                // Project Title
                                title={<Typography fontWeight='500' color='success.dark' ml={-1} textAlign='center'>{item.title}</Typography>}
                                // Project Status
                                subheader={<ProjectStatus status={item.status} />}
                                // Links Menu Button
                                action={<CardLinksAction item={item} links={item.links} />}
                            />
                            {/* Images  */}
                            <CardMedia><ImageSlider list={item.images} /></CardMedia>
                            {/* Summary  */}
                            <CardContent component={Stack} spacing={1}>
                                {item.summary.map(item =>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>{item}</Typography>
                                )}
                            </CardContent>
                            <ExpandedSummary data={item.expandedSummary} />
                            {/* Key Words */}
                            <CardActions>
                                <Grid container spacing={0.6} sx={{ height: '5rem', overflowY: 'auto' }} flexWrap='wrap' justifyContent='center' alignItems='center'>
                                    {item.keywords.map(keyword =>
                                        <Grid item>
                                            <Chip label={keyword} color='primary' variant='outlined' size='small'
                                                sx={{ ':hover': { backgroundColor: 'primary.main', color: 'white' } }} />
                                        </Grid>
                                    )}
                                </Grid>
                            </CardActions>
                        </Card>
                    </Box>
                )}
            </Masonry>
        </Box>
    )
};

export default Projects;