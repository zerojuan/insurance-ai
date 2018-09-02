import MainLayout from "../components/MainLayout";

class Index extends React.Component {
  onStart = () => {
    console.log("Start Button Clicked");
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
