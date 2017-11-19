import React from 'react';
import Home from './home';
import PostPage from './post_page';
import LoginPage from './login_page';
import NoMatch from './no_match';
import Navigation from './navigation'
import { Route, Switch } from 'react-router-dom';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
