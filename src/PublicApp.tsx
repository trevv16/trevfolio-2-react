import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {
  SignUpPage,
  SignInPage,
  ForgotPage,
  ResetPasswordPage,
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
import { PublicLayout } from './components/index';

export default function PublicApp() {
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
          <PublicLayout>
            {/* Auth Routes */}
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/signin' component={SignInPage} />
            <Route exact path='/forgot' component={ForgotPage} />
            <Route exact path='/reset-password/:resetToken' component={ResetPasswordPage} />
            <Route exact path='/signout' component={SignOutHandler} />

            <Route exact path='/skills/:skillID' component={SkillDetailPage} />
            <Route exact path='/skills' component={SkillsPage} />
            <Route exact path='/projects/:projectID' component={ProjectDetailPage} />
            <Route exact path='/projects' component={ProjectsPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/' component={HomePage} />

            {/* Error Pages */}
            <Route exact path='/500' component={Error500} />
            <Route exact path='/404' component={Error404} />
          </PublicLayout>
        </Switch>
      </Router>
    </div>
  );
}
