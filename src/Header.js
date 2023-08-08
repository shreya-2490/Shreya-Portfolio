import React, { useState } from "react";
import "./header.css";
import hb from "./assets/SG.jpg";
import ham from "./assets/ham.png";
import { saveAs } from 'file-saver';

function Header() {
  const handleDownload = () => {
    // Assuming your CV file is located at the given URL
    const cvUrl = 'https://drive.google.com/file/d/1N00zxvzL1quRQZocjGVMBuDh1ENj9KSY/view?usp=sharing';

    // Trigger the download using FileSaver.js
    saveAs(cvUrl, 'CV.pdf');
  };

  const [resmenu, setresmenu] = useState("none");

  const scrolll = (e, id) => {
    e.preventDefault();

    const target = document.getElementById(id);
    console.log(target.getBoundingClientRect().top);

    const inid = setInterval(() => {
      const targetcoo = target.getBoundingClientRect().top;

      if (targetcoo < -10) {
        if (targetcoo >= 60) {
          clearInterval(inid);
          return;
        } else {
          window.scrollBy(0, -50);
        }
      } else {
        if (targetcoo <= 60) {
          clearInterval(inid);
          return;
        } else {
          window.scrollBy(0, 50);
        }
      }
    }, 0);
  };

  return (
    <div className="header">
      <div className="right">
        <img src={hb}></img>
        <p
          style={{
            fontWeight: "bold",
            fontFamily: "inherit",
            fontSize: "20px",
          }}
        >
         Shreya
        </p>
      </div>

      <div className="left">
        <div
          className="hamburg"
          onClick={() => {
            if (resmenu == "none") setresmenu("flex");
            else setresmenu("none");
          }}
        >
          <img src={ham}></img>
          <div className="navmenu" style={{ display: resmenu }}>
            <a href="#homee">Home</a>
            <a href="#aboutt" onClick={(e) => scrolll(e, "aboutt")}>
              About
            </a>
            <a href="#skillss" onClick={(e) => scrolll(e, "skillss")}>
              Skills
            </a>
            <a href="#educationn" onClick={(e) => scrolll(e, "educationn")}>
              Education
            </a>
            <a href="#projectss" onClick={(e) => scrolll(e, "projectss")}>
              Projects
            </a>
            <a href="#experirncee" onClick={(e) => scrolll(e, "experirncee")}>
              Experience
            </a>
          </div>
        </div>
        <button className="download-btn" onClick={handleDownload}> My Resume</button>
        <a href="#homee">Home</a>
        <a href="#aboutt" onClick={(e) => scrolll(e, "aboutt")}>
          About
        </a>
        <a href="#skillss" onClick={(e) => scrolll(e, "skillss")}>
          Skills
        </a>
        <a href="#educationn" onClick={(e) => scrolll(e, "educationn")}>
          Education
        </a>
        <a href="#projectss" onClick={(e) => scrolll(e, "projectss")}>
          Projects
        </a>
        <a href="#experirncee" onClick={(e) => scrolll(e, "experirncee")}>
          Experience
        </a>
      </div>
    </div>
  );
}

export default Header;
