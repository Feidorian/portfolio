import { Box, Grid, Paper, Stack, Typography } from "@material-ui/core";
import { indigo, pink, teal, red, green, deepOrange, deepPurple, grey } from '@material-ui/core/colors';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useEffect} from "react";

const data =[
    {
        code: 'CMSC 411',
        name: "Computer Systems Architecture",
        term: "UMD Spring 2021",
        summary: "Input/output processors and techniques. Intra-system communication, \
        buses, caches. Addressing and memory hierarchies. Microprogramming, parallelism, and pipelining.",
        concepts: "C, linux"
    },
    {
        code: 'CMSC 389N',
        name: "A Introduction to PHP and Javascript",
        term: "UMD Spring 2021",
        summary: "An introduction to the development of single page Web-based applications (SPA's) using JavaScript \
                for both the front end client and back-end api/service. We will be devleoping applications using a micro-service \
                architecture pattern and discussing throughout the evolution of web application architectures and current trends.",
        concepts: "HTML, CSS, Javascript, Node.js, React, Boostrap, express"
    },
    {
        code: 'CMSC 320',
        name: "Introduction to Data Science",
        term: "UMD Spring 2021",
        summary: "An introduction to the data science pipeline, i.e., the end-to-end process of going from unstructured, \
        messy data to knowledge and actionable insights. Provides a broad overview of several topics including statistical \
        data analysis, basic data mining and machine learning algorithms, large-scale data management, cloud computing, and \
        information visualization.",
        concepts: "Python, Docker, Jupyter"
    },
    {
        code: 'CMSC 436',
        name: "Programming Handheld Systems: Android",
        term: "UMD Fall 2020",
        summary: "Fundamental principles and concepts that underlie the programming of handheld systems, such as mobile phones, \
        personal digital assistants, and tablet computers. Particular emphasis will be placed on concepts such as limited display size, \
        power, memory and CPU speed; and new input modalities, where handheld systems differ substantially from non-handheld systems, and \
        thus require special programming tools and approaches. Students will apply these concepts and principles in the context of an \
        existing handset programming platform.",
        concepts: "Android Studio, Kotlin, Firebase"
    },
    {
        code: 'CMSC 435',
        name: "Software Engineering",
        term: "UMD Fall 2020",
        summary: "State-of-the-art techniques in software design and development. Laboratory experience in applying the \
        techniques covered. Structured design, structured programming, top-down design and development, segmentation and \
        modularization techniques, iterative enhancement, design and code inspection techniques, correctness, and chief-programmer \
        teams. The development of a large software project.",
        concepts: "Javascript, CSS, React, Python, electron, HTML"
    },
    {
        code: 'CMSC 424',
        name: "Database Design",
        term: "UMD Fall 2019",
        summary: "Students are introduced to database systems and motivates the database approach as a \
        mechanism for modeling the real world. An in-depth coverage of the relational model, logical database design, \
        query languages, and other database concepts including query optimization, concurrency control; transaction management, \
        and log based crash recovery. Distributed and Web database architectures are also discussed.",
        concepts: "Postgress, C, linux"
    },
    {
        code: 'CMSC 420',
        name: "Advanced Data Structures",
        term: "UMD Spring 2020",
        summary: "Description, properties, and storage allocation functions of data structures including balanced binary trees, \
        B-Trees, hash tables, skiplists, tries, KD-Trees and Quadtrees. Algorithms for manipulating structures. Applications \
        from areas such as String Processing, Computer Graphics, Information Retrieval, Computer Networks, Computer Vision, and Operating Systems.",
        concepts: "jAVA"
    },
    {
        code: 'CMSC 351',
        name: "Algorithms",
        term: "UMD Spring 2019",
        summary: "A systematic study of the complexity of some elementary algorithms related to sorting, \
        graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations.",
    },
    {
        code: 'CMSC 330',
        name: "Organization of Programming Languages",
        term: "UMD Fall 2019",
        summary: "A study of programming languages, including their syntax, semantics, and implementation. Several different \
        models of languages are discussed, including dynamic, scripting functional \
        , and memory safe systems programming. Explores language features such as formal syntax, scoping \
            and binding of variables, higher-order programming, typing, and type polymorphism. Introduces finite automata, context \
            free grammar, parsing, lambda calculus, and basics of security attacks and software security.",
        concepts: "Ocaml, Ruby, Rust"
    },
   
   
    {
        code: 'CMSC 250',
        name: "Discrete Structures",
        term: "Spring 2018",
        summary: "Fundamental mathematical concepts related to computer science, including finite and infinite sets, \
        relations, functions, and propositional logic. Introduction to other techniques, \
        modeling and solving problems in computer science. Introduction to permutations, combinations, \
        graphs, and trees with selected applications.",
        concepts: ""
    },

    {
        code: 'CMSC 216',
        name: "Introduction to Computer Systems",
        term: "Spring 2018",
        summary: "Introduction to the interaction between user programs and the operating system/hardware. \
        Major topics include C programming, introductory systems programming, and assembly language. \
        Other concepts covered include UNIX, machine data representation, thread management, optimization, and virtual memory. \
        Programming is done in the Linux Environment.",
        concepts: "C, Assembly, Linux, MobaXterm(remote SSH)"
    },

    {
        code: 'CMSC 132',
        name: "Object Oriented Programming II",
        term: "UMD Spring 2018",
        summary: "Introduction to use of computers to solve problems using software engineering principles. \
        Design, build, test, and debug medium -size software systems and learn to use relevant tools. \
        Use object-oriented methods to create effective and efficient problem solutions. \
        Use and implement application programming interfaces (APIs). Programming done in Java",
        concepts: "Java, Eclipse IDE"
    },

    {
        code: 'CMSC 131',
        name: "Object Oriented Programming I",
        term: "UMD Fall 2017",
        summary: "Introduction to programming and computer science. \
        Emphasizes understanding and implementation of applications using object- oriented techniques. \
        Develops skills such as program design and testing as well as implementation of programs using a graphical IDE. \
        Programming done in Java.",
        concepts: "Java, Eclipse IDE"
    },
     
]


function Courses() {
    const [masonWidth, setMasonWidth] = useState((window.innerWidth/352).toFixed());
    const setWidth = () => setMasonWidth((window.innerWidth/352).toFixed());

    useEffect(()=> {
        window.addEventListener('resize', setWidth);
        return ()=> window.removeEventListener('resize', setWidth)
    })
    return (
        <Box backgroundColor='re' width='100%'  overflow='auto' display='flex' justifyContent='center' my={1} p={1}>
            {/* <Grid container rowSpacing={2} p={1} alignItems='center' columnSpacing={{xs:0, sm:2}} backgroundColor='blu' justifyContent='center' maxWidth='90rem' flexWrap='wrap'>
            {data.map(item =>
                <Grid item width={{xs:1, sm:6/12, md:6/12, lg:4/12, xl:3/12}}>
                    <Paper elevation='3' component={Stack} spacing={2} maxHeight={480}  sx={{p:1, borderRadius:'0.5rem'}} >
                        <Stack direction='row' justifyContent='space-between'> 
                            <Typography>{item.code}</Typography>
                            <Typography>{item.term}</Typography>
                        </Stack>
                        <Typography textAlign='center' fontSize='1.2rem' fontWeight='500' color={teal[900]}>{item.name}</Typography>
                        <Typography textAlign='center' color={indigo[900]}>{item.summary}</Typography>
                        <Typography textAlign='center' color={deepOrange[900]} >{item.concepts}</Typography>
                    </Paper>
                </Grid>
                )}
            </Grid> */}
            <Box width='90%'>
            <ResponsiveMasonry
             columnsCountBreakPoints={{ 1:masonWidth}}>
                 <Masonry>
                 {data.map(item =>
                    <Paper  elevation='3' m={1} component={Stack} maxWidth={352} spacing={2}  sx={{p:1, borderRadius:'0.5rem'}} >
                        <Stack direction='row' justifyContent='space-between'> 
                            <Typography>{item.code}</Typography>
                            <Typography>{item.term}</Typography>
                        </Stack>
                        <Typography textAlign='center' fontSize='1.2rem' fontWeight='500' color={teal[900]}>{item.name}</Typography>
                        <Typography textAlign='center' color={indigo[900]}>{item.summary}</Typography>
                        <Typography textAlign='center' color={deepOrange[900]} >{item.concepts}</Typography>
                    </Paper>
                    )}
                 </Masonry>
            </ResponsiveMasonry>
            </Box>
        </Box>
    )
};

export default Courses;