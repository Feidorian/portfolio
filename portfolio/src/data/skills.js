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
import { ReactComponent as IntelliJ } from "../images/intellij-plain.svg";
import { ReactComponent as Android } from "../images/android-plain.svg";
import { ReactComponent as Mongodb } from "../images/mongodb-plain.svg";
import { ReactComponent as MySql } from "../images/mysql-plain.svg";
import { ReactComponent as PostgreSql } from "../images/postgresql-plain.svg";
import { ReactComponent as Firebase } from "../images/firebase-plain.svg";

const Assembly = ({ fill }) => (
    <svg width='24px' height='24px' stroke={fill}>
        <text x='4' y='18' fill={fill} style={{ fontSize: '16px', marginRight: '8px' }}>AS</text>
    </svg>
)

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
            { item: "Java", icon: Java },
            { item: "Kotlin", icon: Kotlin },
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
    // { data: [] },
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
            { item: "IntelliJ", icon: IntelliJ },
            { item: "Android Studio", icon: Android },
        ]
    },
    { data: [] },
    {
        category: "Database Language & Frameworks", color: green[700], data: [
            { item: "MongoDB", icon: Mongodb },
            { item: "MySql", icon: MySql },
            { item: "PostgreSql", icon: PostgreSql },
            { item: "Firebase", icon: Firebase },
        ]
    }
];
