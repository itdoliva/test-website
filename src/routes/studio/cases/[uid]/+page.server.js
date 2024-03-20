import { get } from 'svelte/store';
import { locale } from '@stores/language';
import { createClient } from '@utils/prismic';

export const prerender = 'auto';
export const ssr = false;
export const csr = true;

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
