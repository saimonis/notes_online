import React, {ReactElement} from "react";
import {Switch, Route} from "react-router-dom";

interface PropTypes {
    routesData: object[],
    children?: never
};

const Routes = ({routesData}:PropTypes):ReactElement => {
    return (
        <Switch>
            {routesData.map(({to,element}:any,):ReactElement => {
                return (<Route path={to} component={element} key={to}/>)
            })}

    </Switch>
    )
};

export default Routes