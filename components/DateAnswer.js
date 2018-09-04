import { Form, Text } from "react-form";
import moment from "moment";

class DateAnswer extends React.Component {
  onChange = formState => {
    const { day, month, year } = formState.values;

    const isEveryFieldValid = ["day", "month", "year"].every(field => {
      try {
        return formState.successes[field];
      } catch (err) {
        return false;
      }
    });
    if (!isEveryFieldValid) {
      return this.props.onChange(formState.values, false);
    }

    const date = moment({ day, month: parseInt(month, 10) - 1, year });
    if (!date.isValid()) {
      return this.props.onChange(formState.values, false);
    }

    const ageDiff = moment().diff(date, "years", false);
    return this.props.onChange(
      {
        [`${this.props.answers[0].attribute}`]: `${day}-${month}-${year}`
      },
      ageDiff >= 18,
      this.props.answers[0].validationFailedMsg
    );
  };
  validate = value => ({
    success: value && parseInt(value, 10) > 0
  });
  render() {
    // get the d/m/y of the answer value
    const stringValue = this.props.answers[0].value;
    const [day, month, year] = stringValue
      ? stringValue.split("-")
      : "00-00-0000".split("-");

    return (
      <Form onChange={this.onChange}>
        <Text
          id="day"
          field="day"
          validate={this.validate}
          defaultValue={day}
        />
        <Text
          id="month"
          field="month"
          validate={this.validate}
          defaultValue={month}
        />
        <Text
          id="year"
          field="year"
          validate={this.validate}
          defaultValue={year}
        />
      </Form>
    );
  }
}

export default DateAnswer;
