import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        {this.props.activeChat ? (
          <a id="resetBtn" onClick={this.props.onReset}>
            Reset
          </a>
        ) : (
          <a id="startBtn" onClick={this.props.onStart}>
            Start
          </a>
        )}
      </div>
    );
  }
}

export default Header;
