import React from "react";

class QnA extends React.Component {
  render() {
    return <div>{this.props.question.content}</div>;
  }
}

export default QnA;
