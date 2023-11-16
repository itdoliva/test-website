import { PUBLIC_PRISMIC_REPOSITORY_NAME } from '$env/static/public';

import * as prismic from '@prismicio/client';

export const prerender = true;

export const load = async () => {
	const client = prismic.createClient(PUBLIC_PRISMIC_REPOSITORY_NAME);
	const content = await client.getFirst();

	return { content };
};
