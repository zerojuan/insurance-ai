import api from "../lib/api";
import MainLayout from "../components/MainLayout";

class Index extends React.Component {
  onStart = async e => {
    e.preventDefault();

    const initialResult = await api.post("/chat/start");
  };
  render() {
    return (
      <MainLayout activeChat={false} onStart={this.onStart}>
        <p>Hello World!</p>
      </MainLayout>
    );
  }
}

export default Index;
