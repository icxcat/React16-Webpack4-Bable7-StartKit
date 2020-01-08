import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './routes/home';
import NotFound from './routes/404';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/..." component={...} /> */}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

class App extends React.Component {
  render() {
    return <AppRouter />;
  }
}

export default App;
