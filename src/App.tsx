import "./App.css";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import { ImageSlider } from "./components/imgae-slider/ImageSlider";
import { LoadMore } from "./components/load-more/LoadMore";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <br />
      <StarRating />
      <br />
      <ImageSlider limit={10} url="https://picsum.photos/v2/list" />

      <LoadMore />
    </div>
  );
}

export default App;
