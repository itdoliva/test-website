import { PUBLIC_PRISMIC_REPOSITORY_NAME } from '$env/static/public';
import { get } from 'svelte/store';
import * as prismic from '@prismicio/client';
import { locale } from '@stores/language';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = async ({ params }) => {
	const client = prismic.createClient(PUBLIC_PRISMIC_REPOSITORY_NAME);
	const queryParams = { lang: get(locale) };
	const { uid } = params;

	console.log(queryParams);

	const document = await client.getByUID('odd-studio-cases', uid);
	if (document) {
		const data = { uid: document.uid, tags: document.tags, content: document.data };
		return data;
	}

	error(404, 'Not found');
};
