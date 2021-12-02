import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './Home/home';
import Vision from './Home/Vision';
import Core from './Home/Core';
import ClubInfo from './Home/ClubInfo';
import Youtube from './Home/Youtube';
import Contact from './components/Contact';

import About from './AboutUs/About';

import App2 from './Blogs/Blogsmain';

import Club from './Members/Club';
import Alumni from './Members/alumni';

import Projects1 from './Projects/projects1';
import Projects2 from './Projects/projects2';
import Magazine from './Projects/magazine';

import EventMain from './Event/Event';
import { Event1_21, Event2_21, Event3_21, Event4_21, Event5_21, Event6_21, Event7_21, Event8_21, Event9_21, Event10_21 } from './Event/Events/eventpage_21';
import { Event1_20, Event2_20, Event3_20, Event4_20, Event5_20, Event6_20, Event7_20 } from './Event/Events/eventpage_20';
//import { Carousel } from 'bootstrap';

function App() {
  return (
    <Router className="router">
      <Header />
      <Switch>
        <div className="app">
          <Route exact path={process.env.PUBLIC_URL + '/'}>
            <Home />
            <Vision />
            <Core />
            <ClubInfo />
            <Youtube />
          </Route>
          <Route exact path="/sae-nitk">
            <Home />
            <Vision />
            <Core />
            <Youtube />
          </Route>
          <Route exact path="/about-us"><About /></Route>
          <Route exact path="/blog"><App2 /></Route>
          <Route exact path="/project-expo-2019-2020"><Projects1 /></Route>
          <Route exact path="/project-expo-2020-2021">
            <Projects2 />
            <Magazine />
          </Route>
          <Route exact path="/club"><Club /></Route>
          <Route exact path="/alumni"><Alumni /></Route>
          <Route exact path="/events"><EventMain /></Route>

          <Route exact path="/events/magazine-release"><Event9_21 /></Route>
          <Route exact path="/events/website-release"><Event10_21 /></Route>

          <Route exact path="/events/webinar-by-r-s-pant"><Event1_21 /></Route>
          <Route exact path="/events/matlab-kep"><Event2_21 /></Route>
          <Route exact path="/events/simulink-kep"><Event3_21 /></Route>
          <Route exact path="/events/solidworks-kep"><Event4_21 /></Route>
          <Route exact path="/events/adobe"><Event5_21 /></Route>
          <Route exact path="/events/cosmol"><Event6_21 /></Route>
          <Route exact path="/events/internship-webinar"><Event7_21 /></Route>
          <Route exact path="/events/interactive-session-on-gate"><Event8_21 /></Route>

          <Route exact path="/events/autocad-workshop"><Event1_20 /></Route>
          <Route exact path="/events/the-mind-fiz"><Event2_20 /></Route>
          <Route exact path="/events/kasting"><Event3_20 /></Route>
          <Route exact path="/events/matlab-and-simulink-workshop"><Event4_20 /></Route>
          <Route exact path="/events/otto-quiz"><Event5_20 /></Route>
          <Route exact path="/events/keynote-talk-series"><Event6_20 /></Route>
          <Route exact path="/events/career-building-kep"><Event7_20 /></Route>
        </div>
      </Switch>
      <Contact />
    </Router>
  );
}

export default App;
