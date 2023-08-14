import React from 'react'
import { logo } from '../assets';


const Hero = () => {
  return (
    <header
      className="w-full flex
    justify-center items-center flex-col"
    >
      <nav
        className="flex justify-between
      items-center w-full mb-10 pt-3"
      >
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/ketandabre22")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Complex Articles with 
        <br className=" max-md:hidden" />
        <span className="red_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        "Unlock Quick and Accurate Article Summarization Tailored to Your
        Reading Needs - Experience OpenAI's AI-Powered Solution Today!"
      </h2>
    </header>
  );
}

export default Hero