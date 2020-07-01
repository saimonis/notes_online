import React, {FC, useEffect} from "react";
import {BrowserRouter as Router, useLocation} from "react-router-dom";

import Routes from "./components/routes";
import Main from "./pages/main";
import Stats from "./pages/stats";

import Menu from "./components/menu";

const routesData = [
    {
        to: "/stats",
        title: "Stats",
        element: Stats,
    },
    {
        to: "/",
        title: "Main",
        element: Main,
    },
];

const App: FC = () => {

    return (
        <Router>
            <div>
                <Menu routesData={routesData}/>
                <Routes routesData={routesData}/>
            </div>
        </Router>
    );
};

export default App;
