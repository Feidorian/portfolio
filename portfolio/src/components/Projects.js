import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, CardActions, Grid, Typography, Paper, IconButton, Chip, Icon } from "@material-ui/core";
import { teal, indigo } from "@material-ui/core/colors"
import NearMeIcon from '@material-ui/icons/NearMe';
import { Carousel } from "react-bootstrap";
import projects from "../data/projects";

const ImageSlider = ({ list }) => (
    <Carousel fade >
        {list.map(image =>
            <Carousel.Item style={{borderRadius:'0.6rem'}}>
                <Box sx={{  backgroundImage:`url(${image})`, backgroundSize:'fill',display: 'flex', alignItems: 'center', width:'350px', maxWidth:'350px', height: '350px', borderRadius:'0.6rem'}}>
                    {/* 364 X 345px  */}
                <Icon component='img' src={image} sx={{objectFit:'contain', width:'100%', height:'100%', backdropFilter:'blur(15px)', borderRadius:'0.9rem'
            }}  />
                </Box>
            </Carousel.Item>
        )}
    </Carousel>
)

function Projects() {
    return (
        <Box overflow='auto' p={3} mb='0.5rem'>
            <Grid container justifyContent='center' flexWrap='wrap'>
                {projects.map(item =>
                    <Grid item flex='0'>
                        <Card component={Paper} elevation={5} sx={{borderRadius:'1rem', px:'5px',width:'fit-content'}}>
                            <CardHeader
                                avatar={item.icon}
                                title={item.title}
                                subheader={item.subtitle}
                                action={
                                    <IconButton component='a' href={item.link} target='_blank' sx={{backgroundColor:teal[50], ':hover':{backgroundColor:teal[200]}}}>
                                        <NearMeIcon sx={{ color: indigo[500], fontSize: '2rem'}} />
                                    </IconButton>
                                }>

                            </CardHeader>
                            <CardMedia >
                                <ImageSlider list={item.images} />
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" textAlign='center'>{item.summary}</Typography>
                            </CardContent>
                            <CardActions >
                                <Grid container spacing={0.5} flexWrap='wrap' justifyContent='center'>
                                    {item.keywords.map(keyword =>
                                        <Grid item><Chip label={keyword} color='primary' variant='outlined' size='small' 
                                        sx={{':hover':{backgroundColor:'primary.main', color:'white'}}}/></Grid>
                                    )}


                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
};

export default Projects;