import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PublicRoute } from './HOC/PublicRoute';
import { PrivateRoute } from './HOC/PrivateRoute';
import { CHAT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SIGN_UP_ROUTE } from './routes';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Chat from './components/Chat/Chat';
import { useState } from 'react';

function App() {

  const [authnticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    loading ?
    <h1>Loading</h1> :
    (<BrowserRouter>
      <Switch>
        <PublicRoute path={LOGIN_ROUTE} component={Login} authnticated={authnticated} />
        <PublicRoute path={SIGN_UP_ROUTE} component={SignUp} authnticated={authnticated} />
        <PrivateRoute path={CHAT_ROUTE} component={Chat} authnticated={authnticated} />
        <Route path={HOME_ROUTE} component={Home} exact/>
      </Switch>
    </BrowserRouter>)
  );
}

export default App;
