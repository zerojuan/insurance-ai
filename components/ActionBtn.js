import { Button } from "antd";

const ActionBtn = props => (
  <div>
    <Button
      disabled={!props.enabled}
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <a className="actionBtn" onClick={props.onClick}>
        <span>{props.action}</span>
      </a>
    </Button>
  </div>
);

export default ActionBtn;
