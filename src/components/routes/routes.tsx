import React, { FC, ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

import { tPropTypes } from "../../types";

const Routes: FC<tPropTypes> = ({ routesData }: tPropTypes): ReactElement => {
  return (
    <Switch>
      {routesData.map(
        ({ to, element: Element, exact }: any): ReactElement => {
          return (
            <Route
              path={to}
              render={(props) => {
                props.location.pathname = to;
                return <Element />;
              }}
              key={to}
              exact={exact}
            />
          );
        },
      )}
    </Switch>
  );
};

export default Routes;
