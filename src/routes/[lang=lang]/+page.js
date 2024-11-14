import { get } from 'svelte/store';
import { locale } from 'svelte-i18n';
import { createClient } from '@utils/prismic';

export const prerender = 'auto';
export const ssr = false;

const getQueryParams = (documentType) => {
    const queryParams = {
        lang: get(locale),
        orderings: [
            { field: `my.${documentType}.ready`, direction: 'desc' },
            { field: `my.${documentType}.priority`, direction: 'desc' },
            { field: `my.${documentType}.date`, direction: 'desc' },
        ],
    };

    return queryParams;
};

const getCases = async (client, documentType) => {
    let cases = await client.getAllByType(
        documentType,
        getQueryParams(documentType)
    );

    return cases.map((c) => ({ uid: c.uid, ...c.data })).slice(0, 5);
};

export const load = async ({ fetch, cookies }) => {
    console.log('wont it load?')
    console.log('locals', console.log(get(locale)))

    const client = createClient({ fetch, cookies });
    const data = { cases: { studio: [], education: [], experiments: [] } };
    const branches = [
        { name: 'studio', documentType: 'StudioCase' },
        { name: 'education', documentType: 'EducationCase' },
        { name: 'experiments', documentType: 'ExperimentsCase' },
    ];

    try {
        for (const branch of branches)
            data.cases[branch.name] = await getCases(
                client,
                branch.documentType
            );
    } catch (e) {
        console.error(e);
    }

    return data;
};
