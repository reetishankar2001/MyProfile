import React from "react";
import "../styles/Home.css";
import heroImage from "../assets/Reeti.jpg"; // placeholder for your image
import StatsPanel from "./StatsPanel"

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p className="greeting">Hello, I’m</p>
        <h2 className="name">Reeti Shankar</h2>
        <h3 className="title">Software Developer</h3>
        <p className="desc">
          Versatile Software Developer with 3 years of experience in full-stack
          development and applied AI, skilled in building scalable web and
          mobile applications using React JS, React Native, Node.js, Python, and
          AWS. Experienced in integrating Generative AI, LLMs, RAG, and Agentic
          AI to create intelligent, user-focused solutions. Strong communicator
          with a proven ability to deliver impactful technical demos and
          client-facing presentations, translating complex technologies into
          clear, business-aligned outcomes. Adept at UI development,
          cross-functional collaboration, and driving innovation across diverse
          use cases.
        </p>
        <div className="hero-buttons">
          <button variant="contained" className="hire-btn">
            Let's Connect
          </button>
          <a href="/resume.pdf" className="resume-link">
            Download Resume >
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Roy C. Jones" className="portrait" />
      </div>
      <StatsPanel/>
    </div>
  );
}
