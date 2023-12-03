import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => (
    <>
    <ul>
      <li>
        <Link to="/ankit">Ankit</Link>
      </li>
      <li>
        <Link to="/christopher">Christopher</Link>
      </li>
      <li>
        <Link to="/gavin">Gavin</Link>
      </li>
      <li>
        <Link to="/helen">Helen</Link>
      </li>
      <li>
        <Link to="/will-josh">Will-Josh</Link>
      </li>
    </ul>
    </>
)


export default Home;