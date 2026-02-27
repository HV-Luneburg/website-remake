## HOMEPAGE

# general

please make sure, that every title / subtitle has enough contrast: grey title on black contract does not work.
Please use more whitespace (white for light version), do not use so much dark colors with fill - clean 70/20/10 rule (hero is good with this color)
-> light mode: 70: white
-> dark mode: can be black, but not 000000

i dont like the blue so much, remove it from the whole pages

make sure, that there is a toggle for light and dark mode,

please write a central file, where I can "plug" in all data sources for e.g. live ticker, next event etc,.

make sure everything is mobile first

    # rule to have in mind:
    sanity headless cms:

    defining a schema:
    import {defineField, defineType} from 'sanity'

export const postType = defineType({
name: 'post',
title: 'Post',
type: 'document',
fields: [
defineField({
name: 'title',
type: 'string',
validation: (rule) => rule.required(),
}),
defineField({
name: 'slug',
type: 'slug',
options: {source: 'title'},
validation: (rule) => rule.required(),
}),
defineField({
name: 'publishedAt',
type: 'datetime',
initialValue: () => new Date().toISOString(),
validation: (rule) => rule.required(),
}),
defineField({
name: 'image',
type: 'image',
}),
defineField({
name: 'body',
type: 'array',
of: [{type: 'block'}],
}),
],
})
https://www.sanity.io/docs/astro-quickstart/defining-a-schema#k6866e901a6a9
https://www.sanity.io/docs/astro-quickstart/defining-a-schema#fff121a9f0c9

do the sanity wiring with the HVL/studio-hv-lueneburg in second step but keep in mind, that i want every data to be stored here (im überordner von hv-lueneburg)

very important: https://github.com/sanity-io/sanity-astro

# spielplan

<div class="handball-wrapper"> <div id="hb-vereins-spielplan"><div class="hb-embed"><div class="hb-embed__title-container"><h2 class="hb-embed__title">Handballverein Lüneburg</h2><a href="https://www.handball.net?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer"><img src="data:image/svg+xml,%3csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient x1='0%25' y1='100%25' x2='98.948%25' y2='0%25' id='linearGradient-1'%3e%3cstop stop-color='%23DC5E38' offset='0%25'/%3e%3cstop stop-color='%23D64625' offset='46.809%25'/%3e%3cstop stop-color='%23BC270D' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg id='HandballnetLogo' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='Group-8'%3e%3crect id='Rectangle' fill='url(%23linearGradient-1)' x='0' y='0' width='150' height='150' rx='16.544'/%3e%3cpath d='M58.276 25.878v36.217H88V25.878h30.698v4.453h-.132c-8.528 0-15.441 6.913-15.441 15.441s6.913 15.441 15.441 15.441l.132-.001v63.307H87.01V88.937H58.276v35.582h-9.097c-12.061 0-21.861-9.68-22.056-21.694l-.003-.365V25.878h31.156zm60.29 8.865c6.092 0 11.03 4.938 11.03 11.03 0 6.09-4.938 11.028-11.03 11.028-6.091 0-11.03-4.938-11.03-11.029s4.939-11.03 11.03-11.03z' id='Combined-Shape' fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="handball.net" class="hb-embed__title-logo"></a></div><div class="hb-embed__schedule"><div class="hb-embed__schedule-list"><div class="hb-embed__schedule-list-grouped-item"><p class="hb-embed__schedule-list-item-date">Samstag, 28.2.2026</p><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165564/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">HR Lüneburg-Stade - Regionsoberliga männliche Jugend B (HR Lüneburg-Stade 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165564/spielplan/spieltage/nuliga.hvn.432454.15-runde/spiele/nuliga.hvn.8023151?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/c805ff7c-6bb0-4c50-8565-e78bab5d63e1.png" alt="Logo HSG Seevetal/Ashausen II"></span><span class="hb-embed__schedule-list-item-team-name">HSG Seevetal/Ashausen II</span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg II"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg II</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">10:30 Uhr</div></div></a></div></div><div class="hb-embed__schedule-list-grouped-item"><p class="hb-embed__schedule-list-item-date">Samstag, 28.2.2026</p><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165639/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">HR Lüneburg-Stade - Regionsoberliga männliche Jugend D (HR Lüneburg-Stade 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165639/spielplan/spieltage/nuliga.hvn.432692.6-runde/spiele/nuliga.hvn.8169810?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/c729062e-8cde-48db-9e36-0efe0ed16e30.jpeg" alt="Logo HSG Heidmark"></span><span class="hb-embed__schedule-list-item-team-name">HSG Heidmark</span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">15:30 Uhr</div></div></a></div></div><div class="hb-embed__schedule-list-grouped-item"><p class="hb-embed__schedule-list-item-date">Samstag, 28.2.2026</p><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165516/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">Niedersachsen - Oberliga Frauen (HVNB 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165516/spielplan/spieltage/nuliga.hvn.432376.16-runde/spiele/nuliga.hvn.7979205?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg</span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/b877f4e7-c17e-4106-9dce-a19011b207c4.jpeg" alt="Logo MTV Eyendorf"></span><span class="hb-embed__schedule-list-item-team-name">MTV Eyendorf</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">17:00 Uhr</div></div></a></div></div><div class="hb-embed__schedule-list-grouped-item"><p class="hb-embed__schedule-list-item-date">Samstag, 28.2.2026</p><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165714/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">Niedersachsen - Verbandsliga Männer (HVNB 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165714/spielplan/spieltage/nuliga.hvn.431976.16-runde/spiele/nuliga.hvn.7978807?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg</span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/b877f4e7-c17e-4106-9dce-a19011b207c4.jpeg" alt="Logo MTV Eyendorf"></span><span class="hb-embed__schedule-list-item-team-name">MTV Eyendorf</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">19:30 Uhr</div></div></a></div></div><div class="hb-embed__schedule-list-grouped-item"><p class="hb-embed__schedule-list-item-date">Sonntag, 1.3.2026</p><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165702/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">HR Lüneburg-Stade - Regionsoberliga männliche Jugend E (HR Lüneburg-Stade 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165702/spielplan/spieltage/nuliga.hvn.474235.13-runde/spiele/nuliga.hvn.8168806?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/c77e7eb4-fa00-4fa1-abdc-15c4a4a0dd86.jpeg" alt="Logo MTV Dannenberg gem. "></span><span class="hb-embed__schedule-list-item-team-name">MTV Dannenberg gem. </span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg II"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg II</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">11:00 Uhr</div></div></a></div></div><div class="hb-embed__schedule-list-grouped-item"><p class="hb-embed__schedule-list-item-date">Sonntag, 1.3.2026</p><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165639/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">HR Lüneburg-Stade - Regionsoberliga männliche Jugend D (HR Lüneburg-Stade 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165639/spielplan/spieltage/nuliga.hvn.474336.10-runde/spiele/nuliga.hvn.8169602?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg II"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg II</span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/2e25314c-f90c-456c-aeb2-d5016b019876.jpeg" alt="Logo TSV Bardowick"></span><span class="hb-embed__schedule-list-item-team-name">TSV Bardowick</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">11:15 Uhr</div></div></a></div></div><div class="hb-embed__schedule-list-grouped-item"><p class="hb-embed__schedule-list-item-date">Sonntag, 1.3.2026</p><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165577/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">HR Lüneburg-Stade - Regionsliga  Männer (HR Lüneburg-Stade 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165577/spielplan/spieltage/nuliga.hvn.443806.14-runde/spiele/nuliga.hvn.8011267?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg IV"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg IV</span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/c1bec80a-1b61-4622-9b9a-5a422b2de8f3.png" alt="Logo TV Uelzen III"></span><span class="hb-embed__schedule-list-item-team-name">TV Uelzen III</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">13:00 Uhr</div></div></a></div></div><div class="hb-embed__schedule-list-grouped-item"><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165574/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">HR Lüneburg-Stade - Landesliga männliche Jugend A (HR Lüneburg-Stade 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165574/spielplan/spieltage/nuliga.hvn.432110.15-runde/spiele/nuliga.hvn.8012088?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/1d40c945-4f47-460b-ba22-89c0a65bbd2b.jpeg" alt="Logo mJSG Buxtehude/ Beckdorf II"></span><span class="hb-embed__schedule-list-item-team-name">mJSG Buxtehude/ Beckdorf II</span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">13:00 Uhr</div></div></a></div></div><div class="hb-embed__schedule-list-grouped-item"><p class="hb-embed__schedule-list-item-date">Sonntag, 1.3.2026</p><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165697/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">HR Lüneburg-Stade - Landesliga männliche Jugend B (HR Lüneburg-Stade 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165697/spielplan/spieltage/nuliga.hvn.432633.15-runde/spiele/nuliga.hvn.8023283?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg</span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/c729062e-8cde-48db-9e36-0efe0ed16e30.jpeg" alt="Logo HSG Heidmark"></span><span class="hb-embed__schedule-list-item-team-name">HSG Heidmark</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">15:00 Uhr</div></div></a></div></div><div class="hb-embed__schedule-list-grouped-item"><p class="hb-embed__schedule-list-item-date">Sonntag, 1.3.2026</p><div class="hb-embed__schedule-list-item"><a href="https://www.handball.net/ligen/nuliga.hvn.165498/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">HR Lüneburg-Stade - Regionsoberliga  Männer (HR Lüneburg-Stade 2025/26)</a><a href="https://www.handball.net/ligen/nuliga.hvn.165498/spielplan/spieltage/nuliga.hvn.432335.16-runde/spiele/nuliga.hvn.8011006?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" class="hb-embed__schedule-list-item-content " target="_blank" rel="noopener noreferrer"><div class="hb-embed__schedule-list-item-teams"><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/3532a92e-0cad-4fec-8a09-c17a9b2af6a6.jpeg" alt="Logo Handballverein Lüneburg II"></span><span class="hb-embed__schedule-list-item-team-name">Handballverein Lüneburg II</span></div><div class="hb-embed__schedule-list-item-team"><span class="hb-embed__schedule-list-item-team-logo-wrapper"><img class="hb-embed__schedule-list-item-team-logo" src="https://www.handball.net/files/clubs/logos/9863021f-e53d-42ae-b1d0-32b10249f671.png" alt="Logo VfL Westercelle"></span><span class="hb-embed__schedule-list-item-team-name">VfL Westercelle</span></div></div><div class="hb-embed__schedule-list-item-starts-at"><div class="hb-embed__schedule-list-item-starts-at-time">17:00 Uhr</div></div></a></div></div></div></div><div class="hb-embed__btn-box"><a class="hb-embed__btn hb-embed__btn-primary" href="https://www.handball.net/vereine/nuliga.hvn.681/spielplan?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer">zum gesamten Spielplan</a></div><div class="hb-embed__branding">powered by<a href="https://www.handball.net?utm_source=nuliga.hvn.681&amp;utm_medium=spielplan_verein&amp;utm_campaign=widget" target="_blank" rel="noopener noreferrer"><img src="data:image/svg+xml,%3csvg width='466' height='49' viewBox='0 0 466 49' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23D03419' fill-rule='nonzero'%3e%3cpath d='m79.017 30.428-4.364-13.34-4.364 13.34h8.728ZM82.72 41.74H66.586L64.206 49H48.27L65.99 1.065h17.523L101.168 49H85.166l-2.446-7.259ZM151.091 49h-15.208l-16.134-24.131V49h-15.142V1.065h15.142l16.134 24.458V1.065h15.208zM184.88 32.782c1.984-1.831 3.042-4.512 3.042-7.913 0-3.4-.992-6.082-3.042-7.913-1.984-1.83-4.695-2.746-8.133-2.746h-3.637v21.384h3.637c3.438 0 6.15-.98 8.133-2.812m6.546-28.708c3.835 2.027 6.745 4.839 8.795 8.436 2.05 3.596 3.107 7.716 3.107 12.294 0 4.577-.992 8.632-3.107 12.294-2.116 3.662-4.96 6.54-8.795 8.632-3.835 2.093-8.265 3.14-13.29 3.14h-20.168V1h20.167c5.026.065 9.456 1.046 13.291 3.074M233.943 36.117c.662-.523.992-1.373.992-2.55 0-2.29-1.322-3.466-4.033-3.466h-6.943v6.8h6.943c1.388 0 2.38-.26 3.041-.784m-9.984-16.414h5.885c1.388 0 2.38-.262 3.041-.785.662-.523.992-1.373.992-2.485 0-1.177-.33-2.027-.992-2.616-.66-.588-1.653-.85-3.041-.85h-5.885v6.736Zm24.068 8.828c1.654 2.093 2.447 4.513 2.447 7.26 0 4.184-1.389 7.454-4.232 9.743-2.777 2.289-6.81 3.4-12.1 3.4H208.75V1.066h24.73c4.96 0 8.795 1.047 11.638 3.205 2.843 2.092 4.232 5.231 4.232 9.286 0 2.812-.727 5.166-2.248 7.063-1.521 1.896-3.439 3.204-5.951 3.858 2.975.588 5.29 1.962 6.876 4.054M283.007 30.428l-4.365-13.34-4.364 13.34h8.729Zm3.702 11.313h-16.134L268.195 49h-16.002l17.721-47.935h17.523L305.092 49H289.09l-2.38-7.259ZM323.738 37.621h14.614V49H308.53V1.065h15.208zM358.387 37.621V17.283c-3.77 0-6.81-3.008-6.81-6.735 0-3.728 3.04-6.736 6.81-6.736V1.065h-15.208V49H373V37.621h-14.613Z'/%3e%3cg%3e%3cpath d='M29.69 1.065v17.592H15.207V1.065H0V38.21C0 44.16 4.893 49 10.91 49h4.298V31.409h14.415V49h15.208V1.065H29.69ZM358.32 5.512c-2.843 0-5.157 2.29-5.157 5.101 0 2.812 2.314 5.1 5.158 5.1 2.843 0 5.157-2.288 5.157-5.1s-2.314-5.1-5.157-5.1Z'/%3e%3c/g%3e%3cpath d='M380.43 49c.687 0 1.267-.244 1.74-.731.474-.488.711-1.09.711-1.804 0-.715-.237-1.309-.71-1.78-.474-.471-1.054-.707-1.74-.707-.719 0-1.315.236-1.789.707s-.71 1.065-.71 1.78c0 .715.236 1.316.71 1.804.474.487 1.07.731 1.789.731Zm11.404-.244V20.088L410.8 48.756h3.43v-34.08h-3.43v28.62l-18.966-28.62h-3.43v34.08h3.43Zm47.718 0v-2.828h-14.458v-12.92h12.987V30.18h-12.987V17.455h14.458v-2.828h-17.888v34.13h17.888Zm16.94 0V17.503H466v-2.827h-22.494v2.827h9.556v31.253h3.43Z'/%3e%3c/g%3e%3c/svg%3e" alt="handball.net" class="hb-embed__branding-logo"></a></div></div></div> </div>

card needs to be white

# partners

logos bigger and scrolling automatically

# nav

make sure that the burger menu appears on mobile and that its design is sleek
there is a doubled background of the nav, on the top only one background, but when scrolling down, a second overlays weirdly

# hero

fix the positioning of the "next game" card to be at the rigth lower corner
the text moves too fast
Handball in the hero title should be highlighted visually

# news section

<article class="col-span-1 md:col-span-2 lg:col-span-1 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all relative group flex flex-col"> <div class="h-48 grid grid-cols-2 grid-rows-2 gap-[2px] bg-white dark:bg-slate-900"> <div class="col-span-2 row-span-1 overflow-hidden"> <img src="https://images.unsplash.com/photo-1574629810360-7efbb6b69281?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt="Gallery preview"> </div> <div class="overflow-hidden"> <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt="Gallery preview"> </div> <div class="overflow-hidden bg-gray-100 dark:bg-slate-800 flex items-center justify-center relative"> <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" class="absolute inset-0 object-cover w-full h-full opacity-30 mix-blend-multiply dark:mix-blend-screen"> <span class="z-10 font-black text-gray-900 dark:text-white text-xl">+3</span> </div> </div> <div class="p-6 flex flex-col flex-1"> <div class="flex items-center gap-2 mb-3"> <svg width="1em" height="1em" class="w-4 h-4 text-gray-400" data-icon="tabler:camera">   <symbol id="ai:tabler:camera" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 7h1a2 2 0 0 0 2-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"></path><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></path></g></symbol><use href="#ai:tabler:camera"></use>  </svg> <span class="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest px-1">Einblicke</span> </div> <h3 class="text-xl font-heading font-black text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors"> <a href="/blog/galerie-auftakt" class="hover:underline">Saisonauftakt 2026</a> </h3> </div> <a href="/blog/galerie-auftakt" class="absolute inset-0 z-20"><span class="sr-only">Galerie ansehen</span></a> </article>

rethink this whole part. looks terrible, not mobile conform and very bad UX

# numbers

<div class="relative px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade max-w-6xl mx-auto dark">  <div class="text-center mb-12"> <div class="section-header section-header--center mb-8 md:mb-12"><span class="heading-eyebrow">In Zahlen</span><h2 class="section-title intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade text-3xl md:text-5xl font-black font-heading tracking-tight uppercase mb-4 text-white" data-animated="true" style="transition-delay: 0ms; animation-delay: 0ms;">HV Lüneburg</h2><p class="subheading mt-4 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" data-animated="true" style="transition-delay: 100ms; animation-delay: 100ms;">Seit 1946 fester Bestandteil des Lüneburger Sports.</p></div> </div> <div class="grid grid-2 sm:grid-cols-2 lg:grid-cols-4 gap-0 intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));"> <div class="card card--stat" style="
          border-radius: 0;
          border-radius: var(--radius-lg) 0 0 var(--radius-lg);
          
        "> <svg width="1em" height="1em" class="w-10 h-10 mb-4 mx-auto" style="color: rgba(255,255,255,0.6);" data-icon="tabler:users">   <symbol id="ai:tabler:users" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"></path></symbol><use href="#ai:tabler:users"></use>  </svg> <div class="stat-number">250+</div> <div class="stat-label">Mitglieder</div> </div><div class="card card--stat" style="
          border-radius: 0;
          
          
        "> <svg width="1em" height="1em" class="w-10 h-10 mb-4 mx-auto" style="color: rgba(255,255,255,0.6);" data-icon="tabler:ball-tennis">   <symbol id="ai:tabler:ball-tennis" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path><path d="M6 5.3a9 9 0 0 1 0 13.4M18 5.3a9 9 0 0 0 0 13.4"></path></g></symbol><use href="#ai:tabler:ball-tennis"></use>  </svg> <div class="stat-number">17</div> <div class="stat-label">Mannschaften</div> </div><div class="card card--stat" style="
          border-radius: 0;
          
          
        "> <svg width="1em" height="1em" viewBox="0 0 24 24" class="w-10 h-10 mb-4 mx-auto" style="color: rgba(255,255,255,0.6);" data-icon="tabler:calendar">   <use href="#ai:tabler:calendar"></use>  </svg> <div class="stat-number">79+</div> <div class="stat-label">Jahre</div> </div><div class="card card--stat" style="
          border-radius: 0;
          
          border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
        "> <svg width="1em" height="1em" class="w-10 h-10 mb-4 mx-auto" style="color: rgba(255,255,255,0.6);" data-icon="tabler:trophy">   <symbol id="ai:tabler:trophy" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8m-4-4v4M7 4h10m0 0v8a5 5 0 0 1-10 0V4M3 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path></symbol><use href="#ai:tabler:trophy"></use>  </svg> <div class="stat-number">100+</div> <div class="stat-label">Spiele / Saison</div> </div> </div>  </div>

        find an way of oprimzing this part for mobile with the rounded corners dos not work

# unsere teams

cards minimalistic und white:
You are given a task to integrate an existing React component in the codebase

The codebase should support:

- shadcn project structure
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:

```tsx
card-22.tsx
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Interface for component props for type safety and reusability
interface PlaceCardProps {
  images: string[];
  tags: string[];
  rating: number;
  title: string;
  dateRange: string;
  hostType: string;
  isTopRated?: boolean;
  description: string;
  pricePerNight: number;
  className?: string;
}

export const PlaceCard = ({
  images,
  tags,
  rating,
  title,
  dateRange,
  hostType,
  isTopRated = false,
  description,
  pricePerNight,
  className,
}: PlaceCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Carousel image change handler
  const changeImage = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return images.length - 1;
      if (nextIndex >= images.length) return 0;
      return nextIndex;
    });
  };

  // Animation variants for the carousel
  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Animation variants for staggering content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      variants={contentVariants}
      // --- NEW: Added hover animation ---
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 10px 30px -5px hsl(var(--foreground) / 0.1)',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      // --- END NEW ---
      className={cn(
        'w-full max-w-sm overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg cursor-pointer',
        className
      )}
    >
      {/* Image Carousel Section */}
      <div className="relative group h-64">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={title}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Carousel Navigation */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" className="rounded-full bg-black/30 hover:bg-black/50 text-white" onClick={() => changeImage(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-black/30 hover:bg-black/50 text-white" onClick={() => changeImage(1)}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Top Badges and Rating */}
        <div className="absolute top-3 left-3 flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-background/70 backdrop-blur-sm">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="flex items-center gap-1 bg-background/70 backdrop-blur-sm">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /> {rating}
          </Badge>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-all',
                currentIndex === index ? 'w-4 bg-white' : 'bg-white/50'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <motion.div variants={contentVariants} className="p-5 space-y-4">
        <motion.div variants={itemVariants} className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{title}</h3>
          {isTopRated && <Badge variant="outline">Top rated</Badge>}
        </motion.div>

        <motion.div variants={itemVariants} className="text-m text-muted-foreground">
          <span>{dateRange}</span> &bull; <span>{hostType}</span>
        </motion.div>

        <motion.p variants={itemVariants} className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-between items-center pt-2">
          <p className="font-semibold">
            ${pricePerNight}{' '}
            <span className="text-sm font-normal text-muted-foreground">/ night</span>
          </p>
          <Button className="group">
            Book Now
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

demo.tsx
import { PlaceCard } from '@/components/ui/card-22';

// Sample data to be passed as props
const demoPlaceData = {
  images: [
    'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596622247990-84877175438a?q=80&w=2864&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=2940&auto=format&fit=crop',
  ],
  tags: ['Adventure', 'Ancient Monuments'],
  rating: 4.8,
  title: 'Petra, Jordan',
  dateRange: 'May 1 - 6',
  hostType: 'Business host',
  isTopRated: true,
  description: 'A lost city carved in rose-colored stone, hidden in majestic desert canyons.',
  pricePerNight: 139,
};

const PlaceCardDemo = () => {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center bg-background p-4">
      <PlaceCard
        images={demoPlaceData.images}
        tags={demoPlaceData.tags}
        rating={demoPlaceData.rating}
        title={demoPlaceData.title}
        dateRange={demoPlaceData.dateRange}
        hostType={demoPlaceData.hostType}
        isTopRated={demoPlaceData.isTopRated}
        description={demoPlaceData.description}
        pricePerNight={demoPlaceData.pricePerNight}
      />
    </div>
  );
};

export default PlaceCardDemo;
```

Copy-paste these files for dependencies:

```tsx
originui / badge;
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
```

```tsx
shadcn / button;
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

Install NPM dependencies:

```bash
lucide-react, framer-motion, class-variance-authority, @radix-ui/react-slot
```

Implementation Guidelines

1.  Analyze the component structure and identify all required dependencies
2.  Review the component's argumens and state
3.  Identify any required context providers or hooks and install them
4.  Questions to Ask

- What data/props will be passed to this component?
- Are there any specific state management requirements?
- Are there any required assets (images, icons, etc.)?
- What is the expected responsive behavior?
- What is the best place to use this component in the app?

Steps to integrate 0. Copy paste all the code above in the correct directories

1.  Install external dependencies
2.  Fill image assets with Unsplash stock images you know exist
3.  Use lucide-react icons for svgs or logos if component requires them

# mannschafts page

looks terrible

use the card design from above

# sponsoren page

hirachie: change exiting sposnores to be at the top and becoming sponsore below

# contact form

dont be blue,

light mode white,
dark mode, different than how it is done now

# footer

fix footer on mobile

# team page

remove instagram and move instagram to the team detail page as every team as its own instagram

# team detail page

make it looking less like a "slug"
