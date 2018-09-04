import { withRouter } from "next/router";

import moment from "moment";

import api from "../lib/api";
import MainLayout from "../components/MainLayout";
import { onStart } from "../actions/start";

const QuotePage = props => {
  const [day, month, year] = props.birthday.split("-");
  const date = moment({ day, month: parseInt(month, 10) - 1, year });
  const age = moment().diff(date, "years", false);
  return (
    <MainLayout activeChat={false} onStart={onStart}>
      <style jsx>{`
        span {
          font-size: 15px;
        }
      `}</style>
      <div>
        <h1>
          {props.firstName} {props.lastName}
        </h1>

        <h2>
          <span>Age:</span> {age}
        </h2>
        <h2>
          <span>Birthday:</span>
          {props.birthday}
        </h2>
        <h2>
          <span>Address:</span> {props.address}
        </h2>
        <br />
        <h1>${props.price}</h1>
      </div>
    </MainLayout>
  );
};

QuotePage.getInitialProps = async ({ query }) => {
  const { data } = await api.get(`/api/quotes/${query.sessionId}`);
  return data;
};

export default withRouter(QuotePage);
