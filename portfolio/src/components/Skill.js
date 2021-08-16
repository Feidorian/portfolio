import { Box, Chip, Grid, Icon, Paper,Typography } from "@material-ui/core";
import { indigo, pink, teal, green, deepOrange, lightBlue, lime } from '@material-ui/core/colors';
import { ReactComponent as LeaderShip } from "../images/leadership.svg";
import { ReactComponent as Collaboration } from "../images/support.svg";
import { ReactComponent as CustomerService } from "../images/customer-service.svg";
import { ReactComponent as ProblemSolving } from "../images/puzzle.svg";
import { ReactComponent as CriticalThinking } from "../images/thinking.svg";
import { ReactComponent as Creativity } from "../images/design-thinking.svg";
import { ReactComponent as VisualThinking } from "../images/storyboard.svg";
import { ReactComponent as WorkEthic } from "../images/struggle.svg";
import { ReactComponent as Enthusiasm } from "../images/business.svg";
import { ReactComponent as Organization } from "../images/project-plan.svg";
import { ReactComponent as Python } from "../images/python-plain.svg";
import { ReactComponent as HTML } from "../images/html5-plain.svg";
import { ReactComponent as JavaScript } from "../images/javascript-plain.svg";
import { ReactComponent as CSS } from "../images/css3-plain.svg";
import { ReactComponent as C } from "../images/c-plain.svg";
import { ReactComponent as Java } from "../images/java-plain.svg";
import { ReactComponent as Kotlin } from "../images/kotlin-plain.svg";
import { ReactComponent as Ruby } from "../images/ruby-plain.svg";
import { ReactComponent as Rust } from "../images/rust-plain.svg";
import { ReactComponent as Matlab } from "../images/matlab-plain.svg";
import { ReactComponent as Ocaml } from "../images/ocaml-plain.svg";
import { ReactComponent as Express } from "../images/express-original.svg";
import { ReactComponent as Bootstrap } from "../images/bootstrap-plain.svg";
import { ReactComponent as TailwindCSS } from "../images/tailwindcss-plain.svg";
import { ReactComponent as MaterialUI } from "../images/materialui-plain.svg";
import { ReactComponent as React } from "../images/react-original.svg";
import { ReactComponent as NPM } from "../images/npm-original-wordmark.svg";
import { ReactComponent as AWSLambda } from "../images/amazonwebservices-original.svg";
import { ReactComponent as NodeJS } from "../images/nodejs-plain.svg";
import { ReactComponent as JQuery } from "../images/jquery-plain.svg";
import { ReactComponent as Jupyter } from "../images/jupyter-plain.svg";
import { ReactComponent as VSCode } from "../images/vscode-plain.svg";
import { ReactComponent as PYCharm } from "../images/pycharm-plain.svg";
import { ReactComponent as Intellij } from "../images/intellij-plain.svg";
import { ReactComponent as Android } from "../images/android-plain.svg";
import { ReactComponent as Mongodb} from "../images/mongodb-plain.svg";
import { ReactComponent as MySql} from "../images/mysql-plain.svg";
import { ReactComponent as PostgreSql} from "../images/postgresql-plain.svg";
import { ReactComponent as Firebase} from "../images/firebase-plain.svg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Assembly = ({ fill }) =>
    <svg width='24px' height='24px' stroke={fill}>
        <text x='4' y='18' fill={fill} style={{ fontSize: '16px', marginRight: '8px' }}>AS</text>
    </svg>

export const data = [
    {
        category: 'Soft Skills', color: indigo[900], data: [
            { item: "Leadership", icon: LeaderShip },
            { item: "Collaboration", icon: Collaboration },
            { item: "Customer Service", icon: CustomerService },
            { item: "Problem Solving", icon: ProblemSolving },
            { item: "Critical Thinking", icon: CriticalThinking },
            { item: "Creativity", icon: Creativity },
            { item: "Visual Thinking", icon: VisualThinking },
            { item: "Work Ethic", icon: WorkEthic },
            { item: "Enthusiasm", icon: Enthusiasm },
            { item: "Organization", icon: Organization },
        ]
    },

    {
        category: "Languages", color: teal[900], data: [
            { item: "Python", icon: Python },
            { item: "HTML", icon: HTML },
            { item: "JavaScript", icon: JavaScript },
            { item: "CSS", icon: CSS },
            { item: "C", icon: C },
            { item: "java", icon: Java },
            { item: "kotlin", icon: Kotlin },
            { item: "Ruby", icon: Ruby },
            { item: "Rust", icon: Rust },
            { item: "MatLab", icon: Matlab },
            { item: "Ocaml", icon: Ocaml },
            { item: "Assembly", icon: Assembly }
        ]
    },

    {
        category: "Frameworks", color: pink[900], data: [
            { item: "Express", icon: Express },
            { item: "Bootstrap", icon: Bootstrap },
            { item: "TailwindCSS", icon: TailwindCSS },
            { item: "Material UI", icon: MaterialUI },
        ]
    },
    { data: [] },
    {
        category: "Libraries", color: lime[900], data: [
            { item: "React", icon: React },
            { item: "NPM", icon: NPM },
            { item: "JQuery", icon: JQuery },

        ]
    },
    {
        category: "Runtime Environments", color: lightBlue[700], data: [
            { item: "Node.js", icon: NodeJS },
            { item: "AWS Lambda", icon: AWSLambda },
        ]
    },

    {
        category: "IDEs", color: deepOrange[900], data: [
            { item: "Jupyter", icon: Jupyter },
            { item: "VSCode", icon: VSCode },
            { item: "PyCharm", icon: PYCharm },
            { item: "IntelliJ", icon: Intellij },
            { item: "Android Studio", icon: Android },
        ]
    },
    { data: [] },
    {
        category: "Database Language & Frameworks", color: green[700], data: [
            { item: "MongoDB", icon:Mongodb },
            { item: "MySql", icon:MySql},
            { item: "PostgreSql", icon:PostgreSql},
            { item: "Firebase", icon:Firebase },
        ]
    }
];


function Skills() {

    return (
        <Box backgroundColor='re' sx={{ overflowY: 'auto', p: 1 }}>
            <Box maxWidth='70rem' mx='auto' backgroundColor='blu'>
                <ResponsiveMasonry>
                    <Masonry>
                        {data.map(item =>
                            <Box p={0.8} sx={{ backgroundColor: 're', display: item.data.length ? 'block' : 'none' }}>
                                <Paper component={Box} elevation='2' sx={{ borderRadius: '0.5rem', p: 1, mx: 'auto', maxWidth: 400 }}>
                                    <Typography textAlign='center' fontSize='1.3rem' fontWeight='500' color={item.color}>{item.category}</Typography>
                                    <Grid container spacing={1} justifyContent='center' mt={0.5}>
                                        {item.data.map(data =>
                                            <Grid item>
                                                <Chip sx={{ borderRadius: '0.5rem', fontSize: '1rem', color: item.color, borderColor: item.color }}
                                                    icon={<Icon component={data.icon} fill={item.color} />}
                                                    label={<Typography>{data.item}</Typography>}
                                                    variant='outlined' />
                                            </Grid>
                                        )}
                                    </Grid>
                                </Paper>
                            </Box>
                        )}
                    </Masonry>
                </ResponsiveMasonry>
            </Box>
        </Box>
























        // <Box display='flex' justifyContent='center' overflow='auto' width='100%' backgroundColor='blu' p={1}>
        //     <Box component={Grid} container width='60rem' backgroundColor='purpl' spacing={3} flexWrap='wrap'>
        //         <Grid item width={{ xs: 1, sm: 5 / 8 }}>
        //             <Box sx={{ backgroundColor: 'transparent' }}>
        //                 <Typography mx='auto' component={Paper} fontSize='1.7rem' fontWeight='600' backgroundColor='white' width='fit-content' borderRadius='0.5rem'
        //                     p={0.4} color={indigo[900]} mb={2}>
        //                     Hard Skills
        //                 </Typography>

        //                 <Stack spacing={1}>
        //                     {/* Categories  */}
        //                     {hardData.map(data =>

        //                         <Stack alignItems='center'>
        //                             <Paper sx={Object.assign(data.sx || {}, { borderRadius: '1rem', px: 1, py: 0.4, width: 'fit-content' })} >
        //                                 <Typography textAlign='center' color='white' fontSize='1.2rem' fontWeight='600'>{data.category}</Typography>
        //                                 <Grid container spacing={1} p={1} flexWrap='wrap' justifyContent='center'>
        //                                     {data.data.map(item =>
        //                                         // items 
        //                                         <Grid item>
        //                                             <Chip item color='primary' sx={{
        //                                                 fontSize: '1.2rem', color: 'white', borderColor: 'black', backgroundColor: 'black',
        //                                                 borderRadius: '0.3rem'
        //                                             }}
        //                                                 icon={<Icon className={item.icon}
        //                                                     sx={item.iconName ? { width: 'fit-content', fontSize: '1.2rem', fontWeight: 600, mb: '0.4rem' } : {}}>{item.iconName}</Icon>}
        //                                                 label={item.item} variant='outlined' />
        //                                         </Grid>
        //                                     )}
        //                                 </Grid>
        //                             </Paper>
        //                         </Stack>

        //                     )}
        //                 </Stack>
        //             </Box>
        //         </Grid>
        //         <Grid item width={{ xs: 1, sm: 3 / 8 }} >
        //             <Typography component={Paper} mx='auto' fontSize='1.7rem' fontWeight='600' backgroundColor='white' width='fit-content' 
        //             mb={3} borderRadius='0.5rem' p={0.4} color={purple[700]}>
        //                 Soft Skills
        //             </Typography>
        //             <Box component={Grid} container justifyContent='center' columnSpacing={0.5} rowSpacing={1} flexWrap='wrap'
        //                 borderRadius='1rem'  py={3} sx={{ background: `linear-gradient(to bottom, ${teal[900]}, ${teal[700]}, ${teal[900]})` }}>
        //                 {softData.map(data =>
        //                     <Grid item>
        //                         <Chip item color='primary' sx={{
        //                             fontSize: '1.2rem', color: 'white', borderColor: 'black', backgroundColor: 'black',
        //                             borderRadius: '0.3rem', width: 'fit-content'
        //                         }}
        //                             icon={<Icon component='img' src={data.icon} />}
        //                             label={data.item} variant='outlined' />
        //                     </Grid>
        //                 )}
        //             </Box>

        //         </Grid>
        //     </Box>
        // </Box>
    )
}

export default Skills;