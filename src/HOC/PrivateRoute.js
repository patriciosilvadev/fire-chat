import { Redirect, Route } from "react-router-dom";
import { LOGIN_ROUTE } from "../routes";

export const PrivateRoute = ({ path, component: Component, authnticated, ...restProps }) => {
  return(
    <Route 
      {...restProps}
      render={props => 
        authnticated ?
        <Component {...props} /> :
        <Redirect to={{ pathname: LOGIN_ROUTE, state: { from: props.location }}} />
      }
    />
  );
}
