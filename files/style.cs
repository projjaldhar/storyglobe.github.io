:root {
    --bg: #0f1113;
    --card-bg: #1a1d21;
    --text-main: #f8f9fa;
    --text-dim: #9ca3af;
    --accent: #3b82f6;
    --border: #2d3139;
    --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: var(--bg);
    color: var(--text-main);
    font-family: var(--font);
    line-height: 1.6;
    overflow-x: hidden;
}

.bg-dots {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background-image: radial-gradient(var(--border) 1px, transparent 1px);
    background-size: 30px 30px;
    z-index: -1;
    opacity: 0.4;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Nav */
nav {
    padding: 2rem 0;
}
.nav-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo { font-weight: 800; font-size: 1.5rem; letter-spacing: -1px; }
.logo span { color: var(--accent); }
.nav-links a {
    color: var(--text-dim);
    text-decoration: none;
    margin-left: 2rem;
    font-size: 0.9rem;
    transition: color 0.3s;
}
.nav-links a:hover { color: var(--accent); }

/* Hero */
.hero {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    align-items: center;
    min-height: 70vh;
    padding-top: 2rem;
}
h1 { font-size: 4.5rem; line-height: 1; margin-bottom: 1rem; letter-spacing: -2px; }
h2 { font-size: 1.5rem; color: var(--accent); font-weight: 400; margin-bottom: 1.5rem; }
.hero p { font-size: 1.2rem; color: var(--text-dim); max-width: 500px; margin-bottom: 2rem; }

.hero-summary {
    background: var(--card-bg);
    padding: 2rem;
    border: 1px solid var(--border);
    border-radius: 12px;
}
.stat-card { margin-bottom: 1.5rem; }
.stat-card:last-child { margin-bottom: 0; }
.label { display: block; font-size: 0.75rem; text-transform: uppercase; color: var(--text-dim); letter-spacing: 1px; }
.value { font-weight: 600; font-size: 1.1rem; }

/* Buttons */
.btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s;
}
.btn.primary { background: var(--accent); color: white; margin-right: 1rem; }
.btn.secondary { border: 1px solid var(--border); color: var(--text-main); }
.btn:hover { transform: translateY(-2px); }

/* Sections */
.section { padding: 6rem 0; }
.section-title { font-size: 0.8rem; text-transform: uppercase; color: var(--accent); letter-spacing: 3px; margin-bottom: 2rem; }

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
.project-card {
    background: var(--card-bg);
    padding: 2.5rem;
    border-radius: 12px;
    border: 1px solid var(--border);
    transition: transform 0.3s, border-color 0.3s;
}
.project-card:hover { transform: scale(1.03); border-color: var(--accent); }
.project-card h4 { margin-bottom: 1rem; font-size: 1.3rem; }
.project-card p { color: var(--text-dim); margin-bottom: 1.5rem; font-size: 0.95rem; }
.tag {
    font-size: 0.7rem;
    background: #25292e;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    margin-right: 0.5rem;
    color: var(--accent);
}

.skills-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}
.skill-group h5 { margin-bottom: 1rem; color: var(--text-main); border-left: 2px solid var(--accent); padding-left: 10px; }
.skill-group ul { list-style: none; color: var(--text-dim); }
.skill-group li { margin-bottom: 0.5rem; font-size: 0.9rem; }

.contact-box {
    text-align: center;
    background: linear-gradient(to right, #1a1d21, #25292e);
    padding: 4rem 2rem;
    border-radius: 20px;
}
.contact-links { margin-top: 2rem; }
.contact-links a { color: var(--text-main); margin: 0 1rem; text-decoration: none; font-weight: bold; border-bottom: 2px solid var(--accent); }

/* Animations */
.fade-in { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out forwards; }
.fade-in.visible { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.2s; }
.delay-2 { transition-delay: 0.4s; }
.delay-3 { transition-delay: 0.6s; }

/* Responsive */
@media (max-width: 768px) {
    .hero { grid-template-columns: 1fr; text-align: center; }
    h1 { font-size: 3rem; }
    .hero p { margin: 0 auto 2rem auto; }
    .nav-links { display: none; }
}