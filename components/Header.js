import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = props => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    {props.activeChat ? <a id="resetBtn">Reset</a> : <a id="startBtn">Start</a>}
  </div>
);

export default Header;
