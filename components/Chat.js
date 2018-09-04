import React from "react";
import { Form, Text } from "react-form";

import TextAnswer from "./TextAnswer";
import DateAnswer from "./DateAnswer";
import ActionBtn from "./ActionBtn";
import UrlAnswer from "./UrlAnswer";
import { Alert } from "antd";

const validate = field => value => {
  return true;
};

const getFormByType = ({ type, answers, onChange }) => {
  const props = { answers, onChange };
  switch (type) {
    case "text":
      return <TextAnswer {...props} />;
    case "date":
      return <DateAnswer {...props} />;
    case "link":
      return <UrlAnswer {...props} />;
  }
};

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      formMsg: null,
      answers: null
    };
  }
  onChange = (answers, isValid, formMsg) => {
    this.setState({ answers, isValid, formMsg });
  };

  onClick = e => {
    e.preventDefault();

    this.setState({
      formMsg: null
    });
    this.props.onAction(this.state.answers);
  };

  render() {
    const element = getFormByType({
      type: this.props.content.type,
      answers: this.props.content.answers,
      onChange: this.onChange
    });

    return (
      <div>
        <h1 className="question">{this.props.question}</h1>
        {element}
        {!this.state.isValid && this.state.formMsg ? (
          <Alert
            type="error"
            message={this.state.formMsg}
            style={{ marginTop: "10px" }}
          />
        ) : null}
        {this.props.isFinal ? null : (
          <ActionBtn
            onClick={this.onClick}
            enabled={this.state.isValid}
            action={this.props.action}
          />
        )}
      </div>
    );
  }
}

export default Chat;
