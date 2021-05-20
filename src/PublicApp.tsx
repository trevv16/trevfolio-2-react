import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Loading, PublicLayout } from './components/index';
import SuspenseFallback from './components/SuspenseFallback';

const SignUpPage = lazy(() => import('./views/auth/SignUpPage'));
const SignInPage = lazy(() => import('./views/auth/SignInPage'));
const ForgotPage = lazy(() => import('./views/auth/ForgotPage'));
const ResetPasswordPage = lazy(() => import('./views/auth/ResetPasswordPage'));
const HomePage = lazy(() => import('./views/HomePage'));
const AboutPage = lazy(() => import('./views/AboutPage'));
const ContactPage = lazy(() => import('./views/ContactPage'));
const ProjectsPage = lazy(() => import('./views/projects/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./views/projects/ProjectDetailPage'));
const SkillsPage = lazy(() => import('./views/skills/SkillsPage'));
const SkillDetailPage = lazy(() => import('./views/skills/SkillDetailPage'));
const Error404 = lazy(() => import('./views/error/Error404'));
const Error500 = lazy(() => import('./views/error/Error500'));

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
        <PublicLayout>
          <Suspense fallback={<SuspenseFallback />}>
            <Switch>
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

              <Route path='*' component={Error404} />
            </Switch>
          </Suspense>
        </PublicLayout>
      </Router>
    </div>
  );
}
