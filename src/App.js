import Header from "./comps/Hd";
import Event from "./comps/Event"
import Contents from "./comps/Contents";
import Footer from "./comps/Footer"
import Detailed from "./comps/Detailed";
import Banner from "./comps/Banner";

import db from './data/db.json';

function App() {
  return (
    <>
      <Header dbinfo={db}></Header>
      <Banner></Banner>
      <Event dbinfo={db}></Event>
      <Contents></Contents>
      <Detailed></Detailed>
      <Footer></Footer>

    </>
  );
}

export default App;
