import React from 'react'
import './photocard.css';
import './script.js';

const Photocard = () => {
  return (
    <><div class="slider-container">
          <div class="project-slider">
              <div class="project-card active">
                  <img class="project-media" src="Pic-46.JPG" alt="Project 1" />
                      <div class="project-info">
                          <h3>Project 1</h3>
                          <p>A cool description of project 1.</p>
                      </div>
                  </div>
              <div class="project-card">
                  <img class="project-media" src="Pic-49.JPG" alt="Project 2" />
                      <div class="project-info">
                          <h3>Project 2</h3>
                          <p>Description for project 2.</p>
                      </div>
                  </div>
              <div class="project-card">
                  <img class="project-media" src="Pic-50.JPG" alt="Project 3" />
                      <div class="project-info">
                          <h3>Project 3</h3>
                          <p>Description for project 3.</p>
                      </div>
                  </div>
          </div>
      </div><div class="scroll-indicator">Scroll to navigate</div><script src="script.js"></script></>
  )
}
export default Photocard;

