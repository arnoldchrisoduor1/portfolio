import { useState } from "react";
import "./skills.css";

const Skills = () => {
  const [canDo, setCanDo] = useState(false);
  const [dataState, setDataState] = useState(false);
  const [engineeringState, setEngineeringState] = useState(false);
  const [mlState, setMlState] = useState(false);

  const toggleCanDo = () => {
    setCanDo((prevCanDo) => !prevCanDo);
  };

  const toggleDataState = () => {
    setDataState((prevdataState) => !prevdataState);
  };

  const toggleEngineeringState = () => {
    setEngineeringState((prevengineeringState) => !prevengineeringState);
  };

  const toggleMlState = () => {
    setMlState((prevMlState) => !prevMlState)
  }

  return (
    <div className="skills__main__container">
      <div className="edu_container">
        <h3 className="edu_header">Web Development</h3>

        <p>Languages and Tools:-</p>

        <p className="skills_section">
          JAVASCRIPT PYTHON SQL : Nodejs Django Flask FastAPI React Nextjs
          GraphQL MaterialUI Express MySQL MongoDB Supabase Firebase AWS Azure
          Docker Kubernetes Git&Github
        </p>

        <ul
          className="skill__list"
          style={{ display: canDo ? "block" : "none" }}
        >
          <p className="what__text">What I can do:-</p>
          <li>
            Build secure and scalable web APIs for efficient data transfer and
            management
          </li>
          <li>
            Develop responsive and interactive front-end applications using
            modern JavaScript frameworks
          </li>
          <li>
            Design and implement robust back-end systems with various
            programming languages and frameworks
          </li>
          <li>
            Create and manage relational and non-relational databases for
            optimal data storage and retrieval
          </li>
          <li>
            Implement GraphQL APIs for flexible and efficient data querying
          </li>
          <li>
            Utilize cloud services for deployment, storage, and serverless
            computing
          </li>
          <li>
            Containerize applications and manage container orchestration for
            improved scalability and portability
          </li>
          <li>
            Implement user authentication and authorization systems to ensure
            application security
          </li>
          <li>
            Version control and collaborate on projects using Git and GitHub
          </li>
          <li>
            Design and develop full-stack web applications from conception to
            deployment
          </li>
          <li>
            Integrate third-party services and APIs to enhance application
            functionality
          </li>
          <li>
            Optimize web application performance and ensure cross-browser
            compatibility
          </li>
          <li>
            Implement RESTful and GraphQL API architectures based on project
            requirements
          </li>
          <li>
            Utilize modern UI libraries to create intuitive and aesthetically
            pleasing user interfaces
          </li>
        </ul>

        {/* <button className="skill__description" onClick={toggleCanDo} disabled>
          {canDo ? "Hide Content" : "See What I Can Do"}
        </button> */}

        <h3 className="edu_header">Data Analysis</h3>

        <p>Languages and Tools:-</p>

        <p className="skills_section">
          SQL PYTHON : Pandas Numpy SciPy Excel PowerBI Tableau Steamlit Seaborn
          Matplotlib Scrapy BeautifulSoup
        </p>
        <ul
          className="skill__list"
          style={{ display: dataState ? "block" : "none" }}
        >
            <p className="what__text">What I can do:-</p>
          <li>
            Extract, transform, and load (ETL) data from various sources using
            SQL and Python
          </li>
          <li>
            Clean, preprocess, and structure data for analysis using Pandas and
            NumPy
          </li>
          <li>
            Perform advanced statistical analysis and scientific computing with
            SciPy
          </li>
          <li>
            Create dynamic and interactive data visualizations with Matplotlib,
            Seaborn, and Streamlit
          </li>
          <li>
            Develop comprehensive dashboards and reports using Excel, PowerBI,
            and Tableau
          </li>
          <li>
            Conduct web scraping to collect data from online sources using
            Scrapy and BeautifulSoup
          </li>
          <li>
            Analyze large datasets efficiently using Python's data manipulation
            libraries
          </li>
          <li>
            Generate insightful data visualizations to communicate complex
            information effectively
          </li>
          <li>
            Perform exploratory data analysis to uncover patterns and trends in
            datasets
          </li>
          <li>
            Automate data collection and reporting processes for improved
            efficiency
          </li>
          <li>
            Create predictive models and perform statistical inference on
            datasets
          </li>
          <li>
            Design and implement data pipelines for continuous data processing
            and analysis
          </li>
          <li>
            Develop custom data analysis tools and scripts to address specific
            business needs
          </li>
          <li>
            Translate raw data into actionable insights for decision-making
          </li>
          <li>
            Collaborate with stakeholders to define key performance indicators
            and metrics
          </li>
        </ul>

        {/* <button className="skill__description" onClick={toggleDataState} disabled>
          {dataState ? "Hide Content" : "See What I Can Do"}
        </button> */}

        {/* <h3 className="edu_header">Data Engineering</h3>

        <p>Languages and Tools:-</p>

        <p className="skills_section">
          PYTHON SQL JAVA : Hadoop ApacheSpark Kafka Flink MongoDB Cassandra
          Snowflake Redshift Terraform CloudFormation Azure AWS GCP
        </p>
        <ul
          className="skill__list"
          style={{ display: engineeringState ? "block" : "none" }}
        >
            <p className="what__text">What I can do:-</p>
          <li>
            Design and implement scalable, fault-tolerant big data architectures
            using Hadoop and Apache Spark
          </li>
          <li>
            Develop real-time data streaming solutions with Apache Kafka and
            Apache Flink
          </li>
          <li>
            Create and manage distributed NoSQL databases using MongoDB and
            Cassandra
          </li>
          <li>
            Build and optimize data warehousing solutions with Snowflake and
            Amazon Redshift
          </li>
          <li>
            Implement Infrastructure as Code (IaC) using Terraform and AWS
            CloudFormation
          </li>
          <li>
            Orchestrate and automate data pipelines across multiple cloud
            platforms (Azure, AWS, GCP)
          </li>
          <li>
            Design and implement ETL/ELT processes for efficient data
            integration and transformation
          </li>
          <li>
            Develop data lakes and data marts to support various analytical
            needs
          </li>
          <li>
            Optimize data storage and retrieval for improved query performance
            and cost efficiency
          </li>
          <li>
            Implement data governance and security measures across the data
            infrastructure
          </li>
          <li>
            Create and manage data catalogs for improved data discovery and
            metadata management
          </li>
          <li>
            Design and implement data quality checks and data validation
            processes
          </li>
          <li>
            Develop scalable data ingestion frameworks to handle diverse data
            sources and formats
          </li>
          <li>
            Implement data partitioning and indexing strategies for optimized
            data access
          </li>
          <li>
            Configure and manage cloud-based data services to ensure high
            availability and disaster recovery
          </li>
          <li>
            Optimize data processing workflows for cost-effectiveness across
            different cloud platforms
          </li>
        </ul>

        <button className="skill__description" onClick={toggleEngineeringState}>
          {engineeringState ? "Hide Content" : "See What I Can Do"}
        </button> */}


        <h3 className="edu_header">Machine Learning</h3>

        <p>Languages and Tools:-</p>


        <p className="skills_section">
          PYTHON SQL JAVASCRIPT : Pandas Scikit-Learn Teansorflow Keras Pytorch
          Kubeflow MLflow
        </p>
        <ul className="skill__list"
          style={{ display: mlState ? "block" : "none" }}>
            <p className="what__text">What I can do:-</p>
          <li>
            Develop and deploy machine learning models using Python, integrating
            with SQL databases and JavaScript applications
          </li>
          <li>
            Preprocess and engineer features from diverse datasets using Pandas
            and custom pipelines
          </li>
          <li>
            Implement a wide range of machine learning algorithms using
            Scikit-Learn for classification, regression, and clustering tasks
          </li>
          <li>
            Design and train deep learning models using TensorFlow and Keras for
            complex pattern recognition problems
          </li>
          <li>
            Develop custom neural network architectures with PyTorch for
            specialized machine learning tasks
          </li>
          <li>
            Orchestrate end-to-end machine learning workflows using Kubeflow for
            scalable and reproducible ML pipelines
          </li>
          <li>
            Manage the full lifecycle of ML models, including versioning,
            tracking, and deployment, using MLflow
          </li>
          <li>
            Perform hyperparameter tuning and model optimization to improve
            model performance
          </li>
          <li>
            Implement transfer learning techniques to leverage pre-trained
            models for new tasks
          </li>
          <li>
            Develop natural language processing (NLP) models for text
            classification, sentiment analysis, and language generation
          </li>
          <li>
            Create computer vision models for image classification, object
            detection, and image segmentation
          </li>
          <li>
            Design and implement recommender systems using collaborative
            filtering and content-based approaches
          </li>
          <li>
            Develop time series forecasting models for predicting future trends
            and patterns
          </li>
          <li>
            Implement unsupervised learning techniques for anomaly detection and
            pattern discovery
          </li>
          <li>
            Create interpretable ML models and generate explanations for model
            predictions
          </li>
          <li>
            Develop and deploy real-time machine learning systems for online
            prediction and decision-making
          </li>
        </ul>
        {/* <button className="skill__description" onClick={toggleMlState} disabled>
          {mlState ? "Hide Content" : "See What I Can Do"}
        </button> */}
      </div>
    </div>
  );
};

export default Skills;
