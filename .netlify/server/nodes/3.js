import * as universal from '../entries/pages/list/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/list/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/list/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.18f50da9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.e7b2270d.js"];
export const stylesheets = [];
export const fonts = [];
