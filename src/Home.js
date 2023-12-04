// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => (
  <>
    <div className="home">
      <img src="./homeImage.png" alt="Homepage" />
      {/* centered trademark at top <div className="trademark">A Bootcamp Group 3 Production</div>*/}

      
    </div>
    <div className="container">
      <div className="names">
        <div className="slice">
          <Link to="/ankit" className="rotated-link">Ankit Amin</Link>
        </div>
        <div className="slice">
          <Link to="/christopher" className="rotated-link">Christopher Giang</Link>
        </div>
        <div className="slice">
          <Link to="/gavin" className="rotated-link">Gavin Crisologo</Link>
        </div>
        <div className="slice">
          <Link to="/helen" className="rotated-link">Helen Li</Link>
        </div>
        <div className="slice">
          <Link to="/will-josh" className="rotated-link">Will-Josh Njeumi</Link>
        </div>
      </div>
    </div>
  </>
);

export default Home;
