import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Typical from "react-typical";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-parent">
        <div className="hero-details">
          <div className="colz">

            <div className="icon-links">
            <a href="https://github.com/MabuelaThato">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/thato-mabuela-68781017a/">
              <i class="bi bi-github"></i>
            </a>
            <FaLinkedin />
            </div>
            
          </div>

          <div className="hero-name">
            <span className="primary-text">
              {" "}
              Hello! I'm <span className="highlighted-text">Thato</span>
            </span>
          </div>

          <div className="hero-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical 
                loop={Infinity}
                steps={[
                  "Front-end developer",
                  2000,
                  "React dev",
                  2000,
                  "Nextjs dev",
                  2000,
                  
                ]}
                />
              </h1>
              <span className="hero-description">
              Crafting Seamless User Experiences: Innovate. Design. Code. Repeat.
              </span>
            </span>
          </div>

          <div className="actions">
              <button className="btn primary-btn">
                  {" "}
                  Hire me
              </button>
              <a href="ThatoMabuelaCV.pdf" download="ThatoMabuelaCV.pdf">
                <button className="btn secondary-btn">
                  Get CV
                </button>
              </a>
          </div>
        </div>

        <div className="picture">
          <div className="picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
