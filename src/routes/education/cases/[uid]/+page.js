import { get } from 'svelte/store';
import { locale } from '@stores/language';
import { createClient } from '@utils/prismic';

export const prerender = 'auto';
export const ssr = false;

export const load = async ({ params, fetch, cookies }) => {
    const client = createClient({ fetch, cookies });
    const queryParams = { lang: get(locale) };
    const data = { page: {} };

    try {
        const page = await client.getByUID(
            'EducationCase',
            params.uid,
            queryParams
        );
        data.page = page;
    } catch (e) {
        console.error(e);
    }

    return data;
};

export const entries = async () => {
    const client = createClient();
    const queryParams = {};

    let pages = await client.getAllByType('EducationCase', queryParams);
    pages = pages.map((page) => ({ uid: page.uid }));

    return pages;
};
