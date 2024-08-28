import "./App.css";
import ExplosionAnimation from "./components/ExplosionAnimation";
import Layout from "./components/Layout";
import ValuesContainer from "./components/ValuesContainer";

function App() {

  return (
    <Layout>
      <ExplosionAnimation/>
      <ValuesContainer/>
    </Layout>
  );
}

export default App;
