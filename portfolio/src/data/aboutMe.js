import MachineLearning from "../images/brain.svg";
import AI from "../images/artificial-intelligence.svg";
import Investing from "../images/profits.svg";
import WebDevelopment from "../images/web-programming.svg";
import MobileDevelopment from "../images/app-development.svg";
import Simulation from "../images/interactive.svg";
import UIDesign from "../images/graphic-design.svg";
import Movies from "../images/movies.svg";
import Gaming from "../images/game-controller.svg";
import Money from "../images/money.svg";
import { red, indigo, teal } from '@material-ui/core/colors';

export const profile = [
    { content: 'Brian Ojoh Mile', fontSize: '1.5rem', color: teal[900] },
    { content: 'Software Developer', fontSize: '1.1rem', color: indigo[900] },
    { content: 'Employment Status:', fontSize: '1.1rem', color: teal[900] },
    { content: 'Available!', fontSize: '1.2rem', color: red[900] }
]
export const generalInfo = [
    { header: 'Full Name', icon: 'face', content: 'Brian T. Ojoh Mile' },
    { header: 'Phone Number', icon: 'smartphone', content: '(240) 524-0631' },
    { header: 'Email', icon: 'email', content: 'contact@feidorian.dev' },
    { header: 'Degree', icon: 'receipt', content: 'BS Computer Science' },
    { header: 'Alma Mater', icon: 'school', content: 'University of Maryland' }
];

export const personalQuote = "Programming to me is the multitudes of points where imagination meets reality. The multitude \
of points when I gaze over fragments of code and Exclaim to \
myself: I IMAGINED that, I BUILT that, and I made it USEFUL.";

export const background = {
    title:'Background',
    content: "'I am a Software Developer with a Bachelor's degree in Computer Science from the University of Maryland College Park. \
    I Specialize in Web Development, with proficiency in libraries such as React, Bootstrap, Tailwind & Material UI. \
    I Subspecialize in mobile app development (particularly android App Development with Kotlin). \
    I also have some DataScience Experience: Jupyter, Docker, Data Visualization(seaborn, matplotlib), \
    Data Management(panda, sql, csv, json, html tables, etc), & Data Modeling(machine learning models).'"
}

export const interests = {
    title: 'Interests',
    content: [
    {icon:MachineLearning, item:'Machine Learning'},
    {icon:AI, item:'Artificial Intelligence'},
    {icon:WebDevelopment, item:'Web Development'},
    {icon:MobileDevelopment, item:'Mobile Development'},
    {icon:Simulation, item:'Discrete Event Simulation'}
]
};

export const Hobbies = {
    title:'Hobbies',
    content: [
        {icon:Investing, item:'Investing'},
        {icon:UIDesign, item:'UI Design'},
        {icon:Movies, item:'Movies/TV Shows'},
        {icon:Gaming, item:'Casual Gaming' },
        {icon:Money, item:'Financial Management' }
    ]
}