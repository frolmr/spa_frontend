import React from 'react';
import Home from './home';
import PostPage from './post_page';
import LoginPage from './login_page';
import NoMatch from './no_match';
import Search from './search'
import { Route, Switch, Link } from 'react-router-dom';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link to="/" className="navbar-brand">Home</Link>
              </li>
              <li>
                <Link to="/login" className="navbar-link">Login</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Search />
              </li>
            </ul>
          </div>
        </nav>
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
