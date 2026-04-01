export default function NothingnessEPK() {
  const stats = [
    { label: "Releases", value: "2 albums released" },
    { label: "Based In", value: "Minneapolis, MN" },
    { label: "Streaming", value: "Spotify / Bandcamp / YouTube" },
    { label: "Current Project", value: "3rd LP – Godslaughter" },
  ];

  const platforms = [
    {
      name: "Spotify",
      detail: "Artist page / catalog / top tracks",
      href: "https://open.spotify.com/artist/4cw5FUOFNMqdGehf7Os60Z",
    },
    {
      name: "Bandcamp",
      detail: "Discography / merch / direct support",
      href: "https://nothingnessmn.bandcamp.com/",
    },
    {
      name: "YouTube",
      detail: "Official topic channel and listening access",
      href: "https://www.youtube.com/channel/UCdRQ8O8kHecf29oPCVvKorA",
    },
    {
      name: "Featured Video",
      detail: "Largest YouTube track / video link",
      href: "https://www.youtube.com/watch?v=R0Pn0NngM3s&list=RDR0Pn0NngM3s&start_radio=1",
    },
    {
      name: "Private Stream",
      detail: "Godslaughter stream available on request",
      href: "mailto:",
    },
  ];

  const reviews = [
    {
      outlet: "BangerTV",
      blurb: "If you like experimentation in your Death Metal, but want the experimentation lab to be run exclusively by very intelligent cavemen, then this might be the record for you.",
      href: "https://www.youtube.com/watch?v=8hdNdvkalt0&list=PLBub_IHNCfBh6nxIJk8-NxRoF-NJLySfh&index=11",
      attribution: "Blayne Smith",
    },
    {
      outlet: "Angry Metal Guy",
      blurb: "Praised the record’s relentless riff construction, dynamic range, and willingness to bend genre expectations through dissonance and unpredictable arrangement choices.",
      href: "https://www.angrymetalguy.com/nothingness-supraliminal-review/",
      attribution: "Angry Metal Guy review of Supraliminal",
    },
  ];

  const sales = [
    "Supraliminal – 440,586 Spotify streams (all-time)",
    "Inviolate Viscera (single) – 113,282 Spotify streams",
    "Curse of Creation (single) – 70,470 Spotify streams",
    "The Hollow Gaze of Death – 64,726 Spotify streams (all-time)",
    "Bandcamp – $11,238.06 total sales",
    "Bandcamp – 36,999 total plays",
  ];

  const shows = [
    "Current lineup promo photos included on this page",
    "Live performance photography included for booking and press context",
    "Additional show history and support bill details available on request",
  ];

  const merch = [
    "LP / CD / cassette variants",
    "Shirts / long sleeves / hoodies",
    "Posters / patches / accessories",
    "Store: https://nothingnessmn.bandcamp.com/merch",
  ];

  const albums = [
    {
      title: "The Hollow Gaze of Death",
      year: "2019",
      format: "LP / CD / Digital",
      link: "https://open.spotify.com/artist/4cw5FUOFNMqdGehf7Os60Z",
      image: "/mnt/data/N1.jpeg",
      featured: false,
    },
    {
      title: "Supraliminal",
      year: "2023",
      format: "LP / CD / Digital",
      link: "https://nothingnessmn.bandcamp.com/",
      image: "/mnt/data/N2 Album Art Final.jpeg",
      featured: false,
    },
    {
      title: "Godslaughter",
      year: "Upcoming",
      format: "LP / CD / Digital",
      link: "#",
      image: "/mnt/data/N3 Album Art Final.jpeg",
      featured: true,
    },
  ];

  const mediaBlocks = [
    {
      title: "Current Lineup",
      body: "Two promo photos of the current lineup are included below for label, press, and promotional use.",
    },
    {
      title: "Live Presence",
      body: "Live photography is included to show stage presence, performance energy, and real-world band identity.",
    },
    {
      title: "Visual Catalog",
      body: "All three full-length album covers are included to show continuity, visual identity, and catalog progression.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-neutral-400">
                Electronic Press Kit
              </p>
              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">NOTHINGNESS</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
                Nothingness is a Minneapolis-based death metal band operating under the ethos of Digressive Death, creating music as an honest expression of extremity through a fusion of metallics, melody, rhythm, and atmosphere. With two full-length releases behind them and their third album, Godslaughter, completed, the band continues to develop a distinct and uncompromising identity rooted in both tradition and forward momentum.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">{item.label}</div>
                    <div className="mt-2 text-lg font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-400">
                Quick Links
              </div>
              <div className="space-y-3">
                {platforms.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-4 transition hover:bg-black/30"
                  >
                    <div className="text-sm font-medium text-white">{item.name}</div>
                    <div className="mt-1 text-sm text-neutral-400">{item.detail}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Band Bio</p>
            <div className="mt-3 text-base leading-8 text-neutral-300">
              <p>
                Nothingness, Minneapolis-based purveyors of Digressive Death, create music as an honest expression of extremity. What results is a cauldron of metallics, melodies, rhythms, and atmospheres that reflect the personal experiences and emotions of its creators.
              </p>
              <p className="mt-5">
                The band formed in 2018 with the goal of making something that is true to their own tastes, talents, and with no preconceived notions or blueprints for structure. Nothingness has previously honed its craft on two full-length albums: 'The Hollow Gaze of Death', released independently in 2019, and 'Supraliminal', released with Everlasting Spew Records in 2023.
              </p>
              <p className="mt-5">
                As of 2026, the process of recording, mixing, and mastering their third full-length album 'Godslaughter' is complete. The band once again worked with their longstanding engineer of choice, and local Minneapolis sound freak, Adam Tucker of Signaturetone Recording.
              </p>
            </div>
              <p className="mt-5 text-base leading-8 text-neutral-300">
                Spotify, Bandcamp, and YouTube are linked below for immediate listening. A private stream of Godslaughter can be provided directly for label and industry review.
              </p>
              <div className="mt-8 grid gap-4">
                {platforms.map((item) => (
                  <a key={item.name} href={item.href} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10">
                    <div className="font-medium text-white">{item.name}</div>
                    <div className="mt-1 text-sm text-neutral-400">{item.detail}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-900 p-7">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Sales + Performance</p>
              <div className="mt-5 space-y-3">
                {sales.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Discography</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Catalog and current album cycle
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300">
            Nothingness has released two full-length albums—The Hollow Gaze of Death and Supraliminal—with Godslaughter positioned as the band’s third full-length and current focus.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {albums.map((album) => (
              <article
                key={album.title}
                className={`overflow-hidden rounded-3xl border ${album.featured ? "border-white/20 bg-white/10" : "border-white/10 bg-white/5"} shadow-2xl`}
              >
                <div className="aspect-square w-full overflow-hidden bg-black/30">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{album.title}</h3>
                    {album.featured ? (
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-neutral-300">
                        Current Focus
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-neutral-300">
                    <div><span className="text-neutral-500">Status:</span> {album.year}</div>
                    <div><span className="text-neutral-500">Format:</span> {album.format}</div>
                  </div>
                  <a
                    href={album.link}
                    className="mt-5 inline-flex rounded-2xl border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    {album.featured ? "Stream / Preview" : "Listen / View"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Reviews + Coverage</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              External validation and press
            </h2>
            <div className="mt-8 space-y-4">
              {reviews.map((item) => (
                <a
                  key={item.outlet}
                  href={item.href}
                  className="block rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <div className="text-lg font-semibold text-white">{item.outlet}</div>
                  <p className="mt-3 text-base leading-8 text-neutral-300">“{item.blurb}”</p>
                  {item.attribution && (
                    <div className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
                      — {item.attribution}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6 sm:col-span-2">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Merch</p>
              <a href="https://nothingnessmn.bandcamp.com/merch" className="mt-3 inline-block text-sm text-white underline underline-offset-4 hover:text-neutral-300">
                View Store
              </a>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {merch.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6 sm:col-span-2">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Shows</p>
              <div className="mt-4 space-y-3">
                {shows.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 sm:col-span-2">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Visual Assets</p>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                Primary live photo for press and label reference. Additional photos available on request.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/mnt/data/promo 2.jpeg"
                    alt="Nothingness promo photo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/mnt/data/promo 1.jpeg"
                    alt="Nothingness promo photo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
