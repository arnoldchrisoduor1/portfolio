import Trendmart from './trendmart.png'
import Tokyo from './tokyo.png'
import Jumia from './jumia.png'
import Medical from './medicals.png'
import Flask from './flask.png'
import portfolio from "./portfolio_v1.png"
import Health from "./arch.png"

const projects = [
    {
      title: "Hospital Management System - (in development)",
      desc: "Planned to be the most advanced hospital management system in Kenya, when completed it will feature advanced AI implementations for disease prediction based on previous visits and many other features including real-time data processing, and diagnose assist.",
      img: Health,
      colors: ["#2196F3", "Blue", "yellow", "green"],
      languages: ["Go", "PostgreSQL", "GraphQL", "NextJS"],
      live: "https://aimedicals.netlify.app/#contacts"
    },
    {
      title: "TrendMart Shopping Website",
      desc: "This is a full Stack Shopping website built with the MERN stack, it has an admin section and payment processing with stripe.",
      img: Trendmart,
      colors: ["Yellow", "Orange", "Purple", "Green"],
      languages: ["JavaScript", "AWS", "Stripe", "MongoDB"],
      youtubeUrl: "https://www.youtube.com/embed/d3umlU_3mpw?si=qN8HX6JeFhK3Cosw"
    },
    {
      title: "Flask Devops Pipeline",
      desc: "Created a CRUD Flask Server Dockerized with Dockerfile that builds, runs unit tests and load testing with Locust before automatically registering the container to Docker Hub.",
      img: Flask,
      colors: ["Blue", "Green", "Brown", "Black"],
      languages: ["Flask", "Locust", "Docker", "Git.Actions"]
    },
    {
      title: "World Olympics Data Engineering Pipeline.",
      desc: "Built the data enginerring pipeline in Azure usng Gen2 storages, data factory, azure databricks and also tried all the steps in azure Synapse.",
      img: Tokyo,
      colors: ["#2196F3", "#2196B1"],
      languages: ["Python", "Azure"]
    },
    {
      title: "Spider to Scrape Jumia Online Store.",
      desc: "This spider can crawl and scrape the entire Jumia Online Retail Catalogue, it gets the product name, current price and previous price if a discount was offered. It then converts the data to csv format and sends it to my email.",
      img: Jumia,
      colors: ["#2196F3", "#673AB7"],
      languages: ["Python", "Bash"]
    },
    {
      title: "Medical Costs Prediction.",
      desc: "I trained and tuned the parameters of various regression machine learning models to get the best model that can predict a patients medical costs based on certain criteria some of the models were:- XGBoost, Random, Forest with RFE, Ridge regression and others.",
      img: Medical,
      colors: ["#2196F3"],
      languages: ["Python",],
      github: "https://www.kaggle.com/code/arnoldoduor/medical-costs-prediction-regression",
      live: "https://www.kaggle.com/code/arnoldoduor/medical-costs-prediction-regression"
    },
    {
      title: "Portfolio V.1",
      desc: "My very first portfolio",
      img: portfolio,
      colors: ["black","blue", "yellow", ],
      languages: ["HTML","CSS","Javascript",],
      github: "https://arnoldchrisoduor1.github.io/",
      live: "https://arnoldchrisoduor1.github.io/"
    },
    // Add more project objects as needed
  ];
  
  export default projects;