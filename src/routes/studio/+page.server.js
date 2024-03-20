import { get } from 'svelte/store';
import { locale } from '@stores/language';
import { createClient } from '@utils/prismic';

export const prerender = 'auto';
export const ssr = false;
export const csr = true;

export const load = async ({ fetch, cookies }) => {
    const client = createClient({ fetch, cookies });
    const queryParams = {
        lang: get(locale),
        orderings: [
            { field: 'my.odd-studio-cases.priority', direction: 'desc' },
            { field: 'my.odd-studio-cases.date', direction: 'desc' },
        ],
        graphQuery: `{
            odd-studio-cases {
                title
                category
                display_image
                summary
            }
        }`,
    };

    let cases = await client.getAllByType('odd-studio-cases', queryParams);
    cases = cases.map((c) => ({ uid: c.uid, ...c.data }));

    return { cases };
};
