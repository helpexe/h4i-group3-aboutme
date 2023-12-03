import React from 'react'
import "./Gavin.css";
const movies = [
  {
    name: "Everything Everywhere All At Once",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Everything_Everywhere_All_at_Once.jpg/220px-Everything_Everywhere_All_at_Once.jpg",
  },
  {
    name: "Crash Landing On You",
    url: "https://upload.wikimedia.org/wikipedia/en/6/64/Crash_Landing_on_You_main_poster.jpg",
  },
  {
    name: "Andor",
    url: "https://i.ebayimg.com/images/g/SyMAAOSwHN1jM7sP/s-l1600.jpg",
  },
];


// I changed something (not)
const movieElements = movies.map((obj) => {
  return (
    <section className="movieItem">
      <h3>{obj.name}</h3>
      <img width="175px" src={obj.url} alt={obj.name + " Poster"} />
    </section>
  );
});

function Gavin() {
  return (
    <div className="App">
      <header class="centered">
        <section id="head-container">
          <img id="img1" src="/gavin_crisologo/gavin_photo1.jpg" alt="Me" />
          <section>
            <h1 id="bold-title">Gavin Crisologo</h1>
            <h3>
              Instagram: @_gavin.exe <br></br>
              Discord: help.exe
            </h3>
          </section>
        </section>
      </header>
      <body>
        <hr></hr>
        <section className="content">
          <h2>Favorite Movies and Shows</h2>
          <div className="container">{movieElements}</div>
        </section>
        <hr></hr>
        <section className="content">
          <h2>More about me...</h2>
          <div className="container">
            <section className="item">
              <h2>Hobbies</h2>
              <ul>
                <li>Journaling</li>
                <li>Playing the piano</li>
                <li>Watching pointless YouTube videos</li>
              </ul>
            </section>
            <section className="item">
              <h2>What I'm up to</h2>
              <ul>
                <li>Member of Hack4Impact Bootcamp! :D</li>
                <li>TA for CMSC 131</li>
                <li>
                  Co-President of Lean On Me College Park (
                  <a
                    href="https://leanonmechat.wixsite.com/maryland"
                    target="_blank"
                  >
                    visit our website!
                  </a>
                  )
                </li>
                <li>Member of OMSE AES and SLC</li>
                <li>
                  (Periodically) a programming mentor for my high school
                  robotics team
                </li>
              </ul>
            </section>
          </div>
        </section>
        <hr></hr>
        <div className="container"></div>
      </body>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default Gavin;
