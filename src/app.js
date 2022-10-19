import "./app.css";
import { Background } from "./components/background";
import { MoreInfo } from "./components/more-info";
import { Navigation } from "./components/navigation";
import { AboutPage } from "./pages/about";
import { Header } from "./components-new/orgs/header";
import { Form } from "./components-new/orgs/form";
import { Details } from "./components-new/orgs/details";
import { Footer } from "./components-new/orgs/footer";

const App = () => {
  return (
    <>
      <div className="">
        <Header />
        <div className="md:relative">
          <div
            className="py-36"
            style={{ background: "url('/images/iStock-1162198296 1.svg')" }}
          >
            {" "}
            <Form />
          </div>
        </div>
        {/* <Form /> */}
        <Details />
        <Footer />
      </div>
    </>
  );
};

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
