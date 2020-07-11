import React, { FC, ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu as MenuAntd } from "antd";

import "./menu.css";

import { tPropTypes, iRoutesData } from "../../types";

const Menu: FC<tPropTypes> = ({ routesData }: tPropTypes): ReactElement => {
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
        ({ to, title }: iRoutesData, index: number): ReactElement => {
          data.push(to);
          return (
            <MenuAntd.Item key={(index + 1).toString()}>
              <Link to={to}>{title}</Link>
            </MenuAntd.Item>
          );
        },
      )}
    </MenuAntd>
  );
};
export default Menu;
