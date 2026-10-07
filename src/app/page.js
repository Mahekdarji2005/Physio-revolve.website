import { Calendar, MapPin, ArrowRight, Activity, Users, FileText, Bookmark, Layout, Settings } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/pulogo.jpg" alt="Parul University Logo" style={{ height: '55px', objectFit: 'contain' }} />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#" style={{ color: 'var(--primary-teal)', fontWeight: '700' }}>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Conference</a></li>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">SDGs</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <a href="#" className="btn-primary">Register Now <ArrowRight size={16} /></a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle-text">National Conference</div>
          <h1 className="hero-title-creative">Physio Revolve <span>2026</span></h1>
          <h2 className="hero-description-creative">Rehabilitation Physiotherapy</h2>
          <div className="hero-details-creative">
            <div className="hero-detail-item-creative">
              <Calendar size={22} color="var(--primary-teal)" />
              12 December 2026
            </div>
            <div className="hero-detail-item-creative">
              <MapPin size={22} color="var(--primary-teal)" />
              National Conference
            </div>
          </div>
          <br />
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#" className="btn-primary-creative">Register Now <ArrowRight size={20} /></a>
            <a href="#" className="btn-primary-creative">Call for Papers <FileText size={20} /></a>
          </div>
          <div className="sdg-container" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <img src="/sdg3.jpg" alt="SDG 3 - Good Health & Well Being" style={{ width: '150px', height: '150px', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }} />
              <img src="/sdg4.jpg" alt="SDG 4 - Quality Education" style={{ width: '150px', height: '150px', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }} />
              <img src="/sdg9.jpg" alt="SDG 9 - Industry, Innovation, Infrastructure" style={{ width: '150px', height: '150px', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }} />
            </div>
          </div>
        </div>
        <div className="hero-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <img
            src="/physiotherapy.webp"
            alt="Physiotherapy session"
            style={{ width: '100%', maxWidth: '400px', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <img
          src="/DSC00960-e1787737333417.webp"
          alt="Person in wheelchair looking forward"
          className="about-image"
        />
        <div className="about-content">
          <p className="hero-subtitle" style={{ color: 'var(--primary-teal)' }}>About the Program</p>
          <h2 className="section-title">Rehabilitation Today, <br />A Healthier Tomorrow</h2>
          <p className="about-text">
            Physio Revolve 2026 is a National Conference on Rehabilitation Physiotherapy aimed at promoting excellence in physiotherapy education, clinical practice, research and innovation. The conference will serve as a platform for academicians, clinicians, researchers, postgraduate and undergraduate students, rehabilitation professionals and healthcare practitioners from across the state to share knowledge, discuss recent advances and foster professional collaboration.
          </p>
          <a href="#" className="btn-primary" style={{ marginBottom: '2rem' }}>Learn More <ArrowRight size={16} /></a>

          <div className="key-details">
            <h3>Key Details</h3>
            <div className="detail-list">
              <div className="detail-item">
                <Users className="detail-icon" />
                <span className="detail-label">Type</span>
                <span className="detail-value">National</span>
              </div>
              <div className="detail-item">
                <FileText className="detail-icon" />
                <span className="detail-label">Title</span>
                <span className="detail-value">Physio Revolve</span>
              </div>
              <div className="detail-item">
                <Activity className="detail-icon" />
                <span className="detail-label">Thrust Area</span>
                <span className="detail-value">Rehabilitation</span>
              </div>
              <div className="detail-item">
                <Calendar className="detail-icon" />
                <span className="detail-label">Proposed Date</span>
                <span className="detail-value">12-12-2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section highlights-section">
        <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Conference Highlights</p>
        <h2 className="section-title">What to Expect?</h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
          An engaging mix of knowledge, interaction and innovation.
        </p>

        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon"><Users /></div>
            <h3 className="highlight-title">Keynote Addresses</h3>
            <p className="highlight-desc">Insights from national & state experts</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon"><Users /></div>
            <h3 className="highlight-title">Panel Discussions</h3>
            <p className="highlight-desc">Real-world experiences & solutions</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon"><FileText /></div>
            <h3 className="highlight-title">Oral & Poster Presentations</h3>
            <p className="highlight-desc">Showcase your research & work</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon"><Bookmark /></div>
            <h3 className="highlight-title">Case Study Presentations</h3>
            <p className="highlight-desc">Learn from clinical cases</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon"><Layout /></div>
            <h3 className="highlight-title">Interactive Sessions</h3>
            <p className="highlight-desc">Hands-on learning</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="logo-container">
          <Activity size={24} color="white" />
          <span className="logo-text" style={{ color: 'white' }}>Physio Revolve</span>
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Conference</a>
          <a href="#">Contact</a>
        </div>
        <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>© 2026 Physio Revolve. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
