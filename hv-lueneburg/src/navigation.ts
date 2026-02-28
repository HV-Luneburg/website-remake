import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Startseite',
      href: getPermalink('/'),
    },
    {
      text: 'Aktuelles',
      href: getBlogPermalink(),
    },
    {
      text: 'Teams',
      href: getPermalink('/teams'),
    },
    {
      text: 'Sponsoren',
      href: getPermalink('/sponsoring'),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Verein',
      links: [
        { text: 'Über uns', href: getPermalink('/about') },
        { text: 'Teams', href: getPermalink('/teams') },
        { text: 'Engagement', href: getPermalink('/about') },
        { text: 'Vertrauensteam', href: getPermalink('/about') + '#vertrauensteam' },
        { text: 'Kontakt', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Sponsoring',
      links: [
        { text: 'Unsere Sponsoren', href: getPermalink('/sponsoring') },
        { text: 'Sponsor werden', href: getPermalink('/sponsoring/werden') },
      ],
    },
    {
      title: 'Aktuelles',
      links: [
        { text: 'News & Berichte', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Datenschutz', href: getPermalink('/privacy') },
    { text: 'Impressum', href: getPermalink('/terms') },
    { text: 'Barrierefreiheit', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `&copy; ${new Date().getFullYear()} HV Lüneburg e.V. — Gegründet 1946. Alle Rechte vorbehalten.`,
};
