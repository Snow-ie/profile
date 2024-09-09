import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import propic from "./propic.jpg";

function Header() {
  return (
    <div className="container">
      <header>
        <img src={propic} alt="profile-pic" className="profile-pic" />
        <h2>
          Sekiguchi Yukiko <p>Frontend Developer</p>
        </h2>
      </header>
      <main>
        <button>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span>Email</span>
        </button>
        <div className="details">
          <h3>Abouts</h3>
          <p>
            I am a flexible and experienced insurance administrator with
            excellent time management skills. I am a good communicator with
            proven inter personal skills and am used to working in a team whilst
            also being capable of using own initiative. I am skilled In dealing
            with problems in a resourceful manner and negotiating to achieve
            beneficial agreement. I am always enthusiastic to learn and
            undertake new challenges.
          </p>
          <h3>Interests</h3>
          <p>
            Personal growth,Skill development, Stress relief, Mental breaks from
            daily routines and challenges ,Creativity, An enhanced sense of
            identity and self-awareness & Boosting overall well-being
          </p>
        </div>
        <div className="icons">
          <ul>
            <li>
              <a href="" target="__blank" rel="noreferer noopener">
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#facebook" target="__blank" rel="noreferer noopener">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#Instagram" target="__blank" rel="noreferer noopener">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#Github" target="__blank" rel="noreferer noopener">
                <i class="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
