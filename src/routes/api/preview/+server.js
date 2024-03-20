import { redirectToPreviewURL } from '@prismicio/svelte/kit';
import { createClient } from '@utils/prismic';

export async function GET({ fetch, request, cookies }) {
    const client = createClient({ fetch });

    return await redirectToPreviewURL({ client, request, cookies });
}
