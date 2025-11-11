import React from 'react';
import './App.css';
// Resume Link
const resumeLink = 'https://drive.google.com/file/d/1LQ95vAyJHYhOoJa69NO0urvnAcX662Hw/view?usp=sharing';
export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm" style={{ backgroundColor: 'brown' }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">Likith Kumar Osuri</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#internships">Internships</a></li>
              <li className="nav-item"><a className="nav-link" href="#certs">Certificates</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-6 fw-bold mb-3">Hi, I’m <span className="text-primary">Likith Kumar</span></h1>
          <p className="lead mb-4">Full Stack Developer </p>

          {/* PROFILE IMAGE CENTERED */}
          <div className="d-flex justify-content-center mb-4">
            <img
              src="/assets/profile.jpg"
              alt="Likith"
              className="img-fluid rounded-circle shadow"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
          </div>

          <p className="px-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
            I build responsive web apps and analyze data to extract meaningful insights.
            Currently completing my B.Tech at Sri Sai Institute of Technology & Science.
          </p>

          <div className="mt-4">
            <a className="btn btn-primary me-2 mb-2" href={resumeLink} target="_blank" rel="noreferrer">
              <i className="bi bi-download"></i> Download Resume
            </a>
            <a className="btn btn-outline-primary mb-2" href="#contact">
              <i className="bi bi-envelope"></i> Contact Me
            </a>
          </div>

          <div className="mt-4 small text-muted">
            <strong>Email:</strong> likithkumar385@gmail.com <br />
            <strong>Phone:</strong> +91 9515370162
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-5">About Me</h2>
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-12 mb-4">
              <div className="card shadow-lg border-0 rounded-4 p-4">
                <p className="fs-5"> Hello! I’m <strong>Likith Kumar</strong>, a passionate and detail-oriented <strong> Full Stack Developer</strong> who loves building scalable, functional, and visually appealing web applications. I am always eager to learn new technologies and improve my skills in both frontend and backend development. </p> <p className="fs-5"> I have experience creating responsive layouts with <strong>ReactJS</strong> and <strong>CSS</strong>, developing secure and efficient APIs with <strong>Django</strong>, and managing projects using <strong>Git and GitHub</strong>. I enjoy writing clean, maintainable code that delivers seamless user experiences across devices. </p> <p className="fs-5"> As a fresher, I am motivated to take on challenging projects, collaborate with teams, and contribute to meaningful solutions. I aim to turn ideas into real-world applications that are both innovative and impactful, continuously growing as a developer in the process. </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="bg-white shadow p-4 rounded">
                <h4 className="text-primary mb-3 text-center">Quick Facts</h4>
                <ul className="list-unstyled fs-6 text-start">
                  <li><strong>Name:</strong> Likith Kumar</li>
                  <li><strong>Role:</strong> Full Stack Developer</li>
                  <li><strong>Education:</strong> B.Tech in CSE (2021–2025)</li>
                  <li><strong>College:</strong> Sri Sai Institute of Technology & Science</li>
                  <li><strong>Location:</strong> Andhra Pradesh, India</li>
                  <li><strong>Email:</strong> likithkumar385@gmail.com</li>
                </ul>
                <div className="mt-3 text-center">
                  <a href="https://github.com/Likithkumarr" target="_blank" rel="noopener noreferrer" className="btn btn-dark mx-2">
                    <i className="bi bi-github"></i> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/likith-kumar-osuri-542844228/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-2">
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* EDUCATION SECTION */}
<section id="education" className="py-5 bg-light text-dark">
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">Education</h2>
    <div className="row justify-content-center">
      <div className="col-md-8">

        {/* B.Tech */}
        <div className="card shadow-lg border-0 rounded-4 p-4 mb-4">
          <h5 className="fw-bold">B.Tech in Computer Science & Engineering</h5>
          <h6 className="text-muted mb-2">Sri Sai Institute of Technology & Science,Rayachoty | 2021 – 2025</h6>
          <p className="mb-0">
            Successfully completed Bachelor's in CSE with a focus on full-stack development, 
            data analysis, and software engineering fundamentals.
          </p>
          <p className="mb-0"><strong>Percentage:</strong> 81.83%</p>
        </div>

        {/* High School */}
        <div className="card shadow-lg border-0 rounded-4 p-4 mb-4">
          <h5 className="fw-bold">Intermediate In MPC</h5>
          <h6 className="text-muted mb-2">Sri Chaitanya Junior College,Tirupathi | 2019-2021</h6>
          <p className="mb-0">
            Completed intermediate with focus on Mathematics, Physics, and Chemistry, 
            developing strong analytical and problem-solving skills.
          </p>
          <p className="mb-0"><strong>Percentage:</strong> 92.9%</p>
        </div>

        {/* Secondary School */}
        <div className="card shadow-lg border-0 rounded-4 p-4 mb-4">
          <h5 className="fw-bold">High School(SSC)</h5>
          <h6 className="text-muted mb-2">Z P High School,Nooliveedu | 2018-2019</h6>
          <p className="mb-0">
            Completed secondary education with excellent academic performance, 
            building a solid foundation for higher studies.
          </p>
          <p className="mb-0"><strong>Percentage:</strong> 95%</p>
        </div>

      </div>
    </div>
  </div>
</section>

{/* SKILLS SECTION */}
<section id="skills" className="py-5 bg-white">
  <div className="container">
    {/* Heading */}
    <h2
      className="h3 mb-5 text-center fw-bold"
      style={{
        color: "#ff7b00", // Orange heading
        letterSpacing: "1px",
        textTransform: "uppercase",
      }}
    >
      Skills
    </h2>

    <div className="row g-4 justify-content-center">
      {[
        {
          title: "Programming Languages",
          list: [
            { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          ],
        },
        {
          title: "Frontend Development",
          list: [
            { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          ],
        },
        {
          title: "Data Analysis & Visualization",
          list: [
            { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
            { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { name: "Matplotlib", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Seaborn", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Power BI", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
          ],
        },
        {
          title: "Databases",
          list: [
            { name: "Microsoft SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
            { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          ],
        },
        {
          title: "Tools",
          list: [
            { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "SQL Server", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
            { name: "MySQL Workbench", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Jupyter Notebook", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
            { name: "IDLE", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
          ],
        },
        {
          title: "Cloud & DevOps",
          list: [
            { name: "Azure Fundamentals", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
            { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "DevOps", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          ],
        },
      ].map((skill, i) => (
        <div key={i} className="col-sm-6 col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4">
            <div className="card-body">
              <h6
                className="fw-semibold text-uppercase mb-3"
                style={{ color: "#0D9488" }} // Navy blue subheading
              >
                {skill.title}
              </h6>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {skill.list.map((item, j) => (
                  <div
                    key={j}
                    className="d-flex flex-column align-items-center"
                    style={{ width: "80px" }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        marginBottom: "6px",
                      }}
                    />
                    <span className="small">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* PROJECTS */}
<section id="projects" className="py-5 bg-white">
  <div className="container">
    <h2 className="h3 mb-5 text-center fw-bold"
    style={{ color: "#ff7b00" }}
    >Projects</h2>

    <div className="row g-4">
      {/* Project 1 */}
      <div className="col-md-6 col-lg-6">
        <div className="card h-100 shadow-lg border-0 rounded-4">
          <div className="card-body d-flex flex-column text-center">
            <h5 className="card-title fw-bold text-dark mb-3">
              Dark Side of the Web — Dark Web Classification
            </h5>
            <p className="card-text small">
              Built a TextCNN model to classify dark web content and applied topic modelling
              to extract themes. Visualized findings using Python libraries.
            </p>
            <p className="small mb-3">
              <strong>Tech:</strong> Django, Python, NumPy, Pandas, HTML/CSS/JS
            </p>
            <div className="mt-auto">
              <a href="#" className="btn btn-outline-primary btn-sm mx-1">Demo</a>
              <a href="#" className="btn btn-primary btn-sm mx-1">Code</a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="col-md-6 col-lg-6">
        <div className="card h-100 shadow-lg border-0 rounded-4">
          <div className="card-body d-flex flex-column text-center">
            <h5 className="card-title fw-bold text-dark mb-3">
              Exploratory Data Analysis — Zomato
            </h5>
            <p className="card-text small">
              Cleaned and analyzed 50,000+ rows, handling missing values and deriving insights
              about cuisine vs ratings.
            </p>
            <p className="small mb-3">
              <strong>Tech:</strong> Python, Pandas, Matplotlib, Seaborn
            </p>
            <div className="mt-auto">
              <a href="https://github.com/Likithkumarr/EDA_Of_Zomato_data/blob/main/Zomato%20Analysis.ipynb" className="btn btn-outline-primary btn-sm mx-1">Demo</a>
              <a href="https://github.com/Likithkumarr/EDA_Of_Zomato_data" className="btn btn-primary btn-sm mx-1">Code</a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="col-md-6 col-lg-6">
        <div className="card h-100 shadow-lg border-0 rounded-4">
          <div className="card-body d-flex flex-column text-center">
            <h5 className="card-title fw-bold text-dark mb-3">E-commerce Product Page</h5>
            <p className="card-text small">
              React app consuming DummyJSON Products API; supports add/remove from cart and
              product listing with images.
            </p>
            <p className="small mb-3"><strong>Tech:</strong> React.js, Bootstrap, DummyJSON API</p>
            <div className="mt-auto">
              <a href="https://Likithkumarr.github.io/E-Commerce-Web-App" className="btn btn-outline-primary btn-sm mx-1">Demo</a>
              <a href="https://github.com/Likithkumarr/E-Commerce-Web-App" className="btn btn-primary btn-sm mx-1">Code</a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="col-md-6 col-lg-6">
        <div className="card h-100 shadow-lg border-0 rounded-4">
          <div className="card-body d-flex flex-column text-center">
            <h5 className="card-title fw-bold text-dark mb-3">Movie-Search</h5>
            <p className="card-text small">
              A React-based web app that allows users to search movies, view details, and explore favorites with a smooth, interactive interface.
            </p>
            <p className="small mb-3"><strong>Tech:</strong> React.js, Bootstrap, DummyJSON API</p>
            <div className="mt-auto">
              <a href="https://likithkumarr.github.io/Movie-Search/" className="btn btn-outline-primary btn-sm mx-1">Demo</a>
              <a href="https://github.com/likithkumarr/Movie-Search/" className="btn btn-primary btn-sm mx-1">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* INTERNSHIPS */}
<section id="internships" className="py-5 bg-light">
  <div className="container">
    <h2 className="h3 mb-5 text-center fw-bold text-primary">Internships</h2>

    <div className="row g-4 justify-content-center">
      {/* Internship 1 */}
      <div className="col-md-5">
        <div className="card shadow-lg border-0 rounded-4 text-center">
          <div className="card-body">
            <h5 className="card-title fw-bold">Python Full Stack Developer Intern</h5>
            <h6 className="text-muted mb-2">
              Sri Vensy Technologies Pvt. Ltd. — Dec 2024 to Apr 2025
            </h6>
            <p className="card-text small">
              Worked on web development (Django, Frontend), database operations, and
              full-stack workflow.
            </p>
            <a
              href="https://drive.google.com/file/d/1AYrEkMTCR76TVtonNG2aEZvE0Nu022am/view?usp=sharing"
              className="btn btn-primary btn-sm mt-2"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>

      {/* Internship 2 */}
      <div className="col-md-5">
        <div className="card shadow-lg border-0 rounded-4 text-center">
          <div className="card-body">
            <h5 className="card-title fw-bold">Python Intern</h5>
            <h6 className="text-muted mb-2">
              Sri Vensy Technologies Pvt. Ltd. — Apr 2024 to Jul 2024
            </h6>
            <p className="card-text small">
              Gained hands-on experience in Python fundamentals, scripting, and small
              projects.
            </p>
            <a
              href="https://drive.google.com/file/d/152IzA49HWyVz5DbLEY3RRFF9xDbM3sVo/view?usp=sharing"
              className="btn btn-primary btn-sm mt-2"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CERTIFICATES */}
<section id="certs" className="py-5 bg-white">
  <div className="container">
    <h2 className="h3 mb-5 text-center fw-bold text-primary">
      Certificates & Achievements
    </h2>

    <div className="row g-4 justify-content-center">
      {/* Certificate cards */}
      {[
        {
          title: "Cloud Computing — NPTEL",
          link: "https://drive.google.com/file/d/1q2L62291aHZlAYnsdkHtL6XFfiGm9ff3/view?usp=sharing",
        },
        {
          title: "Python Full Stack — Besant Technologies",
          link: "https://drive.google.com/file/d/YOUR_PYTHON_CERT_FILE_ID/view?usp=sharing",
        },
        {
          title: "Inspire Award Scheme — State Level Science Exhibition (2013)",
          link: "https://drive.google.com/file/d/12PudAXChEqAjv_649nPKorQxGUDgbpvQ/view?usp=sharing",
        },
        {
          title: "Dr. A.P.J. Abdul Kalam Vidya Puraskar — 2019",
          link: "https://drive.google.com/file/d/1ra3uyM5Sd0838Gaw3B784jId8YvFE1PA/view?usp=sharing",
        },
      ].map((cert, idx) => (
        <div className="col-md-5 col-lg-4" key={idx}>
          <div className="card text-center shadow-lg border-0 rounded-4 p-3 h-100">
            <div className="card-body">
              <h6 className="card-title fw-bold mb-3">{cert.title}</h6>
              <a
                href={cert.link}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CONTACT */}
<section id="contact" className="py-5 bg-white">
  <div className="container">
    <h2
      className="h3 mb-5 text-center fw-bold"
      style={{
        color: "#007bff",
        letterSpacing: "1px",
        textTransform: "uppercase",
      }}
    >
      Contact
    </h2>

    <div className="row justify-content-center align-items-center">
      {/* CONTACT FORM */}
      <div className="col-md-6 mb-4">
        <div className="card border-0 shadow-lg rounded-4 p-4">
          <form
            action="https://formspree.io/f/xqayrjpb"
            method="POST"
          >
            <div className="mb-3 text-start">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your email"
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary px-4 rounded-pill">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>    
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="py-3 bg-dark text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <div>© {new Date().getFullYear()} Likith Kumar Osuri</div>
          <div>
            <a className="text-white me-3" href="https://github.com/Likithkumarr" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-white" href="https://www.linkedin.com/in/likith-kumar-osuri-542844228/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* You can keep your Projects, Internships, Certificates, and Contact sections below as they are */}
    </div>
  );
}
