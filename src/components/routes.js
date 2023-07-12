import Home from './Home';
import Quotes from './Quote';
import Calculator from './Calculator';

const routes = [
  {
    id: 1,
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    path: '/quote',
    element: <Quotes />,
  },
  {
    id: 3,
    path: '/calculator',
    element: <Calculator />,
  },
];

export default routes;
