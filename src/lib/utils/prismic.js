import { PUBLIC_PRISMIC_REPOSITORY_NAME } from '$env/static/public';
import { enableAutoPreviews } from '@prismicio/svelte/kit';
import * as prismic from '@prismicio/client';

const routes = [
    { type: 'StudioCase', path: '/studio/cases/:uid' },
    { type: 'EducationCase', path: '/education/cases/:uid' },
    { type: 'ExperimentsCase', path: '/experiments/cases/:uid' },
];

export const repositoryName = PUBLIC_PRISMIC_REPOSITORY_NAME;

export const createClient = ({ cookies, ...config } = {}) => {
    const client = prismic.createClient(repositoryName, {
        routes,
        ...config,
    });

    enableAutoPreviews({ client, cookies });

    return client;
};
