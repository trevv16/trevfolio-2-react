import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const HomePage = lazy(() => import('./views/HomePage'));
const AboutPage = lazy(() => import('./views/AboutPage'));
const ContactPage = lazy(() => import('./views/ContactPage'));
const ProjectsPage = lazy(() => import('./views/projects/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./views/projects/ProjectDetailPage'));
const SkillsPage = lazy(() => import('./views/skills/SkillsPage'));
const SkillDetailPage = lazy(() => import('./views/skills/SkillDetailPage'));
const Error404 = lazy(() => import('./views/error/Error404'));
const Error500 = lazy(() => import('./views/error/Error500'));

import { AppLayout } from './components/index';
import SuspenseFallback from './components/SuspenseFallback';

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
        <AppLayout>
          <Suspense fallback={<SuspenseFallback />}>
            <Switch>
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
            </Switch>
          </Suspense>
        </AppLayout>
      </Router>
    </div>
  );
}
