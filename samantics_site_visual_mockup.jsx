export default function SamanticsMockup() {
  const images = {
    hero: "/mnt/data/1690894270505.jpg",
    collage: "/mnt/data/family_moments_and_farm_adventures.png",
    portrait: "/mnt/data/warm_family_farm_portrait_at_sunset.png",
    showHorse: "/mnt/data/1690894270505.jpg",
    chronicle: "/mnt/data/PossumintheChronicle.jpg",
    workspace: "/mnt/data/messages.jpg",
    horsePortrait: "/mnt/data/tiffany.png",
    garden: "/mnt/data/05770f63-80fd-4884-ba92-6da6f9a04869-1_all_12427.jpg",
    bebe: "/mnt/data/05770f63-80fd-4884-ba92-6da6f9a04869-1_all_3193.jpg"
  };

  return (
    <main style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.brandMark}>
          <img src="/mnt/data/samantics-logo.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div>
          <div style={styles.brand}>Samantics LLC</div>
          <div style={styles.micro}>systems, stories, and useful little miracles</div>
        </div>
        <div style={styles.navLinks}>
          <a style={styles.link}>Services</a>
          <a style={styles.link}>Projects</a>
          <a style={styles.link}>About</a>
          <a style={styles.button}>Work with Samantics</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <div style={styles.pill}>Real systems for real life businesses</div>
          <h1 style={styles.h1}>Strategic systems for businesses with real moving parts.</h1>
          <p style={styles.lead}>
            Samantics LLC helps small businesses, creative projects, and community centered work turn scattered ideas into websites, workflows, content, and systems that people can actually use.
          </p>
          <div style={styles.heroButtons}>
            <a style={styles.buttonLarge}>Start with the pile</a>
            <a style={styles.secondaryButton}>See the projects</a>
          </div>
          <div style={styles.metricsRow}>
            <div style={styles.metric}><strong>3</strong><span>service lanes</span></div>
            <div style={styles.metric}><strong>20 plus</strong><span>years horse world grit</span></div>
            <div style={styles.metric}><strong>1</strong><span>umbrella for the chaos</span></div>
          </div>
        </div>
        <div style={styles.heroImageWrap}>
          <img src={images.hero} style={styles.heroImage} />
          <div style={styles.imageBadge}>operations • strategy • creative systems</div>
        </div>
      </section>

      <section style={styles.splitIntro}>
        <div>
          <h2 style={styles.h2}>Not an agency costume. Actual working hands.</h2>
          <p style={styles.body}>
            Samantics LLC blends operations support, websites, marketing coordination, and systems thinking into practical solutions for businesses and projects that need structure without losing personality.
          </p>
        </div>
        <img src={images.collage} style={styles.collageImage} />
      </section>

      <section style={styles.services}>
        <div style={styles.sectionHead}>
          <div style={styles.kicker}>Services</div>
          <h2 style={styles.h2}>Support for businesses that outgrew duct tape.</h2>
        </div>
        <div style={styles.cardGrid}>
          <article style={styles.card}>
            <img src={images.workspace} style={styles.cardImage} />
            <h3 style={styles.h3}>Marketing and content cleanup</h3>
            <p style={styles.cardText}>Website copy, product descriptions, SEO basics, customer messaging, and brand voice that does not sound like a toaster wrote it.</p>
          </article>
          <article style={styles.card}>
            <img src={images.garden} style={styles.cardImage} />
            <h3 style={styles.h3}>Websites and structure</h3>
            <p style={styles.cardText}>Static sites, landing pages, content organization, project mapping, and practical launch support without the tech swamp swallowing the boots.</p>
          </article>
          <article style={styles.card}>
            <img src={images.bebe} style={styles.cardImage} />
            <h3 style={styles.h3}>Operations and systems</h3>
            <p style={styles.cardText}>Workflow cleanup, inventory tracking, spreadsheet wrangling, Airtable planning, inbox organization, and documentation humans can follow.</p>
          </article>
        </div>
      </section>

      <section style={styles.caseStudy}>
        <div style={styles.caseText}>
          <div style={styles.kicker}>Realistic case study style</div>
          <h2 style={styles.h2}>From scattered tracking to a clearer operating rhythm.</h2>
          <p style={styles.body}>
            For an ecommerce client, Samantics helped organize product information, review inventory workflows, improve customer communication points, and identify better systems for fulfillment and reporting. No fake founder. No imaginary miracle metrics. Just cleaner work and fewer tiny fires.
          </p>
          <div style={styles.steps}>
            <div><strong>01</strong><span>Find the bottlenecks</span></div>
            <div><strong>02</strong><span>Clean the workflow</span></div>
            <div><strong>03</strong><span>Build repeatable systems</span></div>
          </div>
        </div>
        <div style={styles.casePanel}>
          <div style={styles.stat}><strong>Clearer</strong><span>inventory and task visibility</span></div>
          <div style={styles.stat}><strong>Faster</strong><span>customer follow up process</span></div>
          <div style={styles.stat}><strong>Better</strong><span>system decisions before scaling</span></div>
        </div>
      </section>

      <section style={styles.projects}>
        <div style={styles.sectionHead}>
          <div style={styles.kicker}>Projects under the umbrella</div>
          <h2 style={styles.h2}>Each project gets its own little weather system.</h2>
        </div>
        <div style={styles.projectGrid}>
          <article style={styles.projectCard}>
            <img src={images.showHorse} style={styles.projectImage} />
            <div style={styles.projectBody}>
              <span style={styles.projectType}>Equestrian</span>
              <h3 style={styles.h3}>At The In Gate</h3>
              <p style={styles.cardText}>A horse world platform with community, listings, show culture, shipping help, and old school barn aisle flavor.</p>
            </div>
          </article>
          <article style={styles.projectCard}>
            <img src={images.horsePortrait} style={styles.projectImage} />
            <div style={styles.projectBody}>
              <span style={styles.projectType}>Creative</span>
              <h3 style={styles.h3}>You In Music</h3>
              <p style={styles.cardText}>Custom songs for people, memories, milestones, and the kind of feelings that refuse to fit in a greeting card.</p>
            </div>
          </article>
          <article style={styles.projectCard}>
            <img src={images.chronicle} style={styles.projectImage} />
            <div style={styles.projectBody}>
              <span style={styles.projectType}>Experience</span>
              <h3 style={styles.h3}>Horse world credibility</h3>
              <p style={styles.cardText}>Real history, actual industry knowledge, and enough lived experience to know when the spreadsheet is lying.</p>
            </div>
          </article>
        </div>
      </section>

      <section style={styles.about}>
        <img src={images.portrait} style={styles.aboutImage} />
        <div>
          <div style={styles.kicker}>About Samantha</div>
          <h2 style={styles.h2}>A calm eye for complicated piles.</h2>
          <p style={styles.body}>
            Samantics is built by Samantha Lawton Duthie, an operations minded, marketing capable, horse world fluent human services student who can move between websites, workflows, customer communication, and real life people without losing the thread.
          </p>
          <p style={styles.body}>
            The vibe is practical, warm, direct, and alive. The work is about making the next step clearer, then making that step easier to repeat.
          </p>
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.h2}>Need a clearer system?</h2>
        <p style={styles.body}>Bring the pile. Samantics will bring the umbrella, the labels, and the suspiciously specific questions.</p>
        <a style={styles.buttonLarge}>Email Samantics LLC</a>
      </section>
    </main>
  );
}

const styles = {
  page: {
    margin: 0,
    background: "#F4F6F8",
    color: "#241a16",
    fontFamily: "Inter, ui sans serif, system-ui, Arial",
    minHeight: "100vh"
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "20px 6vw",
    position: "sticky",
    top: 0,
    background: "rgba(255,255,255,.88)",
    backdropFilter: "blur(16px)",
    zIndex: 5,
    borderBottom: "1px solid rgba(36, 26, 22, .08)"
  },
  brandMark: {
    height: 64,
    width: 64,
    borderRadius: 999,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent"
  },
  brand: { fontWeight: 700, fontSize: 24, letterSpacing: ".01em", fontFamily: "Libre Baskerville, Playfair Display, Georgia, serif", color: "#10233F" },
  micro: { fontSize: 11, color: "#6B7280", letterSpacing: ".18em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" },
  navLinks: { marginLeft: "auto", display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" },
  link: { fontSize: 14, color: "#4d4039", textDecoration: "none" },
  button: { background: "#5FAFB0", color: "white", padding: "10px 15px", borderRadius: 999, fontSize: 14, textDecoration: "none", fontWeight: 700 },
  hero: { display: "grid", gridTemplateColumns: "1.02fr .98fr", gap: 36, padding: "70px 6vw 44px", alignItems: "center" },
  heroText: { maxWidth: 690 },
  pill: { display: "inline-block", padding: "8px 13px", borderRadius: 999, background: "rgba\(163, 54, 107, 0.12\)", color: "#10233F", fontWeight: 800, fontSize: 13, marginBottom: 20 },
  h1: { fontFamily: "Libre Baskerville, Playfair Display, Georgia, serif", fontSize: "clamp(52px, 8vw, 96px)", lineHeight: .88, margin: "0 0 24px", letterSpacing: "-.06em" },
  h2: { fontFamily: "Libre Baskerville, Playfair Display, Georgia, serif", fontSize: "clamp(34px, 4vw, 58px)", lineHeight: .95, margin: "0 0 18px", letterSpacing: "-.04em" },
  h3: { fontFamily: "Libre Baskerville, Playfair Display, Georgia, serif", fontSize: 26, lineHeight: 1.05, margin: "14px 0 10px" },
  lead: { fontSize: 20, lineHeight: 1.55, color: "#425466", margin: "0 0 28px" },
  body: { fontSize: 18, lineHeight: 1.7, color: "#425466" },
  heroButtons: { display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 30 },
  buttonLarge: { display: "inline-block", background: "#10233F", color: "white", padding: "15px 22px", borderRadius: 999, fontWeight: 900, textDecoration: "none" },
  secondaryButton: { display: "inline-block", background: "#fff", color: "#241a16", padding: "15px 22px", borderRadius: 999, fontWeight: 900, textDecoration: "none", boxShadow: "0 10px 24px rgba(40, 28, 20, .08)" },
  metricsRow: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 },
  metric: { background: "#fff", borderRadius: 22, padding: 16, boxShadow: "0 12px 30px rgba(40, 28, 20, .08)" },
  heroImageWrap: { position: "relative" },
  heroImage: { width: "100%", height: 620, objectFit: "cover", borderRadius: 36, boxShadow: "0 30px 70px rgba(40, 28, 20, .2)" },
  imageBadge: { position: "absolute", left: 22, bottom: 22, background: "rgba(255,255,255,.88)", padding: "12px 16px", borderRadius: 999, fontWeight: 900, color: "#10233F" },
  splitIntro: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 34, alignItems: "center", padding: "60px 6vw" },
  collageImage: { width: "100%", borderRadius: 32, boxShadow: "0 25px 55px rgba(40, 28, 20, .15)" },
  services: { padding: "60px 6vw" },
  sectionHead: { maxWidth: 780, marginBottom: 28 },
  kicker: { color: "#A3366B", textTransform: "uppercase", fontWeight: 950, fontSize: 13, letterSpacing: ".12em", marginBottom: 10 },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 22 },
  card: { background: "#fffaf4", borderRadius: 28, padding: 16, boxShadow: "0 14px 40px rgba(40, 28, 20, .09)" },
  cardImage: { width: "100%", height: 210, objectFit: "cover", borderRadius: 20 },
  cardText: { color: "#425466", lineHeight: 1.6, fontSize: 16 },
  caseStudy: { display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 24, margin: "60px 6vw", padding: 36, borderRadius: 28, background: "#10233F", color: "white", boxShadow: "0 25px 60px rgba(40, 28, 20, .18)" },
  caseText: {},
  steps: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12, marginTop: 26 },
  casePanel: { display: "grid", gap: 14 },
  stat: { background: "rgba(255,255,255,.12)", borderRadius: 24, padding: 20, border: "1px solid rgba(255,255,255,.16)" },
  projects: { padding: "60px 6vw" },
  projectGrid: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 22 },
  projectCard: { overflow: "hidden", borderRadius: 30, background: "#fffaf4", boxShadow: "0 18px 45px rgba(40, 28, 20, .1)" },
  projectImage: { width: "100%", height: 260, objectFit: "cover" },
  projectBody: { padding: 20 },
  projectType: { display: "inline-block", background: "rgba\(163, 54, 107, 0.12\)", color: "#10233F", padding: "6px 10px", borderRadius: 999, fontSize: 12, fontWeight: 900 },
  about: { display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 34, alignItems: "center", padding: "70px 6vw" },
  aboutImage: { width: "100%", borderRadius: 34, boxShadow: "0 20px 55px rgba(40, 28, 20, .15)" },
  cta: { margin: "40px 6vw 80px", padding: 42, borderRadius: 34, background: "#fffaf4", textAlign: "center", boxShadow: "0 18px 45px rgba(40, 28, 20, .1)" },
  '@media (maxWidth: 900px)': {}
};
