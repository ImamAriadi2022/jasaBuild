import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero p-5">
      <div className="hero-content">
        <h1 className="hero-title">
          Bangun Website Impian Anda <br /> Bersama <span>CreativeBraind</span>
        </h1>
        <p className="hero-subtitle">
          Kami menghadirkan solusi website e-commerce modern dan responsif 
          yang siap mendukung pertumbuhan bisnis Anda.
        </p>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => window.location.href = "#portfolio"}
          >
            Lihat Portfolio
          </button>
          <button
            className="btn-secondary"
            onClick={() => window.open("https://wa.me/628123456789", "_blank")}
          >
            Hubungi Kami
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://media.istockphoto.com/id/1144188384/id/foto/konsep-toko-online-di-laptop-tablet-dan-layar-smartphone.jpg?s=1024x1024&w=is&k=20&c=W4_m9Nm8-3bdFdixj7imibcwvtrRmQDzk56Ml9LLcuQ="
          alt="Web Design Illustration"
        />
      </div>
    </header>
  );
};

export default Hero;