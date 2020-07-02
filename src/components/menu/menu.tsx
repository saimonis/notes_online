import React, { FC, ReactElement, ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu as MenuAntd } from "antd";

import "./menu.css";

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

const Menu: FC<TPropTypes> = ({ routesData }: TPropTypes): ReactElement => {
  const [count, setState] = useState("");
  let location = useLocation();
  const data: any = [];

  React.useEffect(() => {
    let path = (data.indexOf(location.pathname) + 1).toString();
    setState(path);
  }, [location, data]);

  return (
    <MenuAntd theme="dark" mode="horizontal" selectedKeys={[count]}>
      {routesData.map(
        ({ to, title }: any, index: number): ReactElement => {
          data.push(to);
          return (
            <MenuAntd.Item key={(index + 1).toString()}>
              <Link to={to}>{title}</Link>
            </MenuAntd.Item>
          );
        }
      )}
    </MenuAntd>
  );
};
export default Menu;
