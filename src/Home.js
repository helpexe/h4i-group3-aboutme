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
        <hr></hr>
        <div className="slice">
          <Link to="/ankit" data-replace="Ankit Amin" class="name"><span>Ankit Amin</span></Link>
        </div>
        <hr></hr>
        <div className="slice">
          <Link to="/christopher" data-replace="Christopher Giang" class="name"><span>Christopher Giang</span></Link>
        </div>
        <hr></hr>
        <div className="slice">
          <Link to="/gavin" data-replace="Gavin Crisologo" class="name"><span>Gavin Crisologo</span></Link>
        </div>
        <hr></hr>
        <div className="slice">
          <Link to="/helen" data-replace="Helen Li" class="name"><span>Helen Li</span></Link>
        </div>
        <hr></hr>
        <div className="slice">
          <Link to="/will-josh" data-replace="Will-Josh Njeumi" class="name"><span>Will-Josh Njeumi</span></Link>
        </div>
      </div> 
    </div>



  </>
);

export default Home;
