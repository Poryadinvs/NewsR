import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { news } from "./data/news";

import "./static/style.css"

import { useState } from "react";

function App() {
  const [data] = useState(news);
  const [filter, setFilter] = useState([]);

  return (
    <div className="hero">
      <Navbar categories={data.map(item => item.category).filter((value, index, array) => array.indexOf(value) === index)} setFilter={setFilter}/>
      <News data={data} filter={filter}/>
      <Footer/>
    </div>
  );
}

export default App;
