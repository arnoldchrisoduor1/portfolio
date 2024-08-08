import Soon from './soon1.jpg'

const projects = [
    {
      title: "Potatoe Blight Disease Detector",
      desc: "I trained A Convolutional Neural Network to detect the stages of blight disease in potatoes, Flask was used as the API which served the model through tensor-serving to a react frontend, all the applications were containerized with docker.",
      video: "https://www.youtube.com/watch?v=3jGhTnmAuVM",
      colors: ["#4CAF50", "Yellow"],
      languages: ["Python", "JavaScript"],
      videoThumbnail: Soon
    },
    {
      title: "Potato Project",
      desc: "This section will Hold a Semi-Detailed Description of the project, providing a quick overview for the users",
      video: "https://www.youtube.com/watch?v=3jGhTnmAuVM",
      colors: ["#4CAF50", "#2196F3", "#673AB7"],
      languages: ["Python", "Django", "SQL"]
    },
    {
      title: "Potato Project",
      desc: "This section will Hold a Semi-Detailed Description of the project, providing a quick overview for the users",
      video: "https://www.youtube.com/watch?v=3jGhTnmAuVM",
      colors: ["#4CAF50", "#2196F3", "#673AB7"],
      languages: ["Python", "Django", "SQL"]
    },
    // Add more project objects as needed
  ];
  
  export default projects;