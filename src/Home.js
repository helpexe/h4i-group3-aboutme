import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"


const Home = () => (
    <>
    <div className="container">
      <section>
        <h1 class="about">About Me</h1>
        <hr></hr>
      </section>
      <section>
          <Link to="/ankit">Ankit Amin</Link>
          <br></br><hr></hr>
          <Link to="/christopher">Christopher Giang</Link>
          <br></br><hr></hr>
          <Link to="/gavin">Gavin Crisologo</Link>
          <br></br><hr></hr>
          <Link to="/helen">Helen Li</Link>
          <br></br><hr></hr>
          <Link to="/will-josh">Will-Josh Njeumi</Link>  
      </section>
    </div>
    </>
)


export default Home;