import { s as sanityClient } from './_sanity_client_D5Y93ZeM.mjs';
import imageUrlBuilder from '@sanity/image-url';
import { toHTML } from '@portabletext/to-html';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);
function portableTextToHtml(blocks) {
  if (!blocks || !blocks.length) return "";
  return toHTML(blocks, {
    components: {
      types: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        image: ({ value }) => {
          const url = urlFor(value).width(800).url();
          const alt = value.alt || "";
          const caption = value.caption || "";
          return `<figure><img src="${url}" alt="${alt}" loading="lazy" />${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
        }
      }
    }
  });
}
async function fetchBeitraege(opts) {
  const limitClause = opts?.limit ? `[0...${opts.limit}]` : "";
  const query = `*[_type == "beitrag"] | order(veroeffentlichtAm desc)${limitClause} {
    _id, _type, titel, slug, veroeffentlichtAm, kategorie, titelbild, zusammenfassung, autor, tags,
    mannschaft->{ _id, name, slug }
  }`;
  return sanityClient.fetch(query);
}
async function fetchBeitrag(slug) {
  const query = `*[_type == "beitrag" && slug.current == $slug][0] {
    _id, _type, titel, slug, veroeffentlichtAm, kategorie, titelbild, zusammenfassung, inhalt, autor, tags,
    mannschaft->{ _id, name, slug }
  }`;
  return sanityClient.fetch(query, { slug });
}
async function fetchMannschaften() {
  const query = `*[_type == "mannschaft"] | order(reihenfolge asc) {
    _id, _type, name, slug, liga, kategorie, beschreibung, foto, trainer, trainingszeiten,
    halle, kontakt, instagram, handballNetId, reihenfolge
  }`;
  return sanityClient.fetch(query);
}
async function fetchMannschaft(slug) {
  const query = `*[_type == "mannschaft" && slug.current == $slug][0] {
    _id, _type, name, slug, liga, kategorie, beschreibung, foto, trainer, trainingszeiten,
    halle, kontakt, instagram, handballNetId, reihenfolge
  }`;
  return sanityClient.fetch(query, { slug });
}
async function fetchSponsoren(opts) {
  const kategorieFilter = opts?.kategorie ? ` && kategorie == "${opts.kategorie}"` : "";
  const query = `*[_type == "sponsor" && aktiv == true${kategorieFilter}] | order(reihenfolge asc) {
    _id, _type, name, logo, website, kategorie, aktiv, reihenfolge
  }`;
  return sanityClient.fetch(query);
}

export { fetchBeitraege, fetchBeitrag, fetchMannschaft, fetchMannschaften, fetchSponsoren, portableTextToHtml, urlFor };
