import "./App.css";
import { BackgroundComponent } from "./components/BackgroundComponent";
import { MoreInfo } from "./components/MoreInfo";
import { Navigation } from "./components/Navigation";
import { About } from "./pages/About";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <div className="mb-4">
        <img src="/images/iStock-1162198296 1.svg" alt=""></img>
        <div className="absolute left-0 right-0 top-15 bottom-0">
          <BackgroundComponent />
        </div>
      </div>
      <About />
      <MoreInfo />
      <div>
        <img src="/images/Group 401.svg" alt=""></img>
      </div>
      <Footer />
    </div>
  );
}

export default App;
