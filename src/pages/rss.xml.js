import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get(){
    return rss({
        title: 'Apprentissage Astro | Blog',
        description: 'Ma journée d&#039apprentissage d&#039Astro',
        site: 'https://test-astro-1.netlify.app/',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>fr-us-en</language>`,
    })
}






