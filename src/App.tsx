import routesData from "./config/menuData";
import "./App.less";

import React from "react";

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

const App = () => {
  const [theme, setTheme] = React.useState({ filter: "" });

  const onThemeChange = (value: any) => {
    if (value) {
      setTheme({ filter: "hue-rotate(240deg) invert(100%)" });
    } else {
      setTheme({ filter: "" });
    }
  };

  return (
    <Provider store={store}>
      <Router>
        {/*style = {{filter:"hue-rotate(220deg) invert(100%)"}}*/}
        <Layout style={theme}>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu routesData={routesData} theme_changer={onThemeChange} />
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
