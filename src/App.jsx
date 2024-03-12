import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import Saved from './Components/Saved';


function App() {

  const API_KEY = "R66dnWc3tFhaZb2Fv012KqXohoPDb9387yCy1ZIgCb5KsVBRBV5ZVQ4r";

  const [images, setImages] = useState([])

  const [search, setSearch] = useState("nature");

  useEffect(() => {
    const fetchImage = async() => {
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=45`,{
        headers:{
          Authorization: API_KEY,
        },
      });
      setImages(res.data.photos);
    }


    fetchImage();
  }, [search])
  

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch}/>
        
        <Routes>
          <Route path="/" element={<Home images={images}/>}/>
          <Route path="/saved" element={<Saved/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
