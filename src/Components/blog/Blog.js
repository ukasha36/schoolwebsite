import React from "react";
import "./Blog.css";
import img1 from "./img1.webp";
import img2 from "./img2.webp";
import software from "./software.png";

const Blog = () => {
  return (
    <section id="blog" className="main-blog">
      <h2 className="blog-heading">Featured Blogs</h2>
      <div className="blog-details">
        <div className="blog-post">
          <img src={img1} alt="Blog Post 1" />
          <h3>Build A Custom Pagination Component In Reactjs From Scratch</h3>
          <p>
            Learn how to build a custom pagination component in ReactJS from
            scratch. Follow this step-by-step guide to integrate the Pagination
            component in your ReactJS project.
          </p>
        </div>
        <div className="blog-post">
          <img src={img2} alt="Blog Post 2" />
          <h3>Create a Loading Screen in ReactJS</h3>
          <p>
            Learn how to build a loading screen component in ReactJS from
            scratch. Follow this step-by-step guide to integrate a loading screen
            component in your ReactJS project.
          </p>
        </div>
        <div className="blog-post">
          <img src={software} alt="Blog Post 2" />
          <h3>Tips for choosing the right software for your needs</h3>
          <p>
          Learn how to choose the right software for your business needs and avoid making costly mistakes.
          Hear what your customers have to say about your software and how it has helped them.
          </p>
        </div>
        {/* Add more blog posts as needed */}
      </div>
    </section>
  );
};

export default Blog;
