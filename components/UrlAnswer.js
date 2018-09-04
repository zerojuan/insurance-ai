import Link from "next/link";
import { Button } from "antd";

export default props => (
  <div>
    <Link href={props.answers[0].value}>
      <Button
        type="primary"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        {props.answers[0].title}
      </Button>
    </Link>
  </div>
);
