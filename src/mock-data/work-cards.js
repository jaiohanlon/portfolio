import React from 'react';
import {
  WonderbillLogo,
  WhichLogo,
  CoveyLogo,
  AntiblanksLogo,
  TribalLogo,
  LaveryRoweLogo,
} from '../js/svgs/index';

const workCards = {
  "cards": [
    {
      "title": "Wonderbill",
      "subTitle": "Senior Software Engineer",
      "description": "This is my next challenge so I'm not 100% sure what I'm doing yet - excited...",
      "technologies": [
        "React",
        "Redux",
        "...",
        "...",
        "..."
      ],
      "logo": <WonderbillLogo />,
      "backgroundImage": "https://images.unsplash.com/photo-1472457847783-3d10540b03d7?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop="
    },
    {
      "title": "Which?",
      "subTitle": "Senior Software Engineer",
      "description": "Working across multiple teams to improve the implementation of React and es6...",
      "technologies": [
        "React",
        "Redux",
        "Baobab",
        "Webpack",
        "Webpack 2",
        "Rollup",
        "Gulp",
        "ES6",
        "React Native"
      ],
      "logo": <WhichLogo />,
      "backgroundImage": "https://images.unsplash.com/photo-1439754389055-9f0855aa82c2?dpr=2&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop="
    },
    {
      "title": "Covey",
      "subTitle": "Technology Lead",
      "description": "Developed a React / Redux web app from the ground up brought on additional team members to continue growth...",
      "technologies": [
        "React",
        "Redux",
        "Webpack 2",
        "ES6",
        "React Native"
      ],
      "logo": <CoveyLogo />,
      "backgroundImage": "https://images.unsplash.com/photo-1455289049607-bb2ed5549c2c?dpr=2&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop="
    },
    {
      "title": "Antiblanks",
      "subTitle": "Senior Software Engineer",
      "description": "Developing a platform in React to handle the management of US ISA's...",
      "technologies": [
        "React",
        "Redux",
        "Redux-Saga",
        "Webpack",
        "ES6",
        "Angular",
        "React Native"
      ],
      "logo": <AntiblanksLogo />,
      "backgroundImage": "https://images.unsplash.com/photo-1446149864226-8e29d8fefe32?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop="
    },
    {
      "title": "Tribal Worldwide",
      "subTitle": "Senior Software Engineer",
      "description": "Working on a variety of projects for clients including Volkswagen, Falabella and Esso...",
      "technologies": [
        "React",
        "Custom Flux",
        "Gulp",
        "ES6",
        "Laravel",
        "Vue",
        "React Native"
      ],
      "logo": <TribalLogo />,
      "backgroundImage": "https://images.unsplash.com/20/bw-room.JPG?dpr=2&auto=format&fit=crop&w=1500&h=1500&q=80&cs=tinysrgb&crop="
    },
    {
      "title": "Lavery Rowe",
      "subTitle": "Software Architect",
      "description": "Developed an internal application to communicate between offices and the rest...",
      "technologies": [
        "React",
        "Redux",
        "Webpack",
        "ES6",
        "React Native",
        "Node.js"
      ],
      "logo": <LaveryRoweLogo />,
      "backgroundImage": "https://images.unsplash.com/photo-1476966162421-d6f1dde41279?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
    }
  ],
  "buttonText": "explore"
};

export default workCards;
