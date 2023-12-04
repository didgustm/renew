import * as universal from '../entries/pages/list/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/list/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/list/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.e1f16a99.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.b160212f.js","_app/immutable/chunks/index.be747948.js"];
export const stylesheets = ["_app/immutable/assets/3.1a35df07.css"];
export const fonts = [];
