import Link from "next/link";
import { Layout, Button, Row, Col } from "antd";
const { Header } = Layout;

const linkStyle = {
  marginRight: 15
};

class MyHeader extends React.Component {
  render() {
    return (
      <Header>
        <Row>
          <Col span={16}>
            <Link href="/">
              <a style={linkStyle}>Insurance AI</a>
            </Link>
          </Col>
          <Col span={6} push={6}>
            {this.props.activeChat ? (
              <Button type="primary">
                <a id="resetBtn" onClick={this.props.onReset}>
                  Reset
                </a>
              </Button>
            ) : (
              <Button type="primary">
                <a id="startBtn" onClick={this.props.onStart}>
                  Start
                </a>
              </Button>
            )}
          </Col>
        </Row>
      </Header>
    );
  }
}

export default MyHeader;
