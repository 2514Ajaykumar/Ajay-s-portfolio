# Personal Portfolio Website - Complete Code

## Project Structure
```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── app.js         # JavaScript functionality
└── README.md          # Project documentation
```

## HTML - index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pasula Ajay Kumar - Portfolio</title>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Pacifico&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="#home">Ajay Kumar</a>
            </div>
            <div class="nav-menu" id="nav-menu">
                <a href="#home" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero/Home Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">Hi, I'm Pasula Ajay Kumar ✨</h1>
                <p class="hero-subtitle">I build things with love, logic, and a little bit of magic 💫</p>
                
                <!-- Animated Typing Text -->
                <div class="typing-container">
                    <span class="typing-text" id="typing-text"></span>
                    <span class="cursor">|</span>
                </div>
                
                <!-- Call to Action Buttons -->
                <div class="hero-buttons">
                    <a href="#projects" class="btn-primary">View Projects</a>
                    <a href="#contact" class="btn-secondary">Get In Touch</a>
                </div>
            </div>
        </div>
        
        <!-- Animated Background Particles -->
        <div class="particles" id="particles"></div>
    </section>

    <!-- About/Image Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-image">
                    <!-- Profile Image Placeholder -->
                    <div class="image-placeholder">
                        <div class="image-text">Your Photo Here</div>
                    </div>
                </div>
                <div class="about-text">
                    <h2 class="section-title">About Me</h2>
                    <p>Passionate about machine learning and data science, I'm an aspiring ML engineer who loves turning complex data into meaningful insights. With a strong foundation in programming and a keen eye for detail, I build intelligent solutions that make a difference.</p>
                    <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or diving deep into the latest research in artificial intelligence.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="projects-grid">
                
                <!-- Main Project -->
                <div class="project-card featured">
                    <div class="project-header">
                        <h3>Student Performance Prediction System</h3>
                        <div class="project-type">Machine Learning</div>
                    </div>
                    <p class="project-description">
                        ML-based web application built with Flask for predicting student academic performance using machine learning algorithms. Features data preprocessing, model training, and interactive web interface.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">Flask</span>
                        <span class="tech-tag">Machine Learning</span>
                        <span class="tech-tag">Scikit-learn</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/2514Ajaykumar/mlproject" target="_blank" class="project-link">
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                <!-- Placeholder Projects -->
                <div class="project-card">
                    <div class="project-header">
                        <h3>Data Analysis Dashboard</h3>
                        <div class="project-type">Data Science</div>
                    </div>
                    <p class="project-description">
                        Interactive dashboard for analyzing business metrics with real-time data visualization and insights generation.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">Pandas</span>
                        <span class="tech-tag">Plotly</span>
                        <span class="tech-tag">Streamlit</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">
                            <span>Coming Soon</span>
                        </a>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-header">
                        <h3>Portfolio Website</h3>
                        <div class="project-type">Web Development</div>
                    </div>
                    <p class="project-description">
                        Responsive personal portfolio website with modern design, smooth animations, and interactive elements.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">Responsive</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills & Technologies</h2>
            <div class="skills-grid">
                
                <!-- Programming Languages -->
                <div class="skill-category">
                    <h3>Programming Languages</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>Python</span>
                                <span>90%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>Java</span>
                                <span>75%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 75%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>JavaScript</span>
                                <span>70%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 70%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Data Science & ML -->
                <div class="skill-category">
                    <h3>Data Science & ML</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>Machine Learning</span>
                                <span>85%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>Data Analysis</span>
                                <span>80%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 80%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>SQL</span>
                                <span>75%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 75%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Web Technologies -->
                <div class="skill-category">
                    <h3>Web Technologies</h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-info">
                                <span>CSS</span>
                                <span>85%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <p>Let's connect and build something amazing together! I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.</p>
                    
                    <!-- Social Links -->
                    <div class="social-links">
                        <a href="https://github.com/2514Ajaykumar" target="_blank" class="social-link github">
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/ajay-kumar-pasula-602310290/" target="_blank" class="social-link linkedin">
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
                
                <!-- Contact Form -->
                <div class="contact-form">
                    <form id="contact-form">
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Pasula Ajay Kumar. Built with ❤️ and lots of ☕</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="js/app.js"></script>
</body>
</html>
```

## CSS - css/style.css

```css
/* ==========================================================================
   GLOBAL STYLES & VARIABLES
   ========================================================================== */

:root {
    /* Color Palette */
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --bg-card: #1e1e1e;
    
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --text-muted: #666666;
    
    --accent-pink: #ff6b9d;
    --accent-purple: #9b59b6;
    --accent-blue: #00d4ff;
    --accent-baby-pink: #ffb6c1;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, var(--accent-pink), var(--accent-purple));
    --gradient-secondary: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
    
    /* Typography */
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Inter', sans-serif;
    --font-accent: 'Pacifico', cursive;
    
    /* Spacing */
    --section-padding: 100px 0;
    --container-padding: 0 20px;
    
    /* Transitions */
    --transition-fast: 0.3s ease;
    --transition-slow: 0.6s ease;
    
    /* Shadows */
    --shadow-glow: 0 0 20px rgba(255, 107, 157, 0.3);
    --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* ==========================================================================
   RESET & BASE STYLES
   ========================================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

/* ==========================================================================
   UTILITY CLASSES
   ========================================================================== */

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--container-padding);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 60px;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Button Styles */
.btn-primary, .btn-secondary {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition-fast);
    border: 2px solid transparent;
    cursor: pointer;
    font-family: var(--font-primary);
}

.btn-primary {
    background: var(--gradient-primary);
    color: var(--text-primary);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
}

.btn-secondary {
    background: transparent;
    color: var(--accent-pink);
    border-color: var(--accent-pink);
}

.btn-secondary:hover {
    background: var(--accent-pink);
    color: var(--text-primary);
    transform: translateY(-2px);
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 15px 0;
    transition: var(--transition-fast);
}

.navbar.scrolled {
    background: rgba(10, 10, 10, 0.98);
    padding: 10px 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo a {
    font-family: var(--font-accent);
    font-size: 1.5rem;
    color: var(--accent-pink);
    text-decoration: none;
    transition: var(--transition-fast);
}

.nav-logo a:hover {
    text-shadow: 0 0 10px var(--accent-pink);
}

.nav-menu {
    display: flex;
    gap: 30px;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition-fast);
    position: relative;
}

.nav-link:hover,
.nav-link.active {
    color: var(--accent-pink);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: var(--transition-fast);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

/* Mobile Menu */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--accent-pink);
    margin: 3px 0;
    transition: var(--transition-fast);
}

/* ==========================================================================
   HERO SECTION
   ========================================================================== */

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.hero-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--container-padding);
    text-align: center;
    z-index: 2;
    position: relative;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    animation: fadeInUp 1s ease 0.2s both;
}

.hero-subtitle {
    font-size: 1.3rem;
    color: var(--text-secondary);
    margin-bottom: 30px;
    animation: fadeInUp 1s ease 0.4s both;
}

.typing-container {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    animation: fadeInUp 1s ease 0.6s both;
}

.typing-text {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--accent-pink);
    min-width: 200px;
    text-align: left;
}

.cursor {
    font-size: 1.5rem;
    color: var(--accent-pink);
    animation: blink 1s infinite;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeInUp 1s ease 0.8s both;
}

/* Particles Background */
.particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.particle {
    position: absolute;
    background: var(--accent-pink);
    border-radius: 50%;
    opacity: 0.6;
    animation: float 6s ease-in-out infinite;
}

/* ==========================================================================
   ABOUT SECTION
   ========================================================================== */

.about {
    padding: var(--section-padding);
    background: var(--bg-secondary);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
    align-items: center;
}

.about-image {
    text-align: center;
}

.image-placeholder {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: var(--gradient-secondary);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-glow);
    position: relative;
    overflow: hidden;
}

.image-placeholder::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(transparent, var(--accent-pink), transparent 30%);
    animation: rotate 4s linear infinite;
}

.image-placeholder::after {
    content: '';
    position: absolute;
    inset: 5px;
    background: var(--bg-secondary);
    border-radius: 50%;
}

.image-text {
    position: relative;
    z-index: 2;
    color: var(--text-secondary);
    font-weight: 500;
}

.about-text {
    animation: fadeInRight 1s ease;
}

.about-text h2 {
    text-align: left;
    margin-bottom: 30px;
}

.about-text p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 20px;
    line-height: 1.8;
}

/* ==========================================================================
   PROJECTS SECTION
   ========================================================================== */

.projects {
    padding: var(--section-padding);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background: var(--bg-card);
    border-radius: 15px;
    padding: 30px;
    border: 1px solid rgba(255, 107, 157, 0.1);
    transition: var(--transition-slow);
    position: relative;
    overflow: hidden;
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    opacity: 0;
    transition: var(--transition-slow);
    z-index: -1;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-card);
    border-color: var(--accent-pink);
}

.project-card:hover::before {
    opacity: 0.05;
}

.project-card.featured {
    border-color: var(--accent-pink);
    box-shadow: 0 0 30px rgba(255, 107, 157, 0.2);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
}

.project-header h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-primary);
}

.project-type {
    background: var(--gradient-primary);
    color: var(--text-primary);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
}

.project-description {
    color: var(--text-secondary);
    margin-bottom: 20px;
    line-height: 1.6;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.tech-tag {
    background: rgba(255, 107, 157, 0.1);
    color: var(--accent-pink);
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 0.85rem;
    border: 1px solid rgba(255, 107, 157, 0.2);
}

.project-links {
    display: flex;
    gap: 15px;
}

.project-link {
    color: var(--accent-pink);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition-fast);
    position: relative;
}

.project-link:hover {
    color: var(--accent-purple);
    text-shadow: 0 0 5px var(--accent-purple);
}

/* ==========================================================================
   SKILLS SECTION
   ========================================================================== */

.skills {
    padding: var(--section-padding);
    background: var(--bg-secondary);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.skill-category {
    background: var(--bg-card);
    padding: 30px;
    border-radius: 15px;
    border: 1px solid rgba(255, 107, 157, 0.1);
    transition: var(--transition-fast);
}

.skill-category:hover {
    border-color: var(--accent-pink);
    box-shadow: 0 5px 20px rgba(255, 107, 157, 0.1);
}

.skill-category h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 25px;
    color: var(--accent-pink);
}

.skill-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.skill-item {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInLeft 0.6s ease forwards;
}

.skill-item:nth-child(2) { animation-delay: 0.1s; }
.skill-item:nth-child(3) { animation-delay: 0.2s; }
.skill-item:nth-child(4) { animation-delay: 0.3s; }

.skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-weight: 500;
}

.skill-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.skill-progress {
    height: 100%;
    background: var(--gradient-primary);
    border-radius: 4px;
    transition: width 1.5s ease;
    position: relative;
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    animation: shimmer 2s ease-in-out infinite;
}

/* ==========================================================================
   CONTACT SECTION
   ========================================================================== */

.contact {
    padding: var(--section-padding);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.contact-info p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 30px;
    line-height: 1.8;
}

.social-links {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.social-link {
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    background: var(--bg-card);
    color: var(--text-primary);
    text-decoration: none;
    border-radius: 25px;
    border: 1px solid rgba(255, 107, 157, 0.2);
    transition: var(--transition-fast);
    font-weight: 500;
}

.social-link.github:hover {
    background: var(--gradient-secondary);
    border-color: var(--accent-blue);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}

.social-link.linkedin:hover {
    background: var(--gradient-primary);
    border-color: var(--accent-pink);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 157, 0.3);
}

/* Contact Form */
.contact-form {
    background: var(--bg-card);
    padding: 40px;
    border-radius: 15px;
    border: 1px solid rgba(255, 107, 157, 0.1);
}

.form-group {
    margin-bottom: 25px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px;
    background: var(--bg-secondary);
    border: 1px solid rgba(255, 107, 157, 0.2);
    border-radius: 10px;
    color: var(--text-primary);
    font-family: var(--font-primary);
    font-size: 1rem;
    transition: var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-pink);
    box-shadow: 0 0 10px rgba(255, 107, 157, 0.2);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--text-muted);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

/* ==========================================================================
   FOOTER
   ========================================================================== */

.footer {
    background: var(--bg-secondary);
    padding: 30px 0;
    text-align: center;
    border-top: 1px solid rgba(255, 107, 157, 0.1);
}

.footer p {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* ==========================================================================
   ANIMATIONS
   ========================================================================== */

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(120deg); }
    66% { transform: translateY(5px) rotate(240deg); }
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

/* ==========================================================================
   RESPONSIVE DESIGN
   ========================================================================== */

/* Tablet Styles (768px - 1024px) */
@media (max-width: 1024px) {
    .hero-title {
        font-size: 3rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

/* Mobile Styles (768px and below) */
@media (max-width: 768px) {
    :root {
        --section-padding: 60px 0;
        --container-padding: 0 15px;
    }
    
    /* Navigation */
    .nav-menu {
        position: fixed;
        top: 70px;
        right: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: rgba(10, 10, 10, 0.98);
        backdrop-filter: blur(10px);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 50px;
        transition: var(--transition-fast);
    }
    
    .nav-menu.active {
        right: 0;
    }
    
    .nav-menu a {
        font-size: 1.2rem;
        margin: 15px 0;
    }
    
    .hamburger {
        display: flex;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    /* Hero Section */
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .typing-text {
        font-size: 1.2rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    /* About Section */
    .image-placeholder {
        width: 250px;
        height: 250px;
    }
    
    /* Projects */
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .project-card {
        padding: 25px;
    }
    
    .project-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    /* Skills */
    .skills-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }
    
    .skill-category {
        padding: 25px;
    }
    
    /* Contact */
    .contact-form {
        padding: 30px 20px;
    }
    
    .social-links {
        justify-content: center;
    }
    
    /* Typography */
    .section-title {
        font-size: 2rem;
        margin-bottom: 40px;
    }
}

/* Small Mobile Styles (480px and below) */
@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .typing-text {
        font-size: 1rem;
        min-width: 150px;
    }
    
    .image-placeholder {
        width: 200px;
        height: 200px;
    }
    
    .project-card,
    .skill-category,
    .contact-form {
        padding: 20px;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    .btn-primary,
    .btn-secondary {
        padding: 10px 25px;
        font-size: 0.9rem;
    }
}

/* High-resolution displays */
@media (min-width: 1400px) {
    .container {
        max-width: 1400px;
    }
    
    .hero-title {
        font-size: 4rem;
    }
    
    .section-title {
        font-size: 3rem;
    }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    
    .cursor {
        animation: none;
    }
    
    .particle {
        animation: none;
    }
}

/* High contrast mode */
@media (prefers-contrast: high) {
    :root {
        --bg-primary: #000000;
        --bg-secondary: #111111;
        --text-primary: #ffffff;
        --accent-pink: #ff69b4;
    }
}

/* Print styles */
@media print {
    .navbar,
    .particles,
    .contact-form {
        display: none;
    }
    
    body {
        background: white;
        color: black;
    }
    
    .hero,
    .about,
    .projects,
    .skills {
        break-inside: avoid;
        padding: 20px 0;
    }
}
```

## JavaScript - js/app.js

```javascript
/**
 * Personal Portfolio Website
 * Interactive functionality and animations
 */

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Animate element when it comes into view
 */
function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}

// ==========================================================================
// TYPING ANIMATION CLASS
// ==========================================================================

class TypingAnimation {
    constructor(element, phrases, options = {}) {
        this.element = element;
        this.phrases = phrases;
        this.typeSpeed = options.typeSpeed || 100;
        this.deleteSpeed = options.deleteSpeed || 50;
        this.pauseTime = options.pauseTime || 2000;
        this.currentPhrase = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        
        // Start the animation
        this.start();
    }
    
    start() {
        this.type();
    }
    
    type() {
        const current = this.phrases[this.currentPhrase];
        
        if (this.isDeleting) {
            // Remove character
            this.element.textContent = current.substring(0, this.currentChar - 1);
            this.currentChar--;
        } else {
            // Add character
            this.element.textContent = current.substring(0, this.currentChar + 1);
            this.currentChar++;
        }
        
        // Determine typing speed
        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        
        // Check if word is complete
        if (!this.isDeleting && this.currentChar === current.length) {
            // Pause at end of word
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentChar === 0) {
            // Move to next phrase
            this.isDeleting = false;
            this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
        }
        
        // Continue typing
        setTimeout(() => this.type(), typeSpeed);
    }
}

// ==========================================================================
// PARTICLES ANIMATION CLASS
// ==========================================================================

class ParticlesAnimation {
    constructor(container, options = {}) {
        this.container = container;
        this.particleCount = options.count || 50;
        this.particles = [];
        this.colors = options.colors || ['#ff6b9d', '#9b59b6', '#00d4ff', '#ffb6c1'];
        
        this.init();
        this.animate();
        this.handleResize();
    }
    
    init() {
        // Clear existing particles
        this.container.innerHTML = '';
        this.particles = [];
        
        // Create particles
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 2;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const opacity = Math.random() * 0.6 + 0.2;
        const speed = Math.random() * 2 + 1;
        
        // Set styles
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = color;
        particle.style.opacity = opacity;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (3 + Math.random() * 3) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        // Add to container
        this.container.appendChild(particle);
        
        // Store particle data
        this.particles.push({
            element: particle,
            x: parseFloat(particle.style.left),
            y: parseFloat(particle.style.top),
            speedX: (Math.random() - 0.5) * speed,
            speedY: (Math.random() - 0.5) * speed,
            size: size
        });
    }
    
    animate() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off edges
            if (particle.x <= 0 || particle.x >= 100) {
                particle.speedX *= -1;
            }
            if (particle.y <= 0 || particle.y >= 100) {
                particle.speedY *= -1;
            }
            
            // Keep in bounds
            particle.x = Math.max(0, Math.min(100, particle.x));
            particle.y = Math.max(0, Math.min(100, particle.y));
            
            // Apply position
            particle.element.style.left = particle.x + '%';
            particle.element.style.top = particle.y + '%';
        });
        
        // Continue animation
        requestAnimationFrame(() => this.animate());
    }
    
    handleResize() {
        window.addEventListener('resize', debounce(() => {
            this.init();
        }, 250));
    }
}

// ==========================================================================
// NAVIGATION FUNCTIONALITY
// ==========================================================================

class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('nav-menu');
        this.hamburger = document.getElementById('hamburger');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        // Handle scroll effects
        this.handleScroll();
        
        // Handle mobile menu
        this.handleMobileMenu();
        
        // Handle smooth scrolling
        this.handleSmoothScroll();
        
        // Handle active link highlighting
        this.handleActiveLinks();
    }
    
    handleScroll() {
        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }, 10));
    }
    
    handleMobileMenu() {
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
            document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target)) {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    handleSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    handleActiveLinks() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', debounce(() => {
            let current = '';
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        }, 50));
    }
}

// ==========================================================================
// SKILLS ANIMATION
// ==========================================================================

class SkillsAnimation {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.skillSection = document.getElementById('skills');
        this.animated = false;
        
        this.init();
    }
    
    init() {
        // Animate skills when section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animateSkills();
                    this.animated = true;
                }
            });
        }, { threshold: 0.5 });
        
        if (this.skillSection) {
            observer.observe(this.skillSection);
        }
    }
    
    animateSkills() {
        this.skillBars.forEach((bar, index) => {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, index * 200);
        });
    }
}

// ==========================================================================
// CONTACT FORM HANDLING
// ==========================================================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            this.showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        this.showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.form.reset();
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        // Style the message
        messageElement.style.padding = '10px 15px';
        messageElement.style.marginTop = '15px';
        messageElement.style.borderRadius = '5px';
        messageElement.style.textAlign = 'center';
        messageElement.style.fontWeight = '500';
        
        if (type === 'success') {
            messageElement.style.background = 'rgba(34, 197, 94, 0.1)';
            messageElement.style.color = '#22c55e';
            messageElement.style.border = '1px solid rgba(34, 197, 94, 0.3)';
        } else {
            messageElement.style.background = 'rgba(239, 68, 68, 0.1)';
            messageElement.style.color = '#ef4444';
            messageElement.style.border = '1px solid rgba(239, 68, 68, 0.3)';
        }
        
        // Add to form
        this.form.appendChild(messageElement);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// ==========================================================================
// SCROLL ANIMATIONS
// ==========================================================================

class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll('.project-card, .skill-category, .about-text');
        this.init();
    }
    
    init() {
        // Create intersection observer
        const observer = new IntersectionObserver(animateOnScroll, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements
        this.animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// ==========================================================================
// THEME SWITCHING (Optional Enhancement)
// ==========================================================================

class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }
    
    init() {
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        // Create theme toggle button (optional)
        this.createThemeToggle();
    }
    
    createThemeToggle() {
        const toggle = document.createElement('button');
        toggle.className = 'theme-toggle';
        toggle.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
        toggle.setAttribute('aria-label', 'Toggle theme');
        
        // Style the toggle
        toggle.style.position = 'fixed';
        toggle.style.bottom = '20px';
        toggle.style.right = '20px';
        toggle.style.width = '50px';
        toggle.style.height = '50px';
        toggle.style.borderRadius = '50%';
        toggle.style.border = '1px solid rgba(255, 107, 157, 0.3)';
        toggle.style.background = 'var(--bg-card)';
        toggle.style.color = 'var(--text-primary)';
        toggle.style.fontSize = '20px';
        toggle.style.cursor = 'pointer';
        toggle.style.transition = 'all 0.3s ease';
        toggle.style.zIndex = '1000';
        toggle.style.display = 'flex';
        toggle.style.alignItems = 'center';
        toggle.style.justifyContent = 'center';
        
        // Add hover effect
        toggle.addEventListener('mouseenter', () => {
            toggle.style.transform = 'scale(1.1)';
            toggle.style.boxShadow = '0 5px 15px rgba(255, 107, 157, 0.3)';
        });
        
        toggle.addEventListener('mouseleave', () => {
            toggle.style.transform = 'scale(1)';
            toggle.style.boxShadow = 'none';
        });
        
        // Handle theme switching
        toggle.addEventListener('click', () => {
            this.toggleTheme();
            toggle.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
        });
        
        document.body.appendChild(toggle);
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }
}

// ==========================================================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================================================

class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Lazy load images
        this.lazyLoadImages();
        
        // Preload critical resources
        this.preloadResources();
        
        // Handle visibility change
        this.handleVisibilityChange();
    }
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    preloadResources() {
        // Preload critical fonts
        const fontLinks = [
            'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700',
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600',
            'https://fonts.googleapis.com/css2?family=Pacifico'
        ];
        
        fontLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = href;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
    
    handleVisibilityChange() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Pause animations when tab is not visible
                document.body.classList.add('paused');
            } else {
                // Resume animations when tab becomes visible
                document.body.classList.remove('paused');
            }
        });
    }
}

// ==========================================================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================================================

class AccessibilityManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Skip link for keyboard navigation
        this.addSkipLink();
        
        // Focus management
        this.handleFocusManagement();
        
        // Keyboard navigation
        this.handleKeyboardNavigation();
        
        // Reduced motion preferences
        this.handleReducedMotion();
    }
    
    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        
        // Style skip link
        skipLink.style.position = 'absolute';
        skipLink.style.top = '-40px';
        skipLink.style.left = '6px';
        skipLink.style.background = 'var(--accent-pink)';
        skipLink.style.color = 'white';
        skipLink.style.padding = '8px';
        skipLink.style.textDecoration = 'none';
        skipLink.style.borderRadius = '4px';
        skipLink.style.zIndex = '10000';
        skipLink.style.transition = 'top 0.3s';
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    handleFocusManagement() {
        // Ensure focus is visible
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('using-keyboard');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('using-keyboard');
        });
    }
    
    handleKeyboardNavigation() {
        // Handle escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const hamburger = document.getElementById('hamburger');
                const navMenu = document.getElementById('nav-menu');
                
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    hamburger.focus();
                }
            }
        });
    }
    
    handleReducedMotion() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // Disable animations for users who prefer reduced motion
            document.documentElement.style.setProperty('--transition-fast', '0s');
            document.documentElement.style.setProperty('--transition-slow', '0s');
            
            // Disable typing animation
            const typingElement = document.getElementById('typing-text');
            if (typingElement) {
                typingElement.textContent = 'Aspiring ML Engineer';
            }
        }
    }
}

// ==========================================================================
// MAIN INITIALIZATION
// ==========================================================================

class PortfolioApp {
    constructor() {
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }
    
    start() {
        try {
            // Initialize core functionality
            this.navigation = new Navigation();
            this.scrollAnimations = new ScrollAnimations();
            this.skillsAnimation = new SkillsAnimation();
            this.contactForm = new ContactForm();
            this.accessibilityManager = new AccessibilityManager();
            this.performanceOptimizer = new PerformanceOptimizer();
            
            // Initialize typing animation
            const typingElement = document.getElementById('typing-text');
            if (typingElement) {
                this.typingAnimation = new TypingAnimation(typingElement, [
                    'Aspiring ML Engineer',
                    'Data Enthusiast',
                    'Passionate Coder'
                ]);
            }
            
            // Initialize particles animation
            const particlesContainer = document.getElementById('particles');
            if (particlesContainer) {
                this.particlesAnimation = new ParticlesAnimation(particlesContainer);
            }
            
            // Initialize theme manager (optional)
            // this.themeManager = new ThemeManager();
            
            console.log('Portfolio website initialized successfully! 🚀');
            
        } catch (error) {
            console.error('Error initializing portfolio:', error);
        }
    }
}

// Initialize the application
const app = new PortfolioApp();

// ==========================================================================
// SERVICE WORKER REGISTRATION (Optional for PWA)
// ==========================================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ==========================================================================
// ANALYTICS AND TRACKING (Optional)
// ==========================================================================

class Analytics {
    constructor() {
        this.trackPageViews();
        this.trackUserInteractions();
    }
    
    trackPageViews() {
        // Track section views
        const sections = document.querySelectorAll('section[id]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    console.log(`Section viewed: ${sectionId}`);
                    // Replace with actual analytics tracking
                    // gtag('event', 'section_view', { section_name: sectionId });
                }
            });
        }, { threshold: 0.5 });
        
        sections.forEach(section => sectionObserver.observe(section));
    }
    
    trackUserInteractions() {
        // Track button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn-primary, .btn-secondary, .project-link, .social-link')) {
                const elementType = e.target.className;
                const elementText = e.target.textContent.trim();
                console.log(`Button clicked: ${elementType} - ${elementText}`);
                // Replace with actual analytics tracking
                // gtag('event', 'button_click', { button_type: elementType, button_text: elementText });
            }
        });
        
        // Track form submissions
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'contact-form') {
                console.log('Contact form submitted');
                // Replace with actual analytics tracking
                // gtag('event', 'form_submit', { form_name: 'contact' });
            }
        });
    }
}

// Initialize analytics (uncomment to enable)
// const analytics = new Analytics();
```

## README.md

```markdown
# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a dark theme with glowing accents, smooth animations, and interactive elements.

## Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Modern Dark Theme**: Black/charcoal background with neon accent colors
- **Interactive Animations**: Typing animation, floating particles, hover effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with lazy loading and efficient animations
- **Accessible**: Keyboard navigation, screen reader friendly, reduced motion support

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins, Inter, Pacifico)

## Color Palette

- **Background**: `#0a0a0a` (Deep black)
- **Secondary Background**: `#1a1a1a` (Charcoal)
- **Accent Colors**:
  - Neon Pink: `#ff6b9d`
  - Soft Purple: `#9b59b6`
  - Electric Blue: `#00d4ff`
  - Baby Pink: `#ffb6c1`

## Setup Instructions

1. **Clone or Download** the project files
2. **Extract** to your desired directory
3. **Open** `index.html` in a web browser
4. **Customize** the content with your information

## Customization

### Personal Information
Edit the following in `index.html`:
- Name and titles
- About section content
- Project descriptions
- Skills and percentages
- Social media links

### Colors and Styling
Modify CSS variables in `css/style.css`:
```css
:root {
    --bg-primary: #0a0a0a;
    --accent-pink: #ff6b9d;
    /* ... other variables */
}
```

### Content Sections
- **Hero Section**: Update name, subtitle, and animated phrases
- **About Section**: Add your bio and replace image placeholder
- **Projects Section**: Add your projects with descriptions and links
- **Skills Section**: Update skill categories and proficiency levels
- **Contact Section**: Update social links and contact information

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Features

- CSS and JavaScript minification ready
- Lazy loading for images
- Optimized animations
- Efficient DOM manipulation
- Reduced motion support for accessibility

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet with all styling
├── js/
│   └── app.js         # JavaScript functionality
└── README.md          # Documentation
```

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be live instantly with a custom URL

### Vercel
1. Import your GitHub repository
2. Deploy with zero configuration

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please create an issue in the repository or contact me through the website.

---

**Built with ❤️ and lots of ☕**
```

## Additional Notes

- **Image Placeholder**: Replace the profile image placeholder with your actual photo
- **Project Links**: Update project URLs with your actual repositories
- **Contact Form**: The contact form currently shows success/error messages but doesn't actually send emails. You'll need to integrate with a backend service like Formspree, Netlify Forms, or EmailJS
- **Analytics**: Uncomment the analytics code if you want to track user interactions
- **PWA Features**: The service worker registration is included but you'll need to create a `sw.js` file for full PWA functionality

This portfolio website is fully responsive, accessible, and optimized for performance. The code is well-commented and organized for easy customization and maintenance.