import { get } from 'svelte/store';
import { locale } from '@stores/language';
import { createClient } from '@utils/prismic';

export const prerender = 'auto';
export const ssr = false;

export const load = async ({ params, fetch, cookies }) => {
    const client = createClient({ fetch, cookies });
    const queryParams = { lang: get(locale) };

    const page = await client.getByUID(
        'odd-studio-cases',
        params.uid,
        queryParams
    );

    return { page };
};

export const entries = async () => {
    const client = createClient();
    const queryParams = {
        graphQuery: `{
            odd-studio-cases {
                title
            }
        }`,
    };

    let pages = await client.getAllByType('odd-studio-cases', queryParams);
    pages = pages.map((page) => ({ uid: page.uid }));

    return pages;
};
