import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Interests from './pages/Interests';
import Connect from './pages/Connect';
import NotFound from './pages/NotFound';
import Root from './components/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'projects', Component: Projects },
      { path: 'interests', Component: Interests },
      { path: 'connect', Component: Connect },
      { path: '*', Component: NotFound },
    ],
  },
]);