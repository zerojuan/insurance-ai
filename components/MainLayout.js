import Header from "./Header";
import { Layout } from "antd";

const { Content } = Layout;

const MainLayout = props => (
  <Layout>
    <Header
      activeChat={props.activeChat}
      onReset={props.onReset}
      onStart={props.onStart}
    />
    <Content style={{ padding: "0 50px" }}>{props.children}</Content>
  </Layout>
);

export default MainLayout;
