/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/lamp.jpg";

const imageAltText = "lamp with blue background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Flask for Web Development 🎉",
    description:
      "Collaboration to create a beginner-friendly article to help explain Flask, a micro web framework for Python, and tooling to get started with web applications.",
    url: "https://flask.palletsprojects.com/",
  },
  {
    title: "Python Programming for Beginners",
    description:
      "Contributed to creating interactive Python notebooks to accompany each lesson. These help provide a hands-on experience of Python basics, data structures, and algorithms.",
    url: "https://github.com/microsoft/Python-Programming-For-Beginners",
  },
  {
    title: "My Data Science Portfolio Site",
    description:
      "Created from a Python data science workshop and deployed to Heroku. Includes my analysis projects, machine learning models, and data visualization skills.",
    url: "https://github.com/datasciencemasters/go",
  },
  {
    title: "Jupyter Notebooks and Google Colab",
    description:
      "Video tutorial to explain when to use Jupyter Notebooks versus Google Colab, and how best to use each tool for Python programming, data analysis, and machine learning projects.",
    url: "https://www.youtube.com/watch?v=inN8seMm7UI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
