import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PublicLayout } from './components/index';
import SuspenseFallback from './components/SuspenseFallback';

const HomePage = lazy(() => import('./views/HomePage'));
const AboutPage = lazy(() => import('./views/AboutPage'));
const ContactPage = lazy(() => import('./views/ContactPage'));
const ProjectsPage = lazy(() => import('./views/projects/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./views/projects/ProjectDetailPage'));
const SkillsPage = lazy(() => import('./views/skills/SkillsPage'));
const SkillDetailPage = lazy(() => import('./views/skills/SkillDetailPage'));
const Error404 = lazy(() => import('./views/error/Error404'));
const Error500 = lazy(() => import('./views/error/Error500'));

export default function App(props: any) {
  return (
    <div>
      <Router>
        <PublicLayout>
          <Suspense fallback={<SuspenseFallback />}>
            <Switch>
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
