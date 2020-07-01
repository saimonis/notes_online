import React, {FC, ReactElement} from "react";

import {Tabs} from "antd";

import {Link} from "react-router-dom";

import "./menu.css";

type PropTypes = {
    routesData: object[],
    children?: never
}

interface Page {
    to: string,
    title: string,
    element: any,
};

const Menu: FC<PropTypes> = ({routesData}: PropTypes): ReactElement => {
    const {TabPane} = Tabs;

    return (
        <div className={'main-menu'}>
            <Tabs defaultActiveKey="2">

                {routesData.map(({to, title}: any): ReactElement => {
                    return (<TabPane tab={<Link to={to}>{title}</Link>} key={to + title}/>)
                })}

            </Tabs>
        </div>);
};
export default Menu;
