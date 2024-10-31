import "./App.css";
import Footer from "./components/common/footer/footer";
import Navbar from "./components/common/navbar/navbar";
import Banner from "./components/sections/banner";
import NewArrivals from "./components/sections/new-arrivals";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <NewArrivals />
      <Footer />
    </>
  );
}

export default App;
