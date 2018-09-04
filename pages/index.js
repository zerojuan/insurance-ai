import MainLayout from "../components/MainLayout";

import { onStart } from "../actions/start";

const Index = () => (
  <MainLayout activeChat={false} onStart={onStart}>
    <h1>Insurance AI</h1>
    <h3>Insurance made smart</h3>
  </MainLayout>
);

export default Index;
