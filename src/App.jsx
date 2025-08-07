import { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Rashvi - AI/ML Student</div>
          <ul className="nav-menu">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className={activeSection === "skills" ? "active" : ""}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className={activeSection === "projects" ? "active" : ""}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className={activeSection === "experience" ? "active" : ""}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Rashvi</h1>
            <h2>AI/ML Engineering Student</h2>
            <p>
              Final year student passionate about machine learning, artificial
              intelligence, and developing innovative solutions. Currently
              studying at Srinivas University Institute of Technology.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="ai-visual">
              <div className="neural-network">
                <div className="node"></div>
                <div className="node"></div>
                <div className="node"></div>
                <div className="node"></div>
                <div className="node"></div>
                <div className="node"></div>
                <div className="node"></div>
                <div className="node"></div>
                <div className="node"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="main-content">
        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a final year AI/ML Engineering student at Srinivas
                  University Institute of Technology, passionate about
                  artificial intelligence and machine learning. I'm actively
                  learning and developing skills in various AI/ML technologies
                  and frameworks.
                </p>
                <p>My academic focus includes:</p>
                <ul>
                  <li>Machine Learning and Deep Learning</li>
                  <li>Computer Vision and Image Processing</li>
                  <li>Natural Language Processing</li>
                  <li>Data Science and Analytics</li>
                </ul>
                <div className="stats">
                  <div className="stat">
                    <h3>Final</h3>
                    <p>Year Student</p>
                  </div>
                  <div className="stat">
                    <h3>AI/ML</h3>
                    <p>Engineering</p>
                  </div>
                  <div className="stat">
                    <h3>Active</h3>
                    <p>Learner</p>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="profile-placeholder">
                  <div className="avatar">R</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <div className="container">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Machine Learning</h3>
                <div className="skill-items">
                  <span className="skill-item">TensorFlow</span>
                  <span className="skill-item">PyTorch</span>
                  <span className="skill-item">Scikit-learn</span>
                  <span className="skill-item">Keras</span>
                  <span className="skill-item">XGBoost</span>
                  <span className="skill-item">LightGBM</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Deep Learning</h3>
                <div className="skill-items">
                  <span className="skill-item">CNN</span>
                  <span className="skill-item">RNN/LSTM</span>
                  <span className="skill-item">Transformer</span>
                  <span className="skill-item">GAN</span>
                  <span className="skill-item">BERT/GPT</span>
                  <span className="skill-item">Computer Vision</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Programming</h3>
                <div className="skill-items">
                  <span className="skill-item">Python</span>
                  <span className="skill-item">R</span>
                  <span className="skill-item">SQL</span>
                  <span className="skill-item">JavaScript</span>
                  <span className="skill-item">C++</span>
                  <span className="skill-item">Java</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Platforms</h3>
                <div className="skill-items">
                  <span className="skill-item">AWS SageMaker</span>
                  <span className="skill-item">Google Cloud AI</span>
                  <span className="skill-item">Azure ML</span>
                  <span className="skill-item">Docker</span>
                  <span className="skill-item">Kubernetes</span>
                  <span className="skill-item">MLflow</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Data & Analytics</h3>
                <div className="skill-items">
                  <span className="skill-item">Pandas</span>
                  <span className="skill-item">NumPy</span>
                  <span className="skill-item">Matplotlib</span>
                  <span className="skill-item">Seaborn</span>
                  <span className="skill-item">Plotly</span>
                  <span className="skill-item">Tableau</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>MLOps & Deployment</h3>
                <div className="skill-items">
                  <span className="skill-item">MLflow</span>
                  <span className="skill-item">Kubeflow</span>
                  <span className="skill-item">Airflow</span>
                  <span className="skill-item">FastAPI</span>
                  <span className="skill-item">Flask</span>
                  <span className="skill-item">REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-visual">Computer Vision</div>
                </div>
                <div className="project-content">
                  <h3>Image Classification Model</h3>
                  <p>
                    Developed a CNN-based image classification system for
                    identifying objects in images. Achieved 85% accuracy on
                    custom dataset using transfer learning techniques.
                  </p>
                  <div className="project-tech">
                    <span>Python</span>
                    <span>TensorFlow</span>
                    <span>OpenCV</span>
                    <span>Keras</span>
                  </div>
                  <div className="project-links">
                    <button className="btn-link">View Demo</button>
                    <button className="btn-link">GitHub</button>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-visual">NLP</div>
                </div>
                <div className="project-content">
                  <h3>Sentiment Analysis Model</h3>
                  <p>
                    Built a sentiment analysis model for social media data using
                    LSTM networks. Achieved 78% accuracy in classifying
                    positive, negative, and neutral sentiments.
                  </p>
                  <div className="project-tech">
                    <span>Python</span>
                    <span>TensorFlow</span>
                    <span>NLTK</span>
                    <span>Pandas</span>
                  </div>
                  <div className="project-links">
                    <button className="btn-link">View Demo</button>
                    <button className="btn-link">GitHub</button>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-visual">ML Pipeline</div>
                </div>
                <div className="project-content">
                  <h3>Student Performance Predictor</h3>
                  <p>
                    Developed a machine learning model to predict student
                    performance based on various factors. Used multiple
                    algorithms and achieved 82% accuracy.
                  </p>
                  <div className="project-tech">
                    <span>Python</span>
                    <span>Scikit-learn</span>
                    <span>Pandas</span>
                    <span>Matplotlib</span>
                  </div>
                  <div className="project-links">
                    <button className="btn-link">View Demo</button>
                    <button className="btn-link">GitHub</button>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-visual">Data Analysis</div>
                </div>
                <div className="project-content">
                  <h3>Data Visualization Dashboard</h3>
                  <p>
                    Created an interactive dashboard for analyzing and
                    visualizing educational data using Python libraries.
                    Implemented various charts and graphs.
                  </p>
                  <div className="project-tech">
                    <span>Python</span>
                    <span>Plotly</span>
                    <span>Pandas</span>
                    <span>Streamlit</span>
                  </div>
                  <div className="project-links">
                    <button className="btn-link">View Demo</button>
                    <button className="btn-link">GitHub</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience Section */}
        <section id="experience" className="experience">
          <div className="container">
            <h2>Education & Academic Projects</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>AI/ML Engineering</h3>
                    <span className="company">
                      Srinivas University Institute of Technology
                    </span>
                    <span className="duration">2020 - 2024</span>
                  </div>
                  <ul>
                    <li>
                      Final year student specializing in Artificial Intelligence
                      and Machine Learning
                    </li>
                    <li>
                      Completed core courses in ML, Deep Learning, Computer
                      Vision, and NLP
                    </li>
                    <li>
                      Working on final year project in Computer Vision
                      applications
                    </li>
                    <li>
                      Maintained strong academic performance with focus on
                      practical implementations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Academic Projects</h3>
                    <span className="company">University Projects</span>
                    <span className="duration">2022 - 2024</span>
                  </div>
                  <ul>
                    <li>
                      Developed image classification models using CNN
                      architectures
                    </li>
                    <li>
                      Implemented sentiment analysis for social media data
                    </li>
                    <li>
                      Created recommendation systems for e-commerce applications
                    </li>
                    <li>
                      Worked on data preprocessing and feature engineering
                      techniques
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Certifications & Workshops</h3>
                    <span className="company">Online Learning</span>
                    <span className="duration">2021 - 2024</span>
                  </div>
                  <ul>
                    <li>
                      Completed Machine Learning courses on Coursera and Udemy
                    </li>
                    <li>Participated in AI/ML workshops and hackathons</li>
                    <li>
                      Learned Python programming and data science fundamentals
                    </li>
                    <li>
                      Explored various ML frameworks and tools through hands-on
                      projects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let's Connect</h3>
                <p>
                  I'm always interested in learning opportunities, internships,
                  and collaborations. Whether you have a project idea or want to
                  discuss AI/ML, feel free to reach out!
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span>rashvi.ai.ml@email.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>Mangalore, Karnataka, India</span>
                  </div>
                </div>
                <div className="social-links">
                  <button className="social-btn">LinkedIn</button>
                  <button className="social-btn">GitHub</button>
                  <button className="social-btn">Twitter</button>
                  <button className="social-btn">Medium</button>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>
              &copy; 2024 Rashvi - AI/ML Engineering Student. Built with React &
              ❤️
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
