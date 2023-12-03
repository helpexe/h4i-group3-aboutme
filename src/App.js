import React from 'react'
import Home from './Home'
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'

import Ankit from './ankit_amin/Ankit'
import Christopher from './christopher_giang/Christopher'
import Gavin from './gavin_crisologo/Gavin'
import Helen from './helen_li/Helen'
import Will_Josh from './will-josh_njeumi/Will-Josh'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ankit" element={<Ankit />} />
      <Route path="/christopher" element={<Christopher />} />
      <Route path="/gavin" element={<Gavin />} />
      <Route path="/helen" element={<Helen />} />
      <Route path="/will-josh" element={<Will_Josh />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
