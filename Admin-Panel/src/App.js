import React, { Component } from 'react';
import { HashRouter, Route, BrowserRouter, Link, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import Breadcrumbs from './views/Base/Breadcrumbs/Breadcrumbs';



const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

const logout = () => {
  return fetch('http://localhost:4000/panel', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "text": "adminLogout"
    })
  })
    .then(res => {
      if (res) {
        console.log(res, "response")
        return <Redirect to="http://localhost:3000/" />
      }
    }).catch(err => {
      console.log(err);
    })

}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      showResult: false
    }
  }
  componentDidMount() {
    // this.fetching();
  }

  fetching() {
    return fetch("https://lit-shelf-71550.herokuapp.com/panel")
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);

        if (res === "admin") {
          this.setState({ isAuthenticated: true, showResult: true })
        } else {
          swal('Error', "login expired")
          return this.setState({ showResult: true })

        }
      })
      .catch(err => {
        console.log(err, "err");
      })
  }

  render() {
    // return (this.state.showResult && <div>{this.state.isAuthenticated ? this.renderRoutes() : this.ChangePath()}</div>)
    return this.renderRoutes()
  }

  ChangePath() {
    return (
      <BrowserRouter>
        <Route to="/login" render={() => { window.location = "http://upupmanga-123.firebaseapp.com/"; return null }} />
        {!this.state.isAuthenticated ?
          <Route to="/" component={() => { window.location = "http://upupmanga-123.firebaseapp.com/login"; return null }} />
          : <Route to="/" component={DefaultLayout} />}
      </BrowserRouter>
    )
  }
  renderRoutes() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route exact path='/logout' name='Logout' render={logout} /> */}
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>)
  }
}

export default App;
