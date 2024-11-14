import { redirect } from '@sveltejs/kit';
import { PREFFERED_LOCALE, SUPPORTED_LOCALES } from '@utils/constants';

export async function handle({ event, resolve }) {
  const { pathname } = event.url;

  const pattern = new RegExp("^\/(" + SUPPORTED_LOCALES.join("|") + ")(\/|$)")

  const hasLanguagePrefix = pattern.test(pathname)

  // Check if the current route already has a language prefix
  if (!hasLanguagePrefix) {

    // Detect preferred language (or use a default)
    const acceptLanguage = event.request.headers.get('accept-language');
    const preferredLocale = acceptLanguage?.split(',')[0] || PREFFERED_LOCALE;

    // Set default to LOCALE if not supported
    const redirectLocale = SUPPORTED_LOCALES.includes(preferredLocale) ? preferredLocale : PREFFERED_LOCALE;

    // Redirect to the path with the language prefix
    const redirectTo = "/" + redirectLocale + pathname  

    throw redirect(302, redirectTo);
  }

  else {
    event.locals.locale = pathname.split('/')[1]
  }

  return await resolve(event);
}