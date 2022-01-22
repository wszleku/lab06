//import logo from "./logo.svg";
import "./App.css";
import { CFooter } from "./components/CFooter";
import CHeader from "./components/CHeader";
import CContents from "./components/CContents";
// import COuter from "./components/COuter";

function App() {
  return (
    <div className="App">
      <CHeader aName="Jakub" aFamily="Wszołek" />
      {/* <CHeader aName="Jakub" aFamily="Wszolek" /> */}
      <CContents />
      {/* <COuter/> */}
      <CFooter wheather="słoneczna" temp="21">
        <p>Niebo jest bezchmurne, wiatr słaby.</p>
      </CFooter>
      {/* <CFooter wheather="deszczowa" temp="13"/>
      <CFooter wheather="śnieżna" temp="-6"/> */}
    </div>
  );
}

export default App;
