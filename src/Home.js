// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => (
  <>
    <div className="home">
      <img src="./homeImage.png" className="home_image" alt="Homepage" />
      {/* centered trademark at top <div className="trademark">A Bootcamp Group 3 Production</div>*/}
    </div>

    <div className="container">
      <div className="names">
        <div className="slice">
          <Link to="/ankit">Ankit Amin</Link>
        </div>
        <div className="slice">
          <Link to="/christopher">Christopher Giang</Link>
        </div>
        <div className="slice">
          <Link to="/gavin">Gavin Crisologo</Link>
        </div>
        <div className="slice">
          <Link to="/helen">Helen Li</Link>
        </div>
        <div className="slice">
          <Link to="/will-josh">Will-Josh Njeumi</Link>
        </div>
      </div> 
    </div>



  </>
);

export default Home;
