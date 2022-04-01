import React from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Confetti />
      <div className="card">
        <div className="wish">
          <h1>Happy Birthday</h1>
        </div>
        <div className="namee">
          <h2>Mantasha Firdaus</h2>
        </div>
        <div className="body">
          <p>
            My childhood memories are full of laughter and fun because of you,
            my dear big sister! I can't believe we're getting older and those
            times seem like forever ago. <i class="fa-solid fa-heart"></i>
          </p>
        </div>
        <div>
          <h4 className="from">
            <a
              href="https://www.instagram.com/mannan.khan63/?hl=en"
              target="__blank"
            >
              ~Mannan
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
