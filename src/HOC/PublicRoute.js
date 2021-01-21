import { Redirect, Route } from "react-router-dom";
import { CHAT_ROUTE } from "../routes";

export const PublicRoute = ({ path, component: Component, authnticated, ...restProps }) => {
  return(
    <Route 
      {...restProps}
      render={(props) => 
      !authnticated ?
      <Component {...props}/> :
      <Redirect to={CHAT_ROUTE} /> } 
    />
  );
}
