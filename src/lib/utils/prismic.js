import { PUBLIC_PRISMIC_REPOSITORY_NAME } from '$env/static/public';
import { enableAutoPreviews } from '@prismicio/svelte/kit';
import * as prismic from '@prismicio/client';

const routes = [
    { type: 'StudioCase', path: '/:lang/studio/cases/:uid' },
    { type: 'EducationCase', path: '/:lang/education/cases/:uid' },
    { type: 'ExperimentsCase', path: '/:lang/experiments/cases/:uid' },
];


export const createClient = ({ cookies, ...config } = {}) => {
    const options = {
        routes,
        ...config,
    };
    
    const client = prismic.createClient(PUBLIC_PRISMIC_REPOSITORY_NAME, options);

    enableAutoPreviews({ client, cookies });

    return client;
};
