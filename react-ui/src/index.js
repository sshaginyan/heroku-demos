import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import routes from './routes';

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('root')
);
