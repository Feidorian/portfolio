const data = [
    {
        'code': 'CMSC 411',
        'name': "Computer Systems Architecture",
        'term': "UMD Spring 2021",
        'summary': "Input/output processors and techniques. Intra-system communication, \
        buses, caches. Addressing and memory hierarchies. Microprogramming, parallelism, and pipelining.",
        'concepts': "C, linux",
        'link':'http://www.cs.umd.edu/class/spring2021/cmsc411/'
    },
    {
        'code': 'CMSC 389N',
        'name': "A Introduction to PHP and Javascript",
        'term': "UMD Spring 2021",
        'summary': "An introduction to the development of single page Web-based applications (SPA's) using JavaScript \
                for both the front end client and back-end api/service. We will be developing applications using a micro-service \
                architecture pattern and discussing throughout the evolution of web application architectures and current trends.",
        'concepts': "HTML, CSS, Javascript, Node.js, React, Bootstrap, express",
        'link':'https://egonzal5.github.io/389N'
    },
    {
        'code': 'CMSC 320',
        'name': "Introduction to Data Science",
        'term': "UMD Spring 2021",
        'summary': "An introduction to the data science pipeline, i.e., the end-to-end process of going from unstructured, \
        messy data to knowledge and actionable insights. Provides a broad overview of several topics including statistical \
        data analysis, basic data mining and machine learning algorithms, large-scale data management, cloud computing, and \
        information visualization.",
        'concepts': "Python, Docker, Jupyter",
        'link': 'https://cmsc320.github.io'
    },
    {
        'code': 'CMSC 436',
        'name': "Programming Handheld Systems: Android",
        'term': "UMD Fall 2020",
        'summary': "Fundamental principles and concepts that underlie the programming of handheld systems, such as mobile phones, \
        personal digital assistants, and tablet computers. Particular emphasis will be placed on concepts such as limited display size, \
        power, memory and CPU speed; and new input modalities, where handheld systems differ substantially from non-handheld systems, and \
        thus require special programming tools and approaches. Students will apply these concepts and principles in the context of an \
        existing handset programming platform.",
        'concepts': "Android Studio, Kotlin, Firebase",
        'link': 'http://www.cs.umd.edu/class/fall2020/cmsc436/'
    },
    {
        'code': 'CMSC 435',
        'name': "Software Engineering",
        'term': "UMD Fall 2020",
        'summary': "State-of-the-art techniques in software design and development. Laboratory experience in applying the \
        techniques covered. Structured design, structured programming, top-down design and development, segmentation and \
        modularization techniques, iterative enhancement, design and 'code' inspection techniques, correctness, and chief-programmer \
        teams. The development of a large software project.",
        'concepts': "Javascript, CSS, React, Python, electron, HTML",
        'link':'https://seam.cs.umd.edu/purtilo/435/'
    },
    {
        'code': 'CMSC 420',
        'name': "Advanced Data Structures",
        'term': "UMD Spring 2020",
        'summary': "Description, properties, and storage allocation functions of data structures including balanced binary trees, \
        B-Trees, hash tables, skiplists, tries, KD-Trees and Quadtrees. Algorithms for manipulating structures. Applications \
        from areas such as String Processing, Computer Graphics, Information Retrieval, Computer Networks, Computer Vision, and Operating Systems.",
        'concepts': "jAVA"
    },
    {
        'code': 'CMSC 424',
        'name': "Database Design",
        'term': "UMD Fall 2019",
        'summary': "Students are introduced to database systems and motivates the database approach as a \
        mechanism for modeling the real world. An in-depth coverage of the relational model, logical database design, \
        query languages, and other database concepts including query optimization, concurrency control; transaction management, \
        and log based crash recovery. Distributed and Web database architectures are also discussed.",
        'concepts': "Postgress, C, linux",
        'link':'https://sedna.cs.umd.edu/424/'
    },
   
    {
        'code': 'CMSC 351',
        'name': "Algorithms",
        'term': "UMD Spring 2019",
        'summary': "A systematic study of the complexity of some elementary algorithms related to sorting, \
        graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations.",
        'link':'http://www.cs.umd.edu/class/spring2019/cmsc351-02010301/'
    },
    {
        'code': 'CMSC 330',
        'name': "Organization of Programming Languages",
        'term': "UMD Fall 2019",
        'summary': "A study of programming languages, including their syntax, semantics, and implementation. Several different \
        models of languages are discussed, including dynamic, scripting functional \
        , and memory safe systems programming. Explores language features such as formal syntax, scoping \
            and binding of variables, higher-order programming, typing, and type polymorphism. Introduces finite automata, context \
            free grammar, parsing, lambda calculus, and basics of security attacks and software security.",
        'concepts': "Ocaml, Ruby, Rust",
        'link':'http://www.cs.umd.edu/class/fall2018/cmsc330/'
    },
   
   
    {
        'code': 'CMSC 250',
        'name': "Discrete Structures",
        'term': "Spring 2018",
        'summary': "Fundamental mathematical concepts related to computer science, including finite and infinite sets, \
        relations, functions, and propositional logic. Introduction to other techniques, \
        modeling and solving problems in computer science. Introduction to permutations, combinations, \
        graphs, and trees with selected applications.",
        'concepts': "",
        'link':'https://umd.instructure.com/courses/1237260/assignments/syllabus'
    },

    {
        'code': 'CMSC 216',
        'name': "Introduction to Computer Systems",
        'term': "Spring 2018",
        'summary': "Introduction to the interaction between user programs and the operating system/hardware. \
        Major topics include C programming, introductory systems programming, and assembly language. \
        Other concepts covered include UNIX, machine data representation, thread management, optimization, and virtual memory. \
        Programming is done in the Linux Environment.",
        'concepts': "C, Assembly, Linux, MobaXterm(remote SSH)",
        'link': 'http://www.cs.umd.edu/class/fall2018/cmsc216/syllabus.pdf',
    },

    {
        'code': 'CMSC 132',
        'name': "Object Oriented Programming II",
        'term': "UMD Spring 2018",
        'summary': "Introduction to use of computers to solve problems using software engineering principles. \
        Design, build, test, and debug medium -size software systems and learn to use relevant tools. \
        Use object-oriented methods to create effective and efficient problem solutions. \
        Use and implement application programming interfaces (APIs). Programming done in Java",
        'concepts': "Java, Eclipse IDE",
        'link':'https://www.cs.umd.edu/class/spring2018/cmsc132-010XH/syllabus.pdf'
    },

    {
        'code': 'CMSC 131',
        'name': "Object Oriented Programming I",
        'term': "UMD Fall 2017",
        'summary': "Introduction to programming and computer science. \
        Emphasizes understanding and implementation of applications using object- oriented techniques. \
        Develops skills such as program design and testing as well as implementation of programs using a graphical IDE. \
        Programming done in Java.",
        'concepts': "Java, Eclipse IDE",
        'link': 'http://www.cs.umd.edu/class/fall2017/cmsc131-010X/syllabus.shtml',
    },
     
]

export default data;