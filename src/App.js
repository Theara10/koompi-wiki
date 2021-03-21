import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import HomePage from "./pages/home";
import SinglePage from "./pages/single";
import Header from "./components/Header";

const { SubMenu } = Menu;
const { Content, Sider, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header />
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
                  <Route exact path="/" component={HomePage} />
                  <Route path="/:menu/:id" component={SinglePage} exact />
                </Switch>
              </Content>
              <Footer style={{ textAlign: "center" }} className="">
                KOOMPI WIKI ©2021 Created by KOOMPI
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
