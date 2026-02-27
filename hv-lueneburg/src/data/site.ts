/**
 * HV Lüneburg — Central Site Configuration
 * =========================================
 * One place to plug in all data sources: next match, live ticker,
 * sponsors, social links, club info, and feature flags.
 *
 * Swap any static value for a Sanity/API fetch once the CMS is wired up.
 */

// ---------------------------------------------------------------------------
// CLUB INFO
// ---------------------------------------------------------------------------

export const club = {
  name: 'HV Lüneburg',
  shortName: 'HVL',
  founded: 1946,
  email: 'info@hv-lueneburg.de',
  sponsoringEmail: 'sponsoring@hv-lueneburg.de',
  address: 'Platzhalter-Straße 1, 21335 Lüneburg',
  instagram: '#',        // TODO: replace with real URL
  facebook: '#',         // TODO: replace with real URL
};

export const handballNetSettings = {
  clubId: 'nuliga.hvn.681',
  organizationId: '',
  tournamentIdHerren: 'nuliga.hvn.1662205',
  tournamentIdDamen: 'nuliga.hvn.1660608', // Placeholder, will be replaced with real ID
  teamIdHerren: '',
  teamIdDamen: '',
};

// ---------------------------------------------------------------------------
// HERO SLIDES  (replace URLs with real action photos)
// ---------------------------------------------------------------------------

export const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1550572017-55de7e1e9c63?q=80&w=1920&auto=format&fit=crop',
    alt: 'HV Lüneburg – Heimspiel',
  },
  {
    src: 'https://images.unsplash.com/photo-1574629810360-7efbb6b69281?q=80&w=1920&auto=format&fit=crop',
    alt: 'HV Lüneburg – Jugendtraining',
  },
  {
    src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1920&auto=format&fit=crop',
    alt: 'HV Lüneburg – Teamgeist',
  },
];

// ---------------------------------------------------------------------------
// NEXT MATCH  (→ swap with Sanity fetch or handball.net API)
// ---------------------------------------------------------------------------

export const nextMatch = {
  /** Team displaying this fixture */
  team: '1. Herren',
  /** Opponent name */
  opponent: 'TSV Altenholz',
  /** League / competition */
  league: 'Oberliga HH/SH',
  /** ISO-8601 date/time string */
  date: '2026-03-15T19:30:00',
  /** Venue */
  venue: 'Lüneburger Sportpark',
  /** Link to full schedule */
  scheduleUrl: '/teams/herren-1',
  /** handball.net team ID for embedded widgets */
  handballNetId: 'nuliga.hvn.1662205',
};

// ---------------------------------------------------------------------------
// LIVE TICKER  (→ swap with Sanity fetch once schema is wired up)
// ---------------------------------------------------------------------------

export const liveTicker = {
  enabled: false,
  /** When enabled, these items scroll in the SponsorTicker / Announcement bar */
  items: [
    { text: 'LIVE: HV Lüneburg 14:13 TSV Altenholz · 45. Minute', href: '/news/live' },
  ],
};

// ---------------------------------------------------------------------------
// SPONSOR TICKER (logos shown in top strip)
// ---------------------------------------------------------------------------

/** Replace `mark` with a real logo `src` URL once images are available */
export const sponsorStrip = [
  { mark: 'S',  name: 'Sparkasse',       src: null as string | null, href: '#' },
  { mark: 'VR', name: 'VR Bank',         src: null as string | null, href: '#' },
  { mark: 'SW', name: 'Stadtwerke',      src: null as string | null, href: '#' },
  { mark: 'AR', name: 'Autohaus Rosier', src: null as string | null, href: '#' },
  { mark: 'R',  name: 'REWE',            src: null as string | null, href: '#' },
  { mark: 'HB', name: 'Bergström',       src: null as string | null, href: '#' },
  { mark: 'SL', name: 'Salü',            src: null as string | null, href: '#' },
  { mark: 'LS', name: 'Lbg. Sport',      src: null as string | null, href: '#' },
];

// ---------------------------------------------------------------------------
// SPONSOR TIERS  (→ swap with Sanity `sponsor` documents once schema exists)
// ---------------------------------------------------------------------------

export const hauptsponsoren = [
  {
    id: 's1',
    name: 'Sparkasse Lüneburg',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Sparkasse_Logo.svg',
    text: 'Gemeinsam für die Region. Die Sparkasse Lüneburg unterstützt den Leistungssport und die Jugendförderung des HVL seit über 10 Jahren als fester Partner.',
    link: 'https://sparkasse-lueneburg.de',
    jobLink: 'https://sparkasse-lueneburg.de/karriere',
  },
  {
    id: 's2',
    name: 'Stadtwerke Lüneburg',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Stadtwerke_Lueneburg_logo.svg',
    text: 'Volle Energie für den Handball. Als regionaler Versorger sorgen die Stadtwerke nicht nur für Strom, sondern auch für die Energie auf dem Spielfeld.',
    link: 'https://stadtwerke-lueneburg.de',
    jobLink: null as string | null,
  },
];

export const partner = [
  { id: 'p1', name: 'VR Bank',        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Volksbanken_Raiffeisenbanken_Logo.svg' },
  { id: 'p2', name: 'Autohaus Rosier',logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mercedes-Benz_Star_2022.svg' },
  { id: 'p3', name: 'REWE',           logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/REWE-Logo.svg' },
  { id: 'p4', name: 'Salü',           logo: null as string | null },
];

export const foerderer = [
  { id: 'f1', name: 'Cafe Klatsch' },
  { id: 'f2', name: 'Ratsapotheke' },
  { id: 'f3', name: 'Bäckerei Meyer' },
  { id: 'f4', name: 'SportShop Lüneburg' },
  { id: 'f5', name: 'PhysioFit' },
];

// ---------------------------------------------------------------------------
// STATS (homepage "In Zahlen" section)
// ---------------------------------------------------------------------------

export const clubStats = [
  { title: 'Mitglieder',      amount: '250+',  icon: 'tabler:users' },
  { title: 'Mannschaften',    amount: '17',     icon: 'tabler:ball-tennis' },
  { title: 'Jahre',           amount: '79+',    icon: 'tabler:calendar' },
  { title: 'Spiele / Saison', amount: '100+',  icon: 'tabler:trophy' },
];

// ---------------------------------------------------------------------------
// GALLERY (homepage gallery section)
// ---------------------------------------------------------------------------

export const homeGallery = [
  'https://images.unsplash.com/photo-1548689816-c399f954f3dd?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574629810360-7efbb6b69281?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=800&auto=format&fit=crop'
];

// ---------------------------------------------------------------------------
// FEATURE FLAGS
// ---------------------------------------------------------------------------

export const features = {
  /** Show the sticky live-score bar at the top */
  stickyScorebar: true,
  /** Show the fixture card in the hero section */
  heroFixtureCard: true,
  /** Dark mode toggle visible in navbar */
  darkModeToggle: true,
};
