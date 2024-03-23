import { NavBar } from "../components/NavBar"
import { Body } from './Body'
import { Routes, Route } from 'react-router-dom';
import { SingleFilm } from './SingleFilm'
import { Footer } from './Footer';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
          <Route exact path="/" element={<Body/>} />
          <Route path="/singleFilm/:id" element={<SingleFilm/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
