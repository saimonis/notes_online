import React, { FC } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/routes";
import Main from "./pages/main";
import Stats from "./pages/stats";

import Menu from "./components/menu";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const routesData = [
  {
    to: "/",
    title: "Main",
    element: Main,
    exact: true,
  },
  {
    to: "/stats",
    title: "Stats",
    element: Stats,
  },
];

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu routesData={routesData} />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Routes routesData={routesData} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
