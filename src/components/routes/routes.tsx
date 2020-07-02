import React, { FC, ReactElement, ReactNode } from "react";
import { Switch, Route } from "react-router-dom";

interface IData {
  to: string;
  title?: string;
  element: ReactNode;
  exact?: boolean;
}

type TPropTypes = {
  routesData: IData[];
  children?: never;
};

const Routes: FC<TPropTypes> = ({ routesData }: TPropTypes): ReactElement => {
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
