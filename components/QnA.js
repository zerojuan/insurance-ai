import React from "react";

class QnA extends React.Component {
  render() {
    return (
      <div>
        <h1 className="question">{this.props.question}</h1>
        <div className="actions">{this.props.answers}</div>
        <a className="actionBtn">{this.props.action}</a>
      </div>
    );
  }
}

export default QnA;
