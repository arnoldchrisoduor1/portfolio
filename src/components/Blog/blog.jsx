import Elixir from "../../assets/elixir.jpeg"
import Selection from "../../assets/modelselection.jpeg"
import evaluation from "../../assets/model_evaluation.png"
import './blog.css';

const Blog = () => {
  return (
    <div>
      <h1 className='blog__header'>My Blog</h1>
      <div className="blog__group">
      <div className='blog__container'>
        <img src={Elixir} className="blog_img" alt="Machine Learning Picture 2" />

        <div className="blog_data">
          <h2 className="blog__title">Build Production Ready Scalable API with Elixir.</h2>
          <p className="blog_description">In this 6 part series I go indepth on how to build an API with Elixir using the Phoenix Framework. Authentication, Building Middlewares, Defining Token types and Expirations are some of the topics covered.</p>
          <h3 className="blog__read_more"><a href="https://medium.com/@arnoldchris262/how-to-build-scalable-production-ready-apis-in-phoenix-elixir-part-1-bdc5d7981d83" style={{ color: "white" }}>Read More</a></h3>
        </div>
        
      </div>
      <div className='blog__container'>
        <img src={evaluation} className="blog_img" alt="Machine Learning Picture 2" />

        <div className="blog_data">
          <h2 className="blog__title">Strategies in Evaluating Machine Learning Models</h2>
          <p className="blog_description">I dive into the various strategies employed in evaluating regression, classification and clustering algorithms. I also discuss creating evaluation metrics and visualizng the effects of hyperparameter values</p>
          <h3 className="blog__read_more"><a href="https://dev.to/oduor_arnold/strategies-in-evaluating-machine-learning-models-3jeg" style={{ color: "white" }}>Read More</a></h3>
        </div>
      </div>

      <div className='blog__container'>
        <img src={Selection} className="blog_img" alt="Machine Learning Picture 2" />

        <div className="blog_data">
          <h2 className="blog__title">Machine Learning Model Selection</h2>
          <p className="blog_description">In this article I will go through how to choose the best model between multiple machine learning models with varying hyperparameters.</p>
          <h3 className="blog__read_more"><a href="https://dev.to/oduor_arnold/ml-model-selection-1437" style={{ color: "white" }}>Read More</a></h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Blog