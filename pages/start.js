import Router, { withRouter } from "next/router";

import MainLayout from "../components/MainLayout";

import Chat from "../components/Chat";

import api from "../lib/api";

import { onStart } from "../actions/start";

class Start extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: props.chat
    };
  }

  static getDerivedStateFromProps(props) {
    console.log("State: ", props);
    return props;
  }

  componentDidMount() {
    this.setState({
      chat: this.props.chat
    });
  }

  static async getInitialProps({ query, req }) {
    let sessionId;
    let step;
    if (req) {
      sessionId = req.params.sessionId;
      step = req.params.step;
    } else {
      sessionId = query.sessionId;
      step = query.step;
    }
    const { data } = await api.post(`/api/chat/${sessionId}/next`, {
      step: step
    });

    return {
      sessionId: sessionId,
      step: step,
      chat: data
    };
  }

  handleAction = async answers => {
    const chatAnswers = this.state.chat.content.answers.map(answer => {
      const newAnswer = Object.assign({}, answer);
      newAnswer.value = answers[answer.attribute];
      return newAnswer;
    });

    this.state.chat.content.answers = chatAnswers;

    const { data } = await api.post(`/api/chat/${this.props.sessionId}/next`, {
      chat: this.state.chat
    });

    this.setState({
      chat: data
    });

    Router.push(
      {
        pathname: "/start",
        query: {
          step: data.id,
          sessionId: this.props.sessionId
        }
      },
      `/start/${this.props.sessionId}/${data.id}`
    );
  };

  render() {
    return (
      <MainLayout activeChat={true} onReset={onStart}>
        <Chat
          question={this.state.chat.question.content}
          content={this.state.chat.content}
          action={this.state.chat.action}
          type={this.state.chat.type}
          isFinal={this.state.chat.question.next ? false : true}
          onAction={this.handleAction}
        />
      </MainLayout>
    );
  }
}

export default withRouter(Start);
