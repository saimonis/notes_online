import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

interface PropTypes {
  routesData: object[];
  children?: never;
}

const Routes = ({ routesData }: PropTypes): ReactElement => {
  return (
    <Switch>
      {routesData.map(
        ({ to, element, exact }: any): ReactElement => {
          return <Route path={to} component={element} key={to} exact={exact} />;
        }
      )}
    </Switch>
  );
};

export default Routes;
