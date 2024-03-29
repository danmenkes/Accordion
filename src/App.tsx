import "./App.css";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import { ImageSlider } from "./components/imgae-slider/ImageSlider";
import { LoadMore } from "./components/load-more/LoadMore";
import TreeView from "./components/tree-view/TreeView";
import Theme from "./components/theme/Theme";
import Theme2 from "./components/theme2/Theme2";
import ScrollIndicator from "./components/custom-scroll-indicator/ScrollIndicator";
import QrCode from "./components/qr-code/QrCode";
import Tab from "./components/tabs/Tab";
import ModalTest from "./components/modal/modal-test";
import GithubProfileFinder from "./components/ github-profile-finder/GithubProfileFinder";

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
      <TreeView />

      <Theme />

      <Theme2 />

      <QrCode />

      <ScrollIndicator url="https://dummyjson.com/products?limit=100" />

      <Tab />

      <ModalTest />

      <GithubProfileFinder />
    </div>
  );
}

export default App;
