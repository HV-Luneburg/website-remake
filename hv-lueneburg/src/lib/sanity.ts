import {sanityClient} from 'sanity:client'
import imageUrlBuilder from '@sanity/image-url'
import {toHTML} from '@portabletext/to-html'

// ---------------------------------------------------------------------------
// Image URL helper
// ---------------------------------------------------------------------------
const builder = imageUrlBuilder(sanityClient)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source)

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface SanityBeitrag {
  _id: string
  _type: 'beitrag'
  titel: string
  slug: {current: string}
  veroeffentlichtAm: string
  kategorie?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  titelbild?: any
  zusammenfassung?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inhalt?: any[]
  mannschaft?: {_id: string; name: string; slug: {current: string}}
  autor?: string
  tags?: string[]
}

export interface SanityMannschaft {
  _id: string
  _type: 'mannschaft'
  name: string
  slug: {current: string}
  liga: string
  kategorie?: 'herren' | 'damen' | 'jugend'
  beschreibung?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  foto?: any
  trainer?: string
  trainingszeiten?: string[]
  halle?: string
  kontakt?: string
  instagram?: string
  handballNetId?: string
  reihenfolge?: number
}

export interface SanitySponsor {
  _id: string
  _type: 'sponsor'
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo?: any
  website?: string
  kategorie?: 'hauptsponsor' | 'partner' | 'foerderer'
  aktiv?: boolean
  reihenfolge?: number
}

// ---------------------------------------------------------------------------
// Portable Text → HTML
// ---------------------------------------------------------------------------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function portableTextToHtml(blocks: any[]): string {
  if (!blocks || !blocks.length) return ''
  return toHTML(blocks, {
    components: {
      types: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        image: ({value}: {value: any}) => {
          const url = urlFor(value).width(800).url()
          const alt = value.alt || ''
          const caption = value.caption || ''
          return `<figure><img src="${url}" alt="${alt}" loading="lazy" />${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`
        },
      },
    },
  })
}

// ---------------------------------------------------------------------------
// GROQ Queries
// ---------------------------------------------------------------------------

export async function fetchBeitraege(opts?: {limit?: number}): Promise<SanityBeitrag[]> {
  const limitClause = opts?.limit ? `[0...${opts.limit}]` : ''
  const query = `*[_type == "beitrag"] | order(veroeffentlichtAm desc)${limitClause} {
    _id, _type, titel, slug, veroeffentlichtAm, kategorie, titelbild, zusammenfassung, autor, tags,
    mannschaft->{ _id, name, slug }
  }`
  return sanityClient.fetch(query)
}

export async function fetchBeitrag(slug: string): Promise<SanityBeitrag | null> {
  const query = `*[_type == "beitrag" && slug.current == $slug][0] {
    _id, _type, titel, slug, veroeffentlichtAm, kategorie, titelbild, zusammenfassung, inhalt, autor, tags,
    mannschaft->{ _id, name, slug }
  }`
  return sanityClient.fetch(query, {slug})
}

export async function fetchMannschaften(): Promise<SanityMannschaft[]> {
  const query = `*[_type == "mannschaft"] | order(reihenfolge asc) {
    _id, _type, name, slug, liga, kategorie, beschreibung, foto, trainer, trainingszeiten,
    halle, kontakt, instagram, handballNetId, reihenfolge
  }`
  return sanityClient.fetch(query)
}

export async function fetchMannschaft(slug: string): Promise<SanityMannschaft | null> {
  const query = `*[_type == "mannschaft" && slug.current == $slug][0] {
    _id, _type, name, slug, liga, kategorie, beschreibung, foto, trainer, trainingszeiten,
    halle, kontakt, instagram, handballNetId, reihenfolge
  }`
  return sanityClient.fetch(query, {slug})
}

export async function fetchSponsoren(opts?: {kategorie?: string}): Promise<SanitySponsor[]> {
  const kategorieFilter = opts?.kategorie ? ` && kategorie == "${opts.kategorie}"` : ''
  const query = `*[_type == "sponsor" && aktiv == true${kategorieFilter}] | order(reihenfolge asc) {
    _id, _type, name, logo, website, kategorie, aktiv, reihenfolge
  }`
  return sanityClient.fetch(query)
}
