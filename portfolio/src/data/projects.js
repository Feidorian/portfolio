import {Avatar, Typography, Icon} from '@material-ui/core';
import {red, indigo} from '@material-ui/core/colors';
import {ReactComponent as WebDevelopment} from "../images/web-programming.svg";
import NearMeIcon from '@material-ui/icons/NearMe';
import ArrowCircleDownIcon from '@material-ui/icons/ArrowCircleDown';
import {ReactComponent as DatScienceIcon} from "../images/data-science-avatar.svg";
import {ReactComponent as APIIcon} from "../images/api-avatar.svg";

const projects = [

    // this portfolio
    {
        icon: <Avatar sx={{ bgcolor: 'transparent', width:'3rem', height:'3rem'}}><WebDevelopment style={{fill:red[900], backgroundColor:red[50], margin:6}}/></Avatar>,
        //</Avatar><Avatar sx={{bgcolor:indigo[50], width:'3rem', height:'3rem'}}><WebDevelopment style={{padding:6}}/></Avatar>
        linkIcon:<ArrowCircleDownIcon sx={{ color: indigo[500], fontSize: '2rem' }} />,
        title: <Typography color='success.dark' textAlign='center'>Portfolio</Typography>,
        subtitle: <Typography fontSize='0.9rem' textAlign='center' sx={{ textDecoration: 'underline' }}>feidorian.dev</Typography>,
        link: "https://feidorian.dev",
        summary: 
        <span>
            Portfolio (feidorian.dev) is a publicly-hosted web-app designed to share employment-relevant information about myself, in addition to serving as  proof of concept of my abilities.
            <br/><br/>
            The app was developed as a React Application, built & deployed through github pages, and then routed to its residing domain url.
            <br/><br/>
            The app is fully responsive, with a mobile-first UI designed to be intuitive, easily navigable & asthetic.
            <br/><br/>
            The CSS implementation consists mostly of Material UI Components, with a few instances of React-Bootstrap and Vanilla CSS.
        </span>,
        images: []
            ,
        keywords: [,'React', 'JavaScript', 'HTML', 'CSS', 'Material UI', 'React BootStrap', 'React Router', 'Github Pages']

    },

    // API Weather APP

    {
        icon: <Avatar sx={{ bgcolor: 'transparent'}}><APIIcon style={{fill:red[900], backgroundColor:red[50]}}/></Avatar>,
        linkIcon:<NearMeIcon sx={{ color: indigo[500], fontSize: '2rem' }} />,
        title: <Typography color='success.dark'>API Weather App</Typography>,
        subtitle: <Typography fontSize='0.9rem' sx={{ textDecoration: 'underline' }}>APIWeatherApp.feidorian.dev</Typography>,
        link: "https://apiweatherapp.feidorian.dev",
        summary: "API Weather APP is a functional live weather application built on a backend powered by the Google Places, AWS Lambda, and Open Weather API's.",
        images: [0,1,2,3].map(i => require(`../images/apiweatherapp/${i}.png`).default)
            ,
        keywords: ['Google Places API', 'OpenWeather API', 'AWS Lambda', 'React', 'React Bootstrap', 'Material UI', 'JavaScript', 'HTML', 'CSS',  ]

    },

    // Rotten tomatoes analysis

    {
        icon: <Avatar sx={{bgColor:'transparent'}}><DatScienceIcon style={{backgroundColor:indigo[50], fill:indigo[900]}}/></Avatar>,
        linkIcon:<NearMeIcon sx={{ color: indigo[500], fontSize: '2rem' }} />,
        title: <Typography color='success.dark'>Rotten Tomatoes Analysis</Typography>,
        subtitle: <Typography fontSize='0.9rem' sx={{ textDecoration: 'underline' }}>rottentomatoes.feidorian.dev</Typography>,
        link: "https://rottentomatoes.feidorian.dev",
        summary: 
        <span>
            What are movie critics? Are they still needed in an ever increaing information-abundant society? Are they strong predictors of movie viewer choices? 
            This data analysis projects uses machine learning to hypothesis the importance of Rotten Tomatoes movie critics as predictors of the site's audience ratings.  
        </span>,
        images: [0].map(i => require(`../images/rottentomatoes/${i}.png`).default)
            ,
        keywords: ['Machine Learning', 'Data Science', 'Bootstrap', 'Kaggle Jupyter Env', 'JavaScript', 'HTML', 'CSS']

    }

];

export default projects;