import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import {Stack } from '@material-ui/core';
import { use100vh } from 'react-div-100vh';
import Nav from './components/Nav';
import wallpaper from "./images/wallpaper.png";
import {Paths} from "./components/utils";
import AboutMe from "./components/AboutMe";
import MetaData from "./components/MetaData";
import Education from "./components/Education";
import Skills from "./components/Skill";
import Courses from "./components/Courses";
import WorkHistory from "./components/WorkHistory";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Stack sx={{ backgroundImage: `url(${wallpaper})`, height: use100vh(), width:'100vw', overflow:'hidden'}}>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Redirect exact  to={Paths.aboutMe} />
            </Route>

            <Route  path={Paths.aboutMe}>
              <AboutMe />
            </Route>

            <Route  path={Paths.education}>
              <Education />
            </Route>

            <Route  path={Paths.projects}>
              <Projects />
            </Route>

            <Route  path={Paths.skills}>
              <Skills />
            </Route>

            <Route  path={Paths.courses}>
              <Courses />
            </Route>

            <Route exact path={Paths.workHistory}>
              <WorkHistory />
            </Route>

            <Route  path={Paths.resume}>
              <Resume />
            </Route>

            <Route path={Paths.metadata}>
              <MetaData />
            </Route>

            <Route>
              {/* <Page404 /> */}
              <Redirect   to={Paths.aboutMe} />
            </Route>
          </Switch>
      </Stack>
    </Router>
  );
}

export default App;
