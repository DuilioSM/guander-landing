import "./App.css";
import ExplosionAnimation from "./components/ExplosionAnimation";
import Layout from "./components/Layout";
import OurProcess from "./components/OurProcess";
import StackedCards from "./components/StackedCards";
// import ValuesContainer from "./components/ValuesContainer";

function App() {

  return (
    <Layout>
      <ExplosionAnimation/>
      <StackedCards/>
      {/* <ValuesContainer/> */}
      <OurProcess/>
    </Layout>
  );
}

export default App;
