export default function NothingnessEPK() {
  const releases = [
    {
      title: "The Hollow Gaze of Death",
      label: "Independent",
      year: "2019",
      href: "https://nothingnessmn.bandcamp.com/album/the-hollow-gaze-of-death",
    },
    {
      title: "Supraliminal",
      label: "Everlasting Spew Records",
      year: "2023",
      href: "https://everlastingspew.bandcamp.com/album/supraliminal",
    },
  ];

  const lineup = [
    "Alex Walstad — Guitar",
    "John Hancock — Guitar",
    "Jon Grandel — Bass",
    "Jason Hirt — Drums",
    "Barclay Olson — Vocals",
    "Xen Hartzell — FX",
  ];

  const platforms = [
    {
      name: "Spotify",
      href: "https://open.spotify.com/artist/4cw5FUOFNMqdGehf7Os60Z",
    },
    {
      name: "Bandcamp",
      href: "https://nothingnessmn.bandcamp.com/",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCdRQ8O8kHecf29oPCVvKorA",
    },
    {
      name: "Featured Video",
      href: "https://www.youtube.com/watch?v=R0Pn0NngM3s",
    },
  ];

  const reviews = [
    {
      outlet: "BangerTV",
      blurb:
        "If you like experimentation in your Death Metal, but want the experimentation lab to be run exclusively by very intelligent cavemen, then this might be the record for you.",
      href: "https://www.youtube.com/watch?v=8hdNdvkalt0",
      attribution: "Blayne Smith",
    },
    {
      outlet: "Angry Metal Guy",
      blurb:
        "Supraliminal features riffs, riffs and then to top it all off, a few more riffs. While it’s easy to point to first track “Curse of Creation” as the prime example, quality riff-craft is on display throughout the record.",
      href: "https://www.angrymetalguy.com/nothingness-supraliminal-review/",
      attribution: "Angry Metal Guy",
    },
  ];

  const performance = [
    "Supraliminal — 440,586 Spotify streams",
    "Inviolate Viscera — 113,282 Spotify streams",
    "Curse of Creation — 70,470 Spotify streams",
    "The Hollow Gaze of Death — 64,726 Spotify streams",
    "Bandcamp — $11,238 total sales",
    "Bandcamp — 36,999 total plays",
  ];

  const albums = [
    {
      title: "The Hollow Gaze of Death",
      year: "2019",
      image: "/N1.jpeg",
      href: "https://nothingnessmn.bandcamp.com/album/the-hollow-gaze-of-death",
      featured: false,
    },
    {
      title: "Supraliminal",
      year: "2023",
      image: "/N2 Album Art Final.jpeg",
      href: "https://everlastingspew.bandcamp.com/album/supraliminal",
      featured: false,
    },
    {
      title: "Godslaughter",
      year: "Completed",
      image: "/N3 Album Art Final.jpeg",
      href: "#",
      featured: true,
    },
  ];

  const promoPhotos = ["/promo 2.jpeg", "/promo 1.jpeg"];

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.eyebrow}>Electronic Press Kit</p>

        <div style={styles.logoWrap}>
          <img
            src="/logo-white.jpeg"
            alt="Nothingness logo"
            style={styles.logo}
          />
        </div>

        <p style={styles.headerText}>
          Nothingness is a Minneapolis-based death metal band operating under
          the ethos of Digressive Death, creating music as an honest expression
          of extremity. With two full-length releases behind them and their
          third album, Godslaughter, completed, the band continues to develop a
          distinct and uncompromising identity.
        </p>

        <div style={styles.statsGrid}>
          <div style={styles.statCardLarge}>
            <div style={styles.statLabel}>Releases</div>
            <div style={styles.releaseHeading}>2 Full Length Albums</div>
            <div style={styles.releaseList}>
              {releases.map((item) => (
                <div key={item.title} style={styles.releaseItem}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.releaseLink}
                  >
                    {item.title}
                  </a>
                  <div style={styles.releaseMeta}>
                    {item.label} — {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statLabel}>Based In</div>
            <div style={styles.statValue}>Minneapolis, MN</div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statLabel}>Streaming</div>
            <div style={styles.streamingLinks}>
              {platforms.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.streamingLink}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statLabel}>Current Project</div>
            <div style={styles.statValue}>3rd LP – Godslaughter</div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.twoCol}>
          <div style={styles.panel}>
            <p style={styles.sectionLabel}>Band Bio</p>
            <div style={styles.bioText}>
              <p>
                Nothingness, Minneapolis-based purveyors of Digressive Death,
                create music as an honest expression of extremity. What results
                is a cauldron of metallics, melodies, rhythms, and atmospheres
                that reflect the personal experiences and emotions of its
                creators.
              </p>
              <p>
                The band formed in 2018 with the goal of making something that
                is true to their own tastes, talents, and with no preconceived
                notions or blueprints for structure. Nothingness has previously
                honed its craft on two full-length albums: &apos;The Hollow Gaze
                of Death&apos; (2019) and &apos;Supraliminal&apos; (2023,
                Everlasting Spew Records).
              </p>
              <p>
                As of 2026, the process of recording, mixing, and mastering
                their third full-length album &apos;Godslaughter&apos; is
                complete. The band once again worked with their longstanding
                engineer Adam Tucker of Signaturetone Recording.
              </p>
            </div>
          </div>

          <div style={styles.panel}>
            <p style={styles.sectionLabel}>Current Lineup</p>

            <div style={styles.lineupList}>
              {lineup.map((member) => (
                <div key={member} style={styles.lineupItem}>
                  {member}
                </div>
              ))}
            </div>

            <div style={styles.photoGrid}>
              {promoPhotos.map((src, i) => (
                <div key={i} style={styles.photoFrame}>
                  <img src={src} alt="Nothingness promo" style={styles.photo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.twoCol}>
          <div style={styles.panel}>
            <p style={styles.sectionLabel}>Streaming + Platforms</p>
            <p style={styles.bodyCopy}>
              Spotify, Bandcamp, and YouTube are linked below for immediate
              listening. A private stream of Godslaughter can be provided
              directly for label and industry review.
            </p>

            <div style={styles.linkGrid}>
              {platforms.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={styles.linkCard}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={styles.linkTitle}>{item.name}</div>
                </a>
              ))}
            </div>
          </div>

          <div style={styles.panel}>
            <p style={styles.sectionLabel}>Performance</p>
            <div style={styles.listStack}>
              {performance.map((item) => (
                <div key={item} style={styles.metricRow}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.panel}>
          <p style={styles.sectionLabel}>Discography</p>
          <h2 style={styles.sectionTitle}>Catalog and current album cycle</h2>
          <p style={styles.bodyCopy}>
            Nothingness has released two full-length albums—The Hollow Gaze of
            Death and Supraliminal—with Godslaughter positioned as the band’s
            third full-length and current focus.
          </p>

          <div style={styles.albumGrid}>
            {albums.map((album) => (
              <div
                key={album.title}
                style={{
                  ...styles.albumCard,
                  ...(album.featured ? styles.albumCardFeatured : {}),
                }}
              >
                <div style={styles.albumImageWrap}>
                  <img
                    src={album.image}
                    alt={album.title}
                    style={styles.albumImage}
                  />
                </div>
                <div style={styles.albumContent}>
                  <div style={styles.albumHeader}>
                    <h3 style={styles.albumTitle}>{album.title}</h3>
                    {album.featured ? (
                      <span style={styles.badge}>Current Focus</span>
                    ) : null}
                  </div>
                  <div style={styles.albumMeta}>
                    <div>
                      <span style={styles.metaLabel}>Status:</span> {album.year}
                    </div>
                  </div>
                  <a
                    href={album.href}
                    style={styles.albumLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {album.featured
                      ? "Preview Available on Request"
                      : "Listen / View"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.twoCol}>
          <div style={styles.panel}>
            <p style={styles.sectionLabel}>Press</p>
            <h2 style={styles.sectionTitle}>External validation</h2>

            <div style={styles.quoteStack}>
              {reviews.map((item) => (
                <a
                  key={item.outlet}
                  href={item.href}
                  style={styles.quoteCard}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={styles.quoteOutlet}>{item.outlet}</div>
                  <p style={styles.quoteText}>“{item.blurb}”</p>
                  <div style={styles.quoteAttr}>— {item.attribution}</div>
                </a>
              ))}
            </div>
          </div>

          <div style={styles.panel}>
            <p style={styles.sectionLabel}>Merch</p>
            <p style={styles.bodyCopy}>
              Nothingness maintains an active Bandcamp merch presence with
              physical formats and apparel.
            </p>
            <a
              href="https://nothingnessmn.bandcamp.com/merch"
              style={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
            >
              View Merch Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(120,120,120,0.12), transparent 30%), #090909",
    color: "#f5f5f5",
    fontFamily: "Inter, Arial, Helvetica, sans-serif",
    padding: "32px 20px 80px",
  },
  hero: {
    maxWidth: 1120,
    margin: "0 auto",
    position: "relative",
    padding: "40px 0 24px",
  },
  eyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    color: "#9a9a9a",
    fontSize: 12,
    marginBottom: 12,
  },
  logoWrap: {
    marginBottom: 20,
  },
  logo: {
    width: "100%",
    maxWidth: 520,
    height: "auto",
    display: "block",
    marginBottom: 10,
    filter: "drop-shadow(0 0 12px rgba(255,255,255,0.15))",
  },
  headerText: {
    maxWidth: 820,
    color: "#cfcfcf",
    fontSize: 18,
    lineHeight: 1.7,
    marginTop: 24,
    marginBottom: 0,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(320px, 1.5fr) repeat(3, minmax(200px, 1fr))",
    gap: 16,
    marginTop: 32,
  },
  statCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 20,
    padding: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  statCardLarge: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 20,
    padding: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  statLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    color: "#8d8d8d",
    marginBottom: 10,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 600,
    color: "#ffffff",
    lineHeight: 1.35,
  },
  releaseHeading: {
    fontSize: 24,
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: 14,
    lineHeight: 1.2,
  },
  releaseList: {
    display: "grid",
    gap: 12,
  },
  releaseItem: {
    display: "grid",
    gap: 4,
  },
  releaseLink: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: 4,
  },
  releaseMeta: {
    color: "#b3b3b3",
    fontSize: 14,
    lineHeight: 1.5,
  },
  streamingLinks: {
    display: "grid",
    gap: 8,
  },
  streamingLink: {
    color: "#ffffff",
    textDecoration: "underline",
    textUnderlineOffset: 4,
    fontSize: 16,
    lineHeight: 1.5,
  },
  section: {
    maxWidth: 1120,
    margin: "0 auto",
    paddingTop: 28,
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 24,
  },
  panel: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.045)",
    borderRadius: 28,
    padding: 28,
    boxShadow: "0 18px 45px rgba(0,0,0,0.24)",
  },
  sectionLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    color: "#9a9a9a",
    fontSize: 12,
    margin: 0,
  },
  sectionTitle: {
    fontSize: 36,
    lineHeight: 1.1,
    marginTop: 12,
    marginBottom: 0,
    fontWeight: 650,
  },
  bioText: {
    marginTop: 18,
    color: "#d2d2d2",
    lineHeight: 1.85,
    fontSize: 17,
    display: "grid",
    gap: 18,
  },
  bodyCopy: {
    color: "#d0d0d0",
    lineHeight: 1.8,
    fontSize: 17,
    marginTop: 18,
    marginBottom: 0,
  },
  lineupList: {
    display: "grid",
    gap: 10,
    marginTop: 18,
    marginBottom: 22,
  },
  lineupItem: {
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 14,
    padding: "12px 14px",
    color: "#d8d8d8",
    lineHeight: 1.5,
    fontSize: 15,
  },
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    marginTop: 18,
  },
  photoFrame: {
    overflow: "hidden",
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#111",
    minHeight: 240,
  },
  photo: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  linkGrid: {
    display: "grid",
    gap: 14,
    marginTop: 22,
  },
  linkCard: {
    display: "block",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 20,
    padding: 18,
    color: "#fff",
  },
  linkTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 6,
  },
  listStack: {
    display: "grid",
    gap: 12,
    marginTop: 18,
  },
  metricRow: {
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.035)",
    borderRadius: 16,
    padding: "14px 16px",
    color: "#d8d8d8",
    lineHeight: 1.6,
  },
  albumGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 22,
    marginTop: 26,
  },
  albumCard: {
    overflow: "hidden",
    borderRadius: 26,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    boxShadow: "0 18px 45px rgba(0,0,0,0.24)",
  },
  albumCardFeatured: {
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.07)",
  },
  albumImageWrap: {
    aspectRatio: "1 / 1",
    overflow: "hidden",
    background: "#111",
  },
  albumImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  albumContent: {
    padding: 20,
  },
  albumHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  albumTitle: {
    margin: 0,
    fontSize: 26,
    lineHeight: 1.15,
    fontWeight: 650,
  },
  badge: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.08)",
    color: "#d7d7d7",
    whiteSpace: "nowrap",
  },
  albumMeta: {
    display: "grid",
    gap: 8,
    marginTop: 16,
    color: "#d0d0d0",
    lineHeight: 1.6,
  },
  metaLabel: {
    color: "#8e8e8e",
  },
  albumLink: {
    display: "inline-block",
    marginTop: 18,
    color: "#fff",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: "12px 16px",
    background: "rgba(255,255,255,0.04)",
  },
  quoteStack: {
    display: "grid",
    gap: 16,
    marginTop: 20,
  },
  quoteCard: {
    display: "block",
    textDecoration: "none",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 22,
    padding: 22,
  },
  quoteOutlet: {
    fontSize: 20,
    fontWeight: 650,
    marginBottom: 12,
  },
  quoteText: {
    margin: 0,
    color: "#d0d0d0",
    lineHeight: 1.8,
    fontSize: 17,
  },
  quoteAttr: {
    marginTop: 14,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "#8f8f8f",
  },
  primaryButton: {
    display: "inline-block",
    marginTop: 22,
    padding: "14px 18px",
    borderRadius: 18,
    textDecoration: "none",
    color: "#fff",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 600,
  },
};