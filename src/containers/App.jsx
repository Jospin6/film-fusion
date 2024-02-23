import { useState } from 'react'
import { NavBar } from "../components/NavBar"
import { Body } from './Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SingleFilm } from './SingleFilm'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Body/>} />
            <Route path="/singleFilm/:id" element={<SingleFilm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
