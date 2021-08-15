import {Avatar, Typography} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import apiweatherapp_1 from "../images/apiweatherapp/1.png";
import apiweatherapp_2 from "../images/apiweatherapp/1.png";

const projects = [
    {
        icon: <Avatar sx={{ bgcolor: red[500] }}>API</Avatar>,
        title: <Typography color='success.dark'>API Weather App</Typography>,
        subtitle: <Typography fontSize='0.9rem' sx={{ textDecoration: 'underline' }}>APIWeatherApp.feidorian.dev</Typography>,
        link: "https://apiweatherapp.feidorian.dev",
        summary: "API Weather APP is a functional live weather application built on a backend powered by the Google Places, AWS Lambda, and Open Weather API's.",
        images: [0,1,2,3].map(i => require(`../images/apiweatherapp/${i}.png`).default)
            ,
        keywords: ['React', 'Material UI', 'JavaScript', 'HTML', 'CSS', 'React Bootstrap', 'Google Places API', 'OpenWeather API', 'AWS Lambda']

    }
];

export default projects;