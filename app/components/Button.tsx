"use client";

import React from "react";
import styled from "styled-components";

const Button = () => {
  const handleDownload = () => {
    // Ganti URL di bawah dengan path file kamu (misal file di folder public)
    const fileUrl = "/sample.pdf"; // contoh: file sample.pdf di folder /public
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "my-file.pdf"; // nama file hasil download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledWrapper>
      <button type="button" className="button" onClick={handleDownload}>
        <span className="button__text">Download CV</span>
        <span className="button__icon">
          <svg
            className="svg"
            viewBox="0 0 35 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
            <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
            <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --font-color: #dedede;
    --bg-color-sub: #222;
    --bg-color: #323232;
    --main-color: #dedede;
    position: relative;
    width: 170px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    background-color: var(--bg-color);
    border-radius: 10px;
    overflow: hidden;
  }

  .button,
  .button__icon,
  .button__text {
    transition: all 0.3s ease;
  }

  .button__text {
    transform: translateX(20px);
    color: var(--font-color);
    font-weight: 600;
    z-index: 2;
  }

  .button__icon {
    position: absolute;
    right: 0;
    height: 100%;
    width: 40px;
    background-color: var(--bg-color-sub);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .svg {
    width: 20px;
    fill: var(--main-color);
  }

  .button:hover .button__text {
    color: transparent;
  }

  .button:hover .button__icon {
    width: 100%;
    right: 0;
  }

  .button:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px var(--main-color);
  }
`;

export default Button;
