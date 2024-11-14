import { register } from 'svelte-i18n';

register('en-us', () => import('./en.json'));
register('pt-br', () => import('./pt.json'));
