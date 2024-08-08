import Machine2 from "../../assets/ml2.png"
import './blog.css';

const Blog = () => {
  return (
    <div>
      <h1 className='blog__header'>My Blog</h1>
      <div className='blog__container'>
        <img src={Machine2} className="blog_img" alt="Machine Learning Picture 2" />
        <div className="blog_data">
          <h2 className="blog__title">Understanding Multilayer Perceptrons</h2>
          <p className="blog_description">Dive into the Machine Learning and Know the nitty gritty with hands on experience...</p>
          <h3 className="blog__read_more">Read More</h3>
        </div>
      </div>
    </div>
  )
}

export default Blog