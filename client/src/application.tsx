import React from "react";
import { Switch, Route, RouteChildrenProps } from "react-router-dom";
import routes from "./config/routes";

export interface IApplicationProps {}

const Application: React.FC<IApplicationProps> = (props) => {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render={(routeProps: RouteChildrenProps<any>) => (
              <route.component {...routeProps} />
            )}
          />
        );
      })}
    </Switch>
  );
};

export default Application;
