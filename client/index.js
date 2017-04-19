import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './components/App';
import Main from './containers/Main/Main';
import Signup from './containers/Signup/Signup';
import About from './containers/About/About';

render(
 <Router>
 <div>
 <Route path="/" component={App} />
<Route exact path="/" component={Main} />﻿
 <Route path="/About" component={About} />
 <Route path="/signup" component={Signup} />
 </div>
 </Router>, document.getElementById('app'));﻿