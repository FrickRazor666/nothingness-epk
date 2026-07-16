export default function NothingnessWebsite() {
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
      href: "https://nothingnessmn.bandcamp.com/album/supraliminal",
    },
    {
      title: "Godslaughter",
      label: "Everlasting Spew Records",
      year: "2026",
      href: "https://nothingnessmn.bandcamp.com/album/godslaughter",
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

  const albums = [
    {
      title: "The Hollow Gaze of Death",
      image: "/album1.jpeg",
      href: "https://nothingnessmn.bandcamp.com/album/the-hollow-gaze-of-death",
      statusLabel: "2019",
    },
    {
      title: "Supraliminal",
      image: "/album2.jpeg",
      href: "https://nothingnessmn.bandcamp.com/album/supraliminal",
      statusLabel: "2023",
    },
    {
      title: "Godslaughter",
      image: "/album3.jpeg",
      href: "https://nothingnessmn.bandcamp.com/album/godslaughter",
      statusLabel: "2026",
    },
  ];

  const promoPhotos = ["/promo2.jpeg", "/promo1.jpeg"];

  const interviews = [
    {
      title: "Realm of Madness Podcast Episode",
      description:
        "Extended conversation with Brian Ortiz of Xibalba and Tzompantli.",
      href: "https://open.spotify.com/episode/2h1wskPx7LThJ3CHRxddph",
    },
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

  const signaturetonePerformances = [
    {
      title: "Abyssal Woe",
      date: "8/2/2019",
      href: "https://www.youtube.com/watch?v=HxP-rq8NB9o&list=RDHxP-rq8NB9o&start_radio=1",
    },
    {
      title: "Iced Over Ash",
      date: "8/15/2019",
      href: "https://www.youtube.com/watch?v=pWoFeoi_Xh4&list=RDpWoFeoi_Xh4&start_radio=1",
    },
    {
      title: "Curse of Creation",
      date: "11/11/2022",
      href: "https://www.youtube.com/watch?v=R0Pn0NngM3s&list=RDR0Pn0NngM3s&start_radio=1",
    },
  ];

  const showFlyers = [
    "/flyer1.jpeg",
    "/flyer2.jpeg",
    "/flyer3.jpeg",
    "/flyer4.jpeg",
    "/flyer5.jpeg",
  ];

  const showHistory = [
    "8/10/2019 — MPLS (The Sarcophagus): Phobophilic, Void Rot, Coagulate",
    "9/27/2019 — MPLS (Mortimers): Cell, Sunless",
    "10/18/2019 — MPLS (Hexagon): Lungs, Hive, Witchden",
    "11/9/2019 — KANSAS CITY (Davey's Uptown): Feral Light, Crisis Actor",
    "11/10/2019 — IOWA CITY (Purgatory): Dryad, Feral Light, ARM",
    "11/16/2019 — MPLS (Hexagon): Deterioration, Violence Condoned, Plagued Insanity, Rad Enhancer, King Goro",
    "12/14/2019 — FARGO (Red Raven): Phobophilic, Void Rot, Arachnid",
    "12/19/2019 — MPLS (Part Wolf): Immortal Bird, Tvaer",
    "2/8/2020 — MPLS (Whiskey Junction): Maniacal Force, Plagued Insanity, Coffin Rites",
    "3/14/2020 — MPLS (Part Wolf): Dischordia, Sunless, Getting Stabbed",
    "8/1/2021 — FARGO (Fargo Brewing Company): Rottenness, MAUL, Agony Reigns, No Divinity, Vessels",
    "8/14/2021 — ST. PAUL (North Star Bar): Coagulate, Manical Force",
    "9/24/2021 — MPLS (Part Wolf): Void Rot, Tvaer",
    "10/29/2021 — MPLS (Part Wolf): Wanderer, Closet Witch, DJ Desert Storm",
    "3/26/2022 — MPLS (Underground Music Venue): Suffering Hour, Sunless, Eudaemon",
    "7/16/2022 — FARGO (The Aquarium): Suffering Hour, MAUL, Aberration, Thrallfrost",
    "8/19/2022 — MPLS (Underground Music Venue): Void Rot, Worn Mantle, Aberration",
    "9/8/2022 — MPLS (Eagles 34): WAKE, Feral Light",
    "8/12/2023 — INDIANAPOLIS (Black Circle): Heavy Hell IV — Mortician, Profanatica, Temple of Void, Deceased, and more",
    "8/13/2023 — CHICAGO (Reggies): Street Tombs, Gorgatron, Aberration, Primal Code",
    "8/29/2023 — ST. PAUL (Turf Club): Moynoq, Witchden",
    "9/21/2023 — ST. PAUL (White Rock Lounge): Valdrin, Aberration",
    "11/18/2023 — KANSAS CITY (Farwell Cafe): Baring Teeth, Sawed Off, Sarin Reaper",
    "11/27/2023 — ST. PAUL (Amsterdam Bar & Hall): Sunless, Hexis, Midwest Lust, All You Need Is Kill",
    "2/1/2025 — MPLS (Zhora Darling): Aberration, Extermination Day",
    "6/6/2025 — MPLS (Zhora Darling): Drouth, Cavernous Maw",
    "6/7/2025 — MILWAUKEE (Sabbatic): Drouth, Drillbit, Scroll",
    "6/8/2025 — INDIANAPOLIS (Black Circle): Drouth",
    "6/9/2025 — CHICAGO (Reggies): Drouth, Embittered, Fail To Enlighten",
    "9/18/2025 — MPLS (Underground Music Cafe): Xoth, Innoculation",
  ];

  return (
    <main style={styles.page}>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
        }

        a {
          transition:
            background-color 140ms ease,
            color 140ms ease,
            border-color 140ms ease,
            transform 140ms ease;
        }

        a:hover {
          border-color: #ffffff !important;
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding-left: 18px;
          padding-right: 18px;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.45s ease forwards;
        }

        .fade-delay-1 {
          animation-delay: 0.04s;
        }

        .fade-delay-2 {
          animation-delay: 0.08s;
        }

        .fade-delay-3 {
          animation-delay: 0.12s;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-in {
            opacity: 1;
            transform: none;
            animation: none;
          }

          * {
            scroll-behavior: auto !important;
          }
        }

        .hero {
          text-align: center;
        }

        .statsScroller {
          display: grid;
          grid-template-columns:
            minmax(380px, 1.55fr)
            minmax(240px, 0.85fr)
            minmax(260px, 0.95fr);
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
          text-align: left;
          align-items: stretch;
        }

        .twoCol {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .albumGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 22px;
        }

        .flyerGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 12px;
          margin-top: 22px;
        }

        .videoGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 20px;
        }

        .photoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 16px;
        }

        .showScrollBox {
          scrollbar-width: auto;
          scrollbar-color: #7cfc00 #0d0d0d;
        }

        .showScrollBox::-webkit-scrollbar {
          width: 11px;
        }

        .showScrollBox::-webkit-scrollbar-track {
          background: #0d0d0d;
          border-left: 1px solid #7cfc00;
        }

        .showScrollBox::-webkit-scrollbar-thumb {
          background: #7cfc00;
        }

        @media (max-width: 980px) {
          .twoCol,
          .albumGrid,
          .videoGrid {
            grid-template-columns: 1fr;
          }

          .statsScroller {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 780px) {
          .statsScroller {
            display: flex;
            justify-content: flex-start;
            overflow-x: auto;
            gap: 12px;
            margin-left: -18px;
            margin-right: -18px;
            padding: 0 18px 10px;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }

          .statsScroller::-webkit-scrollbar {
            display: none;
          }

          .statsCardMobile {
            min-width: min(86vw, 370px);
            scroll-snap-align: center;
            flex: 0 0 auto;
          }

          .photoGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .statsScroller {
            margin-left: -12px;
            margin-right: -12px;
            padding-left: 12px;
            padding-right: 12px;
          }

          .heroText {
            font-size: 16px !important;
            line-height: 1.58 !important;
          }

          .sectionTitle {
            font-size: 28px !important;
          }

          .panelPad {
            padding: 15px !important;
          }

          .logoImg {
            max-width: 94% !important;
          }

          .merchCallout {
            align-items: flex-start !important;
          }
        }
      `}</style>

      <section style={styles.heroSection}>
        <div className="container hero">
          <p style={styles.eyebrow} className="fade-in">
            Welcome to Our Website, My Dudes!
          </p>

          <div style={styles.logoWrap} className="fade-in fade-delay-1">
            <img
              src="/logo.jpeg"
              alt="Nothingness"
              style={styles.logo}
              className="logoImg"
            />
          </div>

          <p style={styles.headerText} className="heroText fade-in fade-delay-2">
            Nothingness is a Minneapolis-based death metal band operating under
            the ethos of Digressive Death, creating music as an honest
            expression of extremity. With two full-length releases behind them
            and their third album, Godslaughter, releasing July 31st, the band
            continues to develop a distinct and uncompromising identity.
          </p>

          <div className="statsScroller fade-in fade-delay-3">
            <div style={styles.statCardLarge} className="statsCardMobile">
              <div style={styles.statLabel}>Releases</div>
              <div style={styles.releaseHeading}>3 Full Length Albums</div>

              <div style={styles.releaseList}>
                {releases.map((release) => (
                  <div key={release.title} style={styles.releaseItem}>
                    <a
                      href={release.href}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.releaseLink}
                    >
                      {release.title}
                    </a>

                    <div style={styles.releaseMeta}>
                      {release.label} — {release.year}
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
              <div style={styles.statLabel}>Listen</div>

              <div style={styles.streamingLinks}>
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.streamingLink}
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container twoCol">
          <article
            style={styles.panel}
            className="panelPad fade-in fade-delay-1"
          >
            <p style={styles.sectionLabel}>Band Bio</p>
            <div style={styles.sectionDivider} />

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
                Their third full-length record, Godslaughter, is being released
                July 31st through Everlasting Spew Records and is poised to be
                the band&apos;s most direct and aggressive work to date. The
                band once again worked with their longstanding engineer of
                choice, and local Minneapolis sound freak, Adam Tucker of
                Signaturetone Recording, with guest appearances from Gabri of
                Cosmic Putrefaction and Brendan of Altars and Convulsing.
              </p>
            </div>
          </article>

          <article
            style={styles.panel}
            className="panelPad fade-in fade-delay-2"
          >
            <p style={styles.sectionLabel}>Current Lineup</p>
            <div style={styles.sectionDivider} />

            <div style={styles.lineupList}>
              {lineup.map((member) => (
                <div key={member} style={styles.lineupItem}>
                  {member}
                </div>
              ))}
            </div>

            <div className="photoGrid">
              {promoPhotos.map((src, index) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.photoLink}
                >
                  <div style={styles.photoFrame}>
                    <img
                      src={src}
                      alt={`Nothingness promotional photograph ${index + 1}`}
                      style={styles.photo}
                    />
                  </div>
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <article
            style={styles.panel}
            className="panelPad fade-in fade-delay-1"
          >
            <p style={styles.sectionLabel}>Discography</p>
            <div style={styles.sectionDivider} />

            <h2 style={styles.sectionTitle} className="sectionTitle">
              Catalog and Current Album Cycle
            </h2>

            <p style={styles.bodyCopy}>
              Nothingness has released two full-length albums—The Hollow Gaze of
              Death and Supraliminal—with Godslaughter positioned as the band’s
              third full-length and their most focused and developed effort to
              date.
            </p>

            <div className="albumGrid">
              {albums.map((album) => (
                <article key={album.title} style={styles.albumCard}>
                  <div style={styles.albumImageWrap}>
                    <img
                      src={album.image}
                      alt={`${album.title} album artwork`}
                      style={styles.albumImage}
                    />
                  </div>

                  <div style={styles.albumContent}>
                    <h3 style={styles.albumTitle}>{album.title}</h3>

                    <div style={styles.albumMeta}>
                      <div>
                        <span style={styles.metaLabel}>Release:</span>{" "}
                        {album.statusLabel}
                      </div>
                    </div>

                    <a
                      href={album.href}
                      style={styles.albumLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Listen / View
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container twoCol">
          <article
            style={styles.panel}
            className="panelPad fade-in fade-delay-1"
          >
            <p style={styles.sectionLabel}>Streaming and Platforms</p>
            <div style={styles.sectionDivider} />

            <h2 style={styles.sectionTitle} className="sectionTitle">
              Listen to Nothingness
            </h2>

            <p style={styles.bodyCopy}>
              Stream the catalog, watch official videos, and follow the band
              through the platforms below.
            </p>

            <div style={styles.linkGrid}>
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  style={styles.linkCard}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={styles.linkTitle}>{platform.name}</div>
                  <div style={styles.linkAction}>Open Platform →</div>
                </a>
              ))}
            </div>
          </article>

          <article
            style={styles.panel}
            className="panelPad fade-in fade-delay-2"
          >
            <p style={styles.sectionLabel}>Appearances and Conversations</p>
            <div style={styles.sectionDivider} />

            <h2 style={styles.sectionTitle} className="sectionTitle">
              Interviews and Podcasts
            </h2>

            <p style={styles.bodyCopy}>
              Interviews, podcast appearances, and extended conversations with
              members of Nothingness.
            </p>

            <div style={styles.linkGrid}>
              {interviews.map((interview) => (
                <a
                  key={interview.title}
                  href={interview.href}
                  style={styles.linkCard}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={styles.linkTitle}>{interview.title}</div>
                  <div style={styles.linkDescription}>
                    {interview.description}
                  </div>
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <article
            style={styles.panel}
            className="panelPad fade-in fade-delay-1"
          >
            <p style={styles.sectionLabel}>Live Signaturetone Performances</p>
            <div style={styles.sectionDivider} />

            <h2 style={styles.sectionTitle} className="sectionTitle">
              Live Performance Videos
            </h2>

            <p style={styles.bodyCopy}>
              Selected live session performances at Signaturetone Recording.
            </p>

            <div className="videoGrid">
              {signaturetonePerformances.map((performance) => (
                <a
                  key={performance.title}
                  href={performance.href}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.videoCard}
                >
                  <div style={styles.videoTitle}>{performance.title}</div>
                  <div style={styles.videoMeta}>{performance.date}</div>
                  <div style={styles.videoButton}>Watch Performance</div>
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <article
            style={styles.panel}
            className="panelPad fade-in fade-delay-1"
          >
            <p style={styles.sectionLabel}>Shows</p>
            <div style={styles.sectionDivider} />

            <h2 style={styles.sectionTitle} className="sectionTitle">
              Flyers and Show History
            </h2>

            <p style={styles.bodyCopy}>
              Selected flyers from notable appearances and a running history of
              Nothingness performances.
            </p>

            <div className="flyerGrid">
              {showFlyers.map((src, index) => (
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
                      alt={`Nothingness show flyer ${index + 1}`}
                      style={styles.flyerImage}
                    />
                  </div>
                </a>
              ))}
            </div>

            <div style={styles.showScrollContainer}>
              <div style={styles.showScrollHeader}>
                <div style={styles.showScrollTitle}>Complete Show History</div>
                <div style={styles.showScrollHint}>
                  Scroll to View Full List ↓
                </div>
              </div>

              <div style={styles.showListWrap} className="showScrollBox">
                {showHistory.map((show) => (
                  <div key={show} style={styles.showRow}>
                    {show}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <article
            style={styles.merchPanel}
            className="panelPad merchCallout fade-in fade-delay-1"
          >
            <div>
              <p style={styles.sectionLabel}>Merch</p>
              <div style={styles.sectionDivider} />

              <h2 style={styles.sectionTitle} className="sectionTitle">
                Official Nothingness Merch
              </h2>

              <p style={styles.bodyCopy}>
                Shirts, physical releases, and currently available designs can
                be found through the official Nothingness Bandcamp store.
              </p>
            </div>

            <a
              href="https://nothingnessmn.bandcamp.com/merch"
              style={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
            >
              Visit Merch Store
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

const lime = "#7CFC00";

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    color: "#ffffff",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: "22px 0 72px",
  },

  heroSection: {
    padding: "24px 0 14px",
  },

  eyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    color: lime,
    fontSize: 11,
    fontWeight: 700,
    margin: "0 0 18px",
  },

  logoWrap: {
    marginBottom: 12,
    display: "flex",
    justifyContent: "center",
  },

  logo: {
    width: "100%",
    maxWidth: 540,
    height: "auto",
    display: "block",
  },

  headerText: {
    color: "#d3d3d3",
    maxWidth: 1040,
    margin: "18px auto 0",
    fontSize: 18,
    lineHeight: 1.68,
  },

  statCard: {
    border: `1px solid ${lime}`,
    background: "#040404",
    borderRadius: 2,
    padding: 20,
    minHeight: 174,
  },

  statCardLarge: {
    border: `1px solid ${lime}`,
    background: "#040404",
    borderRadius: 2,
    padding: 20,
    minHeight: 174,
  },

  statLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    color: lime,
    fontWeight: 700,
    marginBottom: 12,
  },

  statValue: {
    fontSize: 22,
    fontWeight: 700,
    color: "#ffffff",
    lineHeight: 1.3,
    textTransform: "uppercase",
  },

  releaseHeading: {
    fontSize: 23,
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: 15,
    lineHeight: 1.15,
    textTransform: "uppercase",
  },

  releaseList: {
    display: "grid",
    gap: 13,
  },

  releaseItem: {
    display: "grid",
    gap: 4,
  },

  releaseLink: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: 700,
    textDecoration: "underline",
    textUnderlineOffset: 4,
  },

  releaseMeta: {
    color: "#989898",
    fontSize: 13,
    lineHeight: 1.45,
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
    fontWeight: 700,
    lineHeight: 1.45,
  },

  section: {
    paddingTop: 20,
  },

  panel: {
    border: `1px solid ${lime}`,
    background: "#020202",
    borderRadius: 2,
    padding: 22,
    minWidth: 0,
  },

  merchPanel: {
    border: `1px solid ${lime}`,
    background: "#020202",
    borderRadius: 2,
    padding: 22,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 28,
  },

  sectionLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    color: lime,
    fontSize: 11,
    fontWeight: 700,
    margin: 0,
  },

  sectionDivider: {
    width: "100%",
    height: 1,
    background: lime,
    marginTop: 12,
    marginBottom: 14,
    opacity: 0.75,
  },

  sectionTitle: {
    fontSize: 36,
    lineHeight: 1,
    margin: 0,
    fontWeight: 700,
    letterSpacing: "-0.03em",
    textTransform: "uppercase",
  },

  bioText: {
    marginTop: 18,
    color: "#d0d0d0",
    lineHeight: 1.86,
    fontSize: 17,
    display: "grid",
    gap: 18,
  },

  bodyCopy: {
    color: "#b8b8b8",
    lineHeight: 1.76,
    fontSize: 16,
    marginTop: 16,
    marginBottom: 0,
    maxWidth: 900,
  },

  lineupList: {
    display: "grid",
    gap: 8,
    marginTop: 16,
    marginBottom: 20,
  },

  lineupItem: {
    border: `1px solid ${lime}`,
    background: "#050505",
    borderRadius: 1,
    padding: "12px 14px",
    color: "#dadada",
    lineHeight: 1.45,
    fontSize: 15,
  },

  photoLink: {
    display: "block",
    textDecoration: "none",
    minWidth: 0,
  },

  photoFrame: {
    overflow: "hidden",
    borderRadius: 1,
    border: `1px solid ${lime}`,
    background: "#000000",
  },

  photo: {
    display: "block",
    width: "100%",
    height: "auto",
  },

  linkGrid: {
    display: "grid",
    gap: 12,
    marginTop: 20,
  },

  linkCard: {
    display: "block",
    textDecoration: "none",
    border: `1px solid ${lime}`,
    background: "#050505",
    borderRadius: 1,
    padding: 16,
    color: "#ffffff",
  },

  linkTitle: {
    fontSize: 17,
    fontWeight: 700,
    marginBottom: 6,
    textTransform: "uppercase",
  },

  linkDescription: {
    fontSize: 14,
    color: "#a0a0a0",
    lineHeight: 1.55,
  },

  linkAction: {
    fontSize: 12,
    color: lime,
    lineHeight: 1.5,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontWeight: 700,
  },

  albumCard: {
    overflow: "hidden",
    borderRadius: 1,
    border: `1px solid ${lime}`,
    background: "#050505",
    minWidth: 0,
  },

  albumImageWrap: {
    aspectRatio: "1 / 1",
    overflow: "hidden",
    background: "#000000",
    borderBottom: `1px solid ${lime}`,
  },

  albumImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  albumContent: {
    padding: 18,
  },

  albumTitle: {
    margin: 0,
    fontSize: 24,
    lineHeight: 1.1,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
  },

  albumMeta: {
    display: "grid",
    gap: 8,
    marginTop: 14,
    color: "#d0d0d0",
    lineHeight: 1.55,
  },

  metaLabel: {
    color: lime,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  albumLink: {
    display: "inline-block",
    marginTop: 16,
    color: "#000000",
    textDecoration: "none",
    border: `1px solid ${lime}`,
    borderRadius: 0,
    padding: "11px 15px",
    background: lime,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: 13,
  },

  videoCard: {
    display: "block",
    textDecoration: "none",
    border: `1px solid ${lime}`,
    background: "#050505",
    borderRadius: 1,
    padding: 18,
    color: "#ffffff",
  },

  videoTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 10,
    textTransform: "uppercase",
  },

  videoMeta: {
    color: "#a0a0a0",
    fontSize: 14,
    marginBottom: 16,
  },

  videoButton: {
    display: "inline-block",
    border: `1px solid ${lime}`,
    borderRadius: 0,
    padding: "10px 14px",
    background: lime,
    color: "#000000",
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },

  flyerLink: {
    display: "block",
    textDecoration: "none",
    minWidth: 0,
  },

  flyerCard: {
    overflow: "hidden",
    borderRadius: 1,
    border: `1px solid ${lime}`,
    background: "#050505",
  },

  flyerImage: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
  },

  showScrollContainer: {
    marginTop: 24,
    border: `1px solid ${lime}`,
    background: "#010101",
    borderRadius: 1,
    padding: 14,
  },

  showScrollHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottom: `1px solid ${lime}`,
  },

  showScrollTitle: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#ffffff",
  },

  showScrollHint: {
    fontSize: 11,
    color: lime,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: 700,
  },

  showListWrap: {
    maxHeight: 420,
    overflowY: "auto",
    overscrollBehavior: "contain",
    paddingRight: 8,
    display: "grid",
    gap: 10,
  },

  showRow: {
    border: `1px solid ${lime}`,
    background: "#060606",
    borderRadius: 1,
    padding: "13px 14px",
    color: "#d6d6d6",
    lineHeight: 1.62,
    fontSize: 14,
  },

  primaryButton: {
    display: "inline-block",
    padding: "13px 18px",
    borderRadius: 0,
    textDecoration: "none",
    color: "#000000",
    background: lime,
    border: `1px solid ${lime}`,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: 13,
    flexShrink: 0,
  },
};