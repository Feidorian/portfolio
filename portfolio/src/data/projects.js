import { Avatar, Typography, IconButton } from '@material-ui/core';
import { red, indigo, purple, teal } from '@material-ui/core/colors';
import { ReactComponent as WebDevelopment } from "../images/web.svg";
import NearMeIcon from '@material-ui/icons/NearMe';
import ArrowCircleDownIcon from '@material-ui/icons/ArrowCircleDown';
import { ReactComponent as DatScienceIcon } from "../images/data-science-avatar.svg";
import APIIcon from "../images/api-avatar.svg";
import { ReactComponent as Android } from "../images/android.svg";

/** Project Template 
    {   
        projectType: '',
        linkIcon: '',
        links: [
            {title:'', href:''}
        ],
        projecTitle: '',
        projectStatus: '',
        images: [],
        summary: [],
        expandedSummary:[],
        keyWords: []

    }
*/
const projects = [
    {
        type: 'web',
        location: 'internal',
        links: [
            { label: 'Demo Page', link: 'https://feidorian.dev' },
            { label: 'Source Code', link: 'https://github.com/Feidorian/portfolio/tree/master/portfolio' }
        ],
        title: 'My Portfolio',
        status: 'Completed',
        images: [0, 1, 2, 3, 4, 5, 6].map(i => require(`../images/portfolio/${i}.JPG`).default),
        summary: [
            "Portfolio (feidorian.dev) is a publicly-hosted web-app designed to share employment-relevant information about myself, in addition to serving as  proof of concept of my abilities."
        ],
        expandedSummary: [
            "The app was developed as a React Application, built & deployed through github pages, and then routed to its residing domain url.",
            "The CSS implementation consists mostly of Material UI Components, with a few instances of React-Bootstrap and Vanilla CSS."
        ],
        keywords: ['React', 'JavaScript', 'HTML', 'CSS', 'Material UI', 'React BootStrap', 'React Router', 'Github Pages']
    },

    {
        type: 'api',
        location: 'external',
        links: [
            { label: 'Demo Page', link: 'https://apiweatherapp.feidorian.dev' },
            { label: 'Source Code', link: 'https://github.com/Feidorian/api-weather-app/tree/main/apiweatherapp/apiweatherapp' }
        ],
        title: 'API Weather App',
        status: 'Completed',
        images: [0, 1, 2, 3].map(i => require(`../images/apiweatherapp/${i}.png`).default),
        summary: [
            "API Weather APP is a functional live weather application built on a backend powered by the Google Places, AWS Lambda, and Open Weather API's."
        ],
        expandedSummary: [],
        keywords: ['Google Places API', 'OpenWeather API', 'AWS Lambda', 'Web API', 'React', 'React Bootstrap', 'Material UI', 'JavaScript', 'HTML', 'CSS']
    },

    {
        type: 'dataScience',
        location: 'external',
        links: [
            { label: 'Demo Page', link: 'https://rottentomatoes.feidorian.dev' }
        ],
        title: 'Rotten Tomatoes Analysis',
        status: 'Completed',
        images: [0].map(i => require(`../images/rottentomatoes/${i}.png`).default),
        summary: [
            "This data analysis project uses a machine learning model to hypothesis on the importance of Rotten Tomatoes movie critics as predictors of the site's audience ratings."
        ],
        expandedSummary: [
            "What are movie critics? Are they still needed in an ever increasing information-abundant society? Are they strong predictors of movie viewer choices? "
        ],
        keywords: ['Machine Learning', 'Data Science', 'Bootstrap', 'Kaggle Jupyter Env', 'JavaScript', 'HTML', 'CSS']
    },

    {
        type: 'android',
        location: 'external',
        links: [
            { label: 'APK File', link: 'https://github.com/Kindwords/kindwordsapp/blob/main/apk/KindWords.apk' },
            { label: 'Source Code (zip)', link: 'https://github.com/Kindwords/kindwordsapp' }
        ],
        title: 'Kind Words App',
        status: 'Completed',
        images: [0, 1, 2, 3, 4].map(i => require(`../images/kindwords/${i}.png`).default),
        summary: [
            "KindWords is an anonymous letter exchange app that lets users write anonymous letters expressing their struggles, fears and words of encouragement during the COVID Pandemic."
        ],
        expandedSummary: [
            "KindWords was created as a final project for the University of Maryland Course: Programming of Handheld Devices (CMSC 436).",
            "Its primary feautures include the ability to:",
            "* Publicly post anonymous cards (letters) that can be replied to by other users of the app",
            "* Report users who post offensive content"
        ],
        keywords: ['Android Application', 'Kotlin', 'Android Studio']
    },


    {
        type: 'web',
        location: 'external',
        links: [
            { label: 'Demo Page', link: '#' },
            { label: 'Source Code', link: '#' }
        ],
        title: 'Binary Tree Visualization',
        status: 'Development',
        images: [],
        summary: [
            "Binary Tree Visualization is a visual interactive tutorial application that expolores the structure of, and several algorithms performed on binary trees."
        ],
        expandedSummary: [
            "The goal of the application is to make learning about binary tree algorithms more fun and gamelike."
        ],
        keywords: ['Kaboom.js?', 'HTML Canvas?', 'JavaScript', 'CSS', 'HTML']
    }, 

    {
        type: 'web',
        location: 'external',
        links: [
            { label: 'Demo Page', link: '#' },
            { label: 'Source Code', link: '#' }
        ],
        title: 'Descrete Event Simulator',
        status: 'Planned',
        images: [],
        summary: [
            ""
        ],
        expandedSummary: [],
        keywords: []
    }, 

    {
        type: 'web',
        location: 'external',
        links: [
            { label: 'Demo Page', link: '#' },
            { label: 'Source Code', link: '#' }
        ],
        title: 'MIPS Pipeline Simulator',
        status: 'Planned',
        images: [],
        summary: [
            ""
        ],
        expandedSummary: [],
        keywords: []
    }, 

]

export default projects;