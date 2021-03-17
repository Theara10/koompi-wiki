import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import HomePage from "./pages/home";
import SinglePage from "./pages/single";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header className="header">
            <img
              src="/Koompi-White.png"
              width="auto"
              height="50"
              className="logo"
            />
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
          </Header>
          <Layout>
            <Navbar />
            <Layout>
              <Content
                className="site-layout-background"
                style={{
                  margin: 0,
                  minHeight: "85vh",
                  padding: "24px",
                }}
              >
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/hello/:id">
                    <SinglePage />
                  </Route>
                </Switch>
              </Content>
              <Footer style={{ textAlign: "center" }} className="">
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
