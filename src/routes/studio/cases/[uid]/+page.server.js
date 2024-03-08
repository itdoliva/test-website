import { createClient } from '@utils/prismic';

export const prerender = false;

export const load = async ({ params, fetch, cookies }) => {
    const client = createClient({ fetch, cookies });
    const page = await client.getByUID('odd-studio-cases', params.uid);

    return { page };
};
