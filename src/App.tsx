import routesData from "./config/menuData";
import "./App.less";

import React, { FC, ReactElement } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/routes";
import Menu from "./components/menu";

import { Layout } from "antd";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./config/store";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const { Header, Content, Footer } = Layout;

const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu routesData={routesData} />
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <Routes routesData={routesData} />
          </Content>
          <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
