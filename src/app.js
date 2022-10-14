import "./app.css";
import { Background } from "./components/background";
import { MoreInfo } from "./components/more-info";
import { Navigation } from "./components/navigation";
import { AboutPage } from "./pages/about";
import { Footer } from "./pages/footer";
import {Button} from "./components-new/atoms/button";
import {Header} from "./components-new/orgs/header";
import {Textfield} from "./components-new/atoms/textfield";


const App = ()=>{
  return <>
    <Header />
    <Textfield label={"Hello"} placeholder={"hello"}></Textfield>
  </>
}

function App2() {
  return (
    <div>
      <Navigation />
      <div className="mb-4">
        <img src="/images/iStock-1162198296 1.svg" alt=""></img>
        <div className="absolute left-0 right-0 top-15 bottom-0">
          <Background />
        </div>
      </div>
      <AboutPage />
      <MoreInfo />
      <div>
        <img src="/images/Group 401.svg" alt=""></img>
      </div>
      <Footer />
    </div>
  );
}

export default App;
