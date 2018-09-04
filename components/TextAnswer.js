import { Form, Text } from "react-form";

class TextAnswer extends React.Component {
  handleChange = formState => {
    const isValid = this.props.answers.every(answer => {
      if (!formState.successes) {
        return false;
      }
      return formState.successes[answer.attribute];
    });
    this.props.onChange(formState.values, isValid);
  };

  validate = value => ({
    success: value && /\S+/.test(value)
  });

  render() {
    if (!this.props.answers) {
      return <div />;
    }
    console.log("Answers:", this.props.answers);
    return (
      <Form onChange={this.handleChange}>
        {this.props.answers.map(answer => (
          <Text
            id={answer.attribute}
            key={answer.attribute}
            field={answer.attribute}
            validate={this.validate}
            defaultValue={answer.value}
          />
        ))}
      </Form>
    );
  }
}

export default TextAnswer;
