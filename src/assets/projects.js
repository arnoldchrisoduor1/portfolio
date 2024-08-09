import Soon from './soon1.jpg'
import Potatoe from './potatoe.png'
import Trendmart from './trendmart.png'
import Goapi from "./go_api.png"
import Analysis1 from './analysis1.png'
import Tokyo from './tokyo.png'
import Jumia from './jumia.png'
import Medical from './medicals.png'

const projects = [
    {
      title: "Potatoe Blight Disease Detector.",
      desc: "I trained A Convolutional Neural Network to detect the stages of blight disease in potatoes, FastAPI was used as the API which served the model through tensor-serving to a react frontend, all the applications were containerized with docker.",
      img: Potatoe,
      colors: ["#2196F3", "Yellow"],
      languages: ["Python", "JavaScript"],
      youtubeUrl: "https://www.youtube.com/embed/3jGhTnmAuVM?si=bVypJif_UlpJVS3I"
    },
    {
      title: "Go API",
      desc: "Created a Go API using the Gorilla Module with CRUD capabilities. Also wrote tests to ensure it's functionality.",
      img: Goapi,
      colors: ["#2196F3", "Blue"],
      languages: ["Go", "PostgreSQL"]
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
      title: "Financial Analysis DashBoard.",
      desc: "Created this PowerBI Financial Analysis DashBoard for a Car Company.",
      img: Analysis1,
      colors: ["Yellow"],
      languages: ["PowerBI"]
    },
    {
      title: "Tokyo Olympics Data Engineering Pipeline.",
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
      title: "Title",
      desc: "This section will Hold a Semi-Detailed Description of the project, providing a quick overview for the users",
      img: Soon,
      colors: ["#4CAF50", "#2196F3", "#673AB7"],
      languages: ["Python", "Django", "SQL"]
    },
    {
      title: "Title",
      desc: "This section will Hold a Semi-Detailed Description of the project, providing a quick overview for the users",
      img: Soon,
      colors: ["#4CAF50", "#2196F3", "#673AB7"],
      languages: ["Python", "Django", "SQL"]
    },
    // Add more project objects as needed
  ];
  
  export default projects;