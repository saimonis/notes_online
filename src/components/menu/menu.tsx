import React, { FC, ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu as MenuAntd, Switch } from "antd";

import "./menu.css";

import { tPropTypes, iRoutesData } from "../../types";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons/lib";

const Menu: FC<tPropTypes> = (props: tPropTypes): ReactElement => {
  // change menu key
  const [count, setState] = useState("");
  let location = useLocation();
  const data: any = [];
  React.useEffect(() => {
    let path = (data.indexOf(location.pathname) + 1).toString();
    setState(path);
  }, [location, data]);
  // end change menu key
  return (
    <MenuAntd theme="dark" mode="horizontal" selectedKeys={[count]}>
      {
        <MenuAntd.Item key={(location.pathname + 1).toString()} className={"antd_theme_switch"}>
          {`Dark Theme : `}
          <Switch
            onChange={props.theme_changer}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </MenuAntd.Item>
      }
      {props.routesData.map(
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
