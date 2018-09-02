import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header
      activeChat={props.activeChat}
      onReset={props.onReset}
      onStart={props.onStart}
    />
    {props.children}
  </div>
);

export default Layout;
