import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {
  HomePage,
  AboutPage,
  ContactPage,
  ProjectsPage,
  ProjectDetailPage,
  SkillsPage,
  SkillDetailPage,
  Error404,
  Error500
} from './views/index';

import { AppLayout } from './components/index';

export default function AuthenticatedApp() {
  const SignOutHandler = () => {
    return (
      <div>
        <Redirect to='/' />
      </div>
    );
  };

  return (
    <div>
      <Router>
        <Switch>
          <AppLayout>
            <Route exact path='/signout' component={SignOutHandler} />

            <Route exact path='/skills/:skillID' component={SkillDetailPage} />
            <Route exact path='/skills' component={SkillsPage} />
            <Route exact path='/projects/:projectID' component={ProjectDetailPage} />
            <Route exact path='/projects' component={ProjectsPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/' component={HomePage} />

            {/* Admin Routes */}
            {/* <Route exact path='/app' component={DashboardPage} /> */}

            {/* Error Pages */}
            <Route exact path='/500' component={Error500} />
            <Route exact path='/404' component={Error404} />
            {/* <Route component={Error404} /> */}
          </AppLayout>
        </Switch>
      </Router>
    </div>
  );
}
