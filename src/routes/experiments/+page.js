import { get } from 'svelte/store';
import { locale } from '@stores/language';
import { createClient } from '@utils/prismic';

export const prerender = 'auto';
export const ssr = false;

export const load = async ({ fetch, cookies }) => {
    const client = createClient({ fetch, cookies });
    const data = { cases: [] };

    const queryParams = {
        lang: get(locale),
        orderings: [
            { field: 'my.ExperimentsCase.ready', direction: 'desc' },
            { field: 'my.ExperimentsCase.date', direction: 'desc' },
        ],
    };

    try {
        let cases = await client.getAllByType('ExperimentsCase', queryParams);
        cases = cases.map((c) => ({ uid: c.uid, ...c.data }));
        data.cases = cases;
    } catch (e) {
        console.error(e);
    }

    return data;
};
