import "./App.css";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <br />
      <StarRating />
    </div>
  );
}

export default App;
