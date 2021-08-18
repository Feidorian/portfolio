import {Avatar, Typography} from '@material-ui/core';
import {red, indigo} from '@material-ui/core/colors';
import {ReactComponent as WebDevelopment} from "../images/web-programming.svg";
import NearMeIcon from '@material-ui/icons/NearMe';
import ArrowCircleDownIcon from '@material-ui/icons/ArrowCircleDown';

const projects = [

    {
        icon: <Avatar sx={{bgcolor:indigo[50], width:'3rem', height:'3rem'}}><WebDevelopment style={{padding:6}}/></Avatar>,
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
        keywords: ['React', 'Material UI', 'JavaScript', 'HTML', 'CSS', 'React Bootstrap', 'Github Pages', 'React Router']

    },

    {
        icon: <Avatar sx={{ bgcolor: red[500] }}>API</Avatar>,
        linkIcon:<NearMeIcon sx={{ color: indigo[500], fontSize: '2rem' }} />,
        title: <Typography color='success.dark'>API Weather App</Typography>,
        subtitle: <Typography fontSize='0.9rem' sx={{ textDecoration: 'underline' }}>APIWeatherApp.feidorian.dev</Typography>,
        link: "https://apiweatherapp.feidorian.dev",
        summary: "API Weather APP is a functional live weather application built on a backend powered by the Google Places, AWS Lambda, and Open Weather API's.",
        images: [0,1,2,3].map(i => require(`../images/apiweatherapp/${i}.png`).default)
            ,
        keywords: ['React', 'Material UI', 'JavaScript', 'HTML', 'CSS', 'React Bootstrap', 'Google Places API', 'OpenWeather API', 'AWS Lambda']

    },

    {
        icon: <Avatar sx={{ bgcolor: red[500] }}>API</Avatar>,
        linkIcon:<NearMeIcon sx={{ color: indigo[500], fontSize: '2rem' }} />,
        title: <Typography color='success.dark'>Rotten Tomatoes Analysis</Typography>,
        subtitle: <Typography fontSize='0.9rem' sx={{ textDecoration: 'underline' }}>APIWeatherApp.feidorian.dev</Typography>,
        link: "https://apiweatherapp.feidorian.dev",
        summary: "API Weather APP is a functional live weather application built on a backend powered by the Google Places, AWS Lambda, and Open Weather API's.",
        images: [0,1,2,3].map(i => require(`../images/apiweatherapp/${i}.png`).default)
            ,
        keywords: ['React', 'Material UI', 'JavaScript', 'HTML', 'CSS', 'React Bootstrap', 'Google Places API', 'OpenWeather API', 'AWS Lambda']

    }

];

export default projects;