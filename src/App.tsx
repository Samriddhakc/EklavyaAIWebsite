import React, { useState } from 'react';
import './App.css';
 import ConsultationForm from "./ConsultationForm";

  /**
   * App component that renders the main layout of the website.
   * It renders the top navigation bar, hero section, offerings section, about section, and footer.
   * @returns {React.ReactElement} The App component.
   */
function App() {
  const [showForm, setShowForm] = useState(false);
  console.log('showForm:', showForm);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="/EklavyaAIWebsite/EklavyaAILogo.png" alt="EklavyaAI" className="logo-image" />
          <div className="company-name">
            <h1>EKLAVYA AI</h1>
            <p>YOUR PERSONALIZED AI CONSULTANT</p>
          </div>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#offerings">Offerings</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="get-started-btn" onClick={() => setShowForm(true)}>Get Started</button>
        </div>
      </nav>

      <section id="home" className="hero">
      <div className="hero-content">
  <img src="EklavyaAIWebsite/eklavyaa_hero_pic.png" alt="Hero" className="hero-photo" />
  <div className="hero-text">
    <h1>Transform Your Business with AI</h1>
    <p>Intelligent Solutions for Modern Enterprises</p>
  </div>
</div>
      </section>

      <section id="offerings" className="offerings">
        <h2>Our Offerings</h2>
        <div className="offerings-grid">
          <div className="offering-card">
            <h3>Automated Online Platform</h3>
            <p>AI-powered full-stack platform supporting dynamic data and online transactions in industries like hotels, hospitals, and retail stores - No need for in-house engineers, focus on growing your business</p>
          </div>
          <div className="offering-card">
            <h3>Business Operations Optimization</h3>
            <p>Agent-driven business operations optimization with automatic billing management, insights extraction, and chatbot integration for automating helpdesk</p>
          </div>
          <div className="offering-card">
            <h3>Intelligent Analytics and Interoperability</h3>
            <p>Build in-house data warehouse with AI to extract key data-driven insights for business growth</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/EklavyaAIWebsite/akash_regmi_pic.png" alt="Akash Regmi" className="team-photo" />
            <h3>Akash Regmi</h3>
            <p>Chief Executive Officer ( CEO )</p>
          </div>
          <div className="team-member">
            <img src="/EklavyaAIWebsite/rabina_phuyel_pic.png" alt="Rabina Phuyel" className="team-photo" />
            <h3>Rabina Phuyel</h3>
            <p>Chief Product Officer ( CPO )</p>
            <p>Front End Engineer @ Target | UXD Masters from Rutgers</p>
          </div>
          <div className="team-member">
          <img src="/EklavyaAIWebsite/samriddhakc_pic.png" alt="Samriddha KC" className="team-photo" />
          <h3>Samriddha KC</h3>
            <p>Chief Technology Officer ( CTO )</p>
            <p>Engineer, WhatsApp Infra @ Meta | Previous @ Microsoft Azure SQL DB</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
  <h2>Contact Us</h2>
  <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
  <p>Email: <a href="mailto:contact@eklavyaai.com">contact@eklavyaai.com</a></p>
  <button className="get-started-btn" onClick={() => setShowForm(true)}>
    Get Started
  </button>
</section>

      <footer className="footer">
        <p>&copy; 2025 EklavyaAI. All rights reserved.</p>
      </footer>
      {showForm && <ConsultationForm onClose={() => setShowForm(false)} />}
    </div>
  );
 
}

export default App;
