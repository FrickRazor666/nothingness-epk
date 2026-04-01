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
        "Praised the record’s relentless riff construction, dynamic range, and willingness to bend genre expectations through dissonance and unpredictable arrangement choices.",
      href: "https://www.angrymetalguy.com/nothingness-supraliminal-review/",
      attribution: "Angry Metal Guy",
    },
  ];

  const sales = [
    "Supraliminal – 440,586 Spotify streams",
    "Inviolate Viscera – 113,282 Spotify streams",
    "Curse of Creation – 70,470 Spotify streams",
    "The Hollow Gaze of Death – 64,726 Spotify streams",
    "Bandcamp – $11,238 total sales",
    "Bandcamp – 36,999 total plays",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-semibold">NOTHINGNESS</h1>

        <p className="mt-6 max-w-2xl text-base text-neutral-300">
          Nothingness is a Minneapolis-based death metal band operating under
          the ethos of Digressive Death, creating music as an honest expression
          of extremity. With two full-length releases behind them and their
          third album, Godslaughter, completed, the band continues to develop a
          distinct and uncompromising identity.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border border-white/10 p-4">
              <div className="text-xs text-neutral-400">{s.label}</div>
              <div className="text-lg">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Band Bio</h2>

        <div className="mt-6 space-y-6 text-neutral-300">
          <p>
            Nothingness, Minneapolis-based purveyors of Digressive Death, create
            music as an honest expression of extremity. What results is a
            cauldron of metallics, melodies, rhythms, and atmospheres that
            reflect the personal experiences and emotions of its creators.
          </p>

          <p>
            The band formed in 2018 with the goal of making something that is
            true to their own tastes, talents, and with no preconceived notions
            or blueprints for structure. Nothingness has previously honed its
            craft on two full-length albums: 'The Hollow Gaze of Death' (2019)
            and 'Supraliminal' (2023, Everlasting Spew Records).
          </p>

          <p>
            As of 2026, the process of recording, mixing, and mastering their
            third full-length album 'Godslaughter' is complete. The band once
            again worked with their longstanding engineer Adam Tucker of
            Signaturetone Recording.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Streaming</h2>

        <div className="mt-6 space-y-3">
          {platforms.map((p) => (
            <a key={p.name} href={p.href} className="block underline">
              {p.name} — {p.detail}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Performance</h2>

        <ul className="mt-6 space-y-2 text-neutral-300">
          {sales.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Press</h2>

        <div className="mt-6 space-y-6">
          {reviews.map((r) => (
            <div key={r.outlet}>
              <a href={r.href} className="font-semibold underline">
                {r.outlet}
              </a>
              <p className="mt-2 text-neutral-300">“{r.blurb}”</p>
              <div className="text-xs text-neutral-500">
                — {r.attribution}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}