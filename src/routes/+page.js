import { get } from 'svelte/store';
import { locale } from '@stores/language';
import { createClient } from '@utils/prismic';

export const prerender = 'auto';
export const ssr = false;

const getQueryParams = (documentType) => {
    const queryParams = {
        lang: get(locale),
        orderings: [
            { field: `my.${documentType}.priority`, direction: 'desc' },
            { field: `my.${documentType}.date`, direction: 'desc' },
        ],
    };

    return queryParams;
};

export const load = async ({ fetch, cookies }) => {
    const client = createClient({ fetch, cookies });
    const data = { cases: { studio: [], education: [], experiments: [] } };

    try {
        let studioCases = await client.getAllByType(
            'odd-studio-cases',
            getQueryParams('odd-studio-cases')
        );

        let educationCases = await client.getAllByType(
            'odd-studio-cases',
            getQueryParams('odd-studio-cases')
        );

        let experimentsCases = await client.getAllByType(
            'odd-studio-cases',
            getQueryParams('odd-studio-cases')
        );

        data.cases.studio = studioCases
            .map((c) => ({ uid: c.uid, ...c.data }))
            .slice(0, 5);

        data.cases.education = educationCases
            .map((c) => ({ uid: c.uid, ...c.data }))
            .slice(0, 5);

        data.cases.experiments = experimentsCases
            .map((c) => ({ uid: c.uid, ...c.data }))
            .slice(0, 5);
    } catch (e) {
        console.error(e);
    }

    return data;
};
