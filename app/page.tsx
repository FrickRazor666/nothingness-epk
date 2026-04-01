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
      image: "/album1.jpeg",
      href: "https://nothingnessmn.bandcamp.com/album/the-hollow-gaze-of-death",
      featured: false,
      statusLabel: "2019",
      buttonText: "Listen / View",
    },
    {
      title: "Supraliminal",
      year: "2023",
      image: "/album2.jpeg",
      href: "https://everlastingspew.bandcamp.com/album/supraliminal",
      featured: false,
      statusLabel: "2023",
      buttonText: "Listen / View",
    },
    {
      title: "Godslaughter",
      year: "Completed",
      image: "/album3.jpeg",
      href: "",
      featured: true,
      statusLabel: "Link to stream included in email",
      buttonText: "",
    },
  ];

  const promoPhotos = ["/promo2.jpeg", "/promo1.jpeg"];

  const interviews = [
    {
      title: "Cave Dweller Music Interview",
      description: "Alex and Barclay interview.",
      href: "https://www.youtube.com/watch?v=jSL1awbvuUg",
    },
    {
      title: "METALLARIUM Interview",
      description: "Barclay interview.",
      href: "https://www.youtube.com/watch?v=px-6GM-MELw",
    },
    {
      title: "Metal Plague Interview",
      description: "Alex and Barclay interview.",
      href: "https://metalplague.com/nothingness-interview/",
    },
    {
      title: "The Metal Wanderlust Interview",
      description: "Alex interview.",
      href: "https://themetalwanderlust.wordpress.com/2019/08/30/interview-alex-walstad-nothingness/",
    },
  ];

  const showFlyers = [
    "/flyer1.jpeg",
    "/flyer2.jpeg",
    "/flyer3.jpeg",
    "/flyer4.jpeg",
    "/flyer5.jpeg",
  ];

  const merchImages = [
    "/shirt1.jpeg",
    "/shirt2.jpeg",
    "/shirt3.jpeg",
    "/shirt4.jpeg",
    "/shirt5.jpeg",
    "/shirt6.jpeg",
  ];

  return (
    <div style={styles.page}>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeUp 0.8s ease forwards;
        }

        .fade-delay-1 {
          animation-delay: 0.08s;
        }

        .fade-delay-2 {
          animation-delay: 0.16s;
        }

        .fade-delay-3 {
          animation-delay: 0.24s;
        }

        .fade-delay-4 {
          animation-delay: 0.32s;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero {
          text-align: center;
        }

        .statsScroller {
          display: grid;
          grid-template-columns: minmax(320px, 1.5fr) repeat(3, minmax(220px, 1fr));
          gap: 18px;
          margin-top: 40px;
          text-align: left;
          align-items: stretch;
        }

        .twoCol {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .albumGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-top: 30px;
        }

        .flyerGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-top: 30px;
        }

        .merchGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 30px;
          align-items: start;
        }

        .photoGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 18px;
        }

        @media (max-width: 980px) {
          .twoCol,
          .albumGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 780px) {
          .statsScroller {
            display: flex;
            overflow-x: auto;
            gap: 14px;
            padding-bottom: 8px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }

          .statsScroller::-webkit-scrollbar {
            height: 8px;
          }

          .statsScroller::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.12);
            border-radius: 999px;
          }

          .statsCardMobile {
            min-width: 86%;
            scroll-snap-align: start;
            flex: 0 0 auto;
          }

          .photoGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .heroText {
            font-size: 16px !important;
            line-height: 1.65 !important;
          }

          .sectionTitle {
            font-size: 28px !important;
          }

          .panelPad {
            padding: 20px !important;
          }

          .logoImg {
            max-width: 92% !important;
          }
        }
      `}</style>

      <section style={styles.heroSection}>
        <div className="container hero">
          <p style={styles.eyebrow} className="fade-in">
            Electronic Press Kit
          </p>

          <div style={styles.logoWrap} className="fade-in fade-delay-1">
            <img
              src="/logo.jpeg"
              alt="Nothingness logo"
              style={styles.logo}
              className="logoImg"
            />
          </div>

          <p style={styles.headerText} className="heroText fade-in fade-delay-2">
            Nothingness is a Minneapolis-based death metal band operating under
            the ethos of Digressive Death, creating music as an honest
            expression of extremity. With two full-length releases behind them
            and their third album, Godslaughter, completed, the band continues
            to develop a distinct and uncompromising identity.
          </p>

          <div className="statsScroller fade-in fade-delay-3">
            <div style={styles.statCardLarge} className="statsCardMobile">
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

            <div style={styles.statCard} className="statsCardMobile">
              <div style={styles.statLabel}>Based In</div>
              <div style={styles.statValue}>Minneapolis, MN</div>
            </div>

            <div style={styles.statCard} className="statsCardMobile">
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

            <div style={styles.statCard} className="statsCardMobile">
              <div style={styles.statLabel}>Current Project</div>
              <div style={styles.statValue}>3rd LP – Godslaughter</div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container twoCol">
          <div style={styles.panel} className="panelPad fade-in fade-delay-1">
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
                notions for structure. Nothingness has previously honed their
                craft on two full-length albums: &apos;The Hollow Gaze of
                Death&apos; (2019, Independent) and &apos;Supraliminal&apos;
                (2023, Everlasting Spew Records).
              </p>

              <p>
                As of 2026, the tracking, mixing, and mastering process of their
                3rd full-length album, &apos;Godslaughter&apos;, is complete.
                The band once again worked with their longstanding engineer of
                choice, and local Minneapolis sound freak, Adam Tucker of
                Signaturetone Recording.
              </p>
            </div>
          </div>

          <div style={styles.panel} className="panelPad fade-in fade-delay-2">
            <p style={styles.sectionLabel}>Current Lineup</p>

            <div style={styles.lineupList}>
              {lineup.map((member) => (
                <div key={member} style={styles.lineupItem}>
                  {member}
                </div>
              ))}
            </div>

            <div className="photoGrid">
              {promoPhotos.map((src, i) => (
                <a
                  key={i}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.photoLink}
                >
                  <div style={styles.photoFrame}>
                    <img
                      src={src}
                      alt={`Nothingness promo ${i + 1}`}
                      style={styles.photo}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container twoCol">
          <div style={styles.panel} className="panelPad fade-in fade-delay-1">
            <p style={styles.sectionLabel}>Streaming + Platforms</p>
            <p style={styles.bodyCopy}>
              Spotify, Bandcamp, and YouTube are linked below for immediate
              listening.
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

          <div style={styles.panel} className="panelPad fade-in fade-delay-2">
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
        <div className="container">
          <div style={styles.panel} className="panelPad fade-in fade-delay-1">
            <p style={styles.sectionLabel}>Discography</p>
            <h2 style={styles.sectionTitle} className="sectionTitle">
              Catalog and current album cycle
            </h2>
            <p style={styles.bodyCopy}>
              Nothingness has released two full-length albums—The Hollow Gaze of
              Death and Supraliminal—with Godslaughter positioned as the band’s
              third full-length and current focus.
            </p>

            <div className="albumGrid">
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
                        <span style={styles.metaLabel}>Status:</span>{" "}
                        {album.statusLabel}
                      </div>
                    </div>
                    {album.buttonText ? (
                      <a
                        href={album.href}
                        style={styles.albumLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {album.buttonText}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container twoCol">
          <div style={styles.panel} className="panelPad fade-in fade-delay-1">
            <p style={styles.sectionLabel}>Press</p>
            <h2 style={styles.sectionTitle} className="sectionTitle">
              External validation
            </h2>

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

          <div style={styles.panel} className="panelPad fade-in fade-delay-2">
            <p style={styles.sectionLabel}>Additional Coverage</p>
            <p style={styles.bodyCopy}>Interviews and extended conversations.</p>

            <div style={styles.linkGrid}>
              {interviews.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  style={styles.linkCard}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={styles.linkTitle}>{item.title}</div>
                  <div style={styles.linkDescription}>{item.description}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <div style={styles.panel} className="panelPad fade-in fade-delay-1">
            <p style={styles.sectionLabel}>Notable Shows</p>
            <h2 style={styles.sectionTitle} className="sectionTitle">
              Flyers and show history
            </h2>
            <p style={styles.bodyCopy}>
              Selected flyers from notable appearances and support slots.
            </p>

            <div className="flyerGrid">
              {showFlyers.map((src, i) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.flyerLink}
                >
                  <div style={styles.flyerCard}>
                    <img
                      src={src}
                      alt={`Nothingness show flyer ${i + 1}`}
                      style={styles.flyerImage}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <div style={styles.panel} className="panelPad fade-in fade-delay-1">
            <div style={styles.merchHeaderRow}>
              <div>
                <p style={styles.sectionLabel}>Merch</p>
                <h2 style={styles.sectionTitle} className="sectionTitle">
                  Past Designs
                </h2>
                <p style={styles.bodyCopy}>
                  Selected past shirt designs, with current inventory available
                  in the merch store.
                </p>
              </div>

              <a
                href="https://nothingnessmn.bandcamp.com/merch"
                style={styles.primaryButton}
                target="_blank"
                rel="noreferrer"
              >
                View Merch Store
              </a>
            </div>

            <div className="merchGrid">
              {merchImages.map((src, i) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.merchLink}
                >
                  <div style={styles.merchCard}>
                    <img
                      src={src}
                      alt={`Nothingness merch design ${i + 1}`}
                      style={styles.merchImage}
                    />
                  </div>
                </a>
              ))}
            </div>
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
    padding: "28px 0 84px",
  },
  heroSection: {
    padding: "28px 0 18px",
  },
  eyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    color: "#9a9a9a",
    fontSize: 12,
    marginBottom: 18,
  },
  logoWrap: {
    marginBottom: 14,
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    maxWidth: 560,
    height: "auto",
    display: "block",
  },
  headerText: {
    color: "#cfcfcf",
    maxWidth: 1220,
    margin: "22px auto 0",
    fontSize: 18,
    lineHeight: 1.72,
  },
  statCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 22,
    padding: 22,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  statCardLarge: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 22,
    padding: 22,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  statLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    color: "#8d8d8d",
    marginBottom: 12,
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
    gap: 14,
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
    gap: 10,
  },
  streamingLink: {
    color: "#ffffff",
    textDecoration: "underline",
    textUnderlineOffset: 4,
    fontSize: 16,
    lineHeight: 1.5,
  },
  section: {
    paddingTop: 26,
  },
  panel: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.045)",
    borderRadius: 30,
    padding: 30,
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
    fontSize: 38,
    lineHeight: 1.05,
    marginTop: 12,
    marginBottom: 0,
    fontWeight: 650,
  },
  bioText: {
    marginTop: 20,
    color: "#d2d2d2",
    lineHeight: 1.9,
    fontSize: 17,
    display: "grid",
    gap: 18,
  },
  bodyCopy: {
    color: "#d0d0d0",
    lineHeight: 1.82,
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
  photoLink: {
    display: "block",
    textDecoration: "none",
  },
  photoFrame: {
    overflow: "hidden",
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#111",
  },
  photo: {
    display: "block",
    width: "100%",
    height: "auto",
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
  linkDescription: {
    fontSize: 15,
    color: "#a8a8a8",
    lineHeight: 1.6,
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
  albumCard: {
    overflow: "hidden",
    borderRadius: 28,
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
    padding: 22,
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
  flyerLink: {
    display: "block",
    textDecoration: "none",
  },
  flyerCard: {
    overflow: "hidden",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    boxShadow: "0 18px 45px rgba(0,0,0,0.24)",
  },
  flyerImage: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
  },
  merchHeaderRow: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap",
  },
  merchLink: {
    display: "block",
    textDecoration: "none",
  },
  merchCard: {
    overflow: "hidden",
    borderRadius: 24,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    boxShadow: "0 18px 45px rgba(0,0,0,0.24)",
  },
  merchImage: {
    width: "100%",
    height: "auto",
    display: "block",
  },
};