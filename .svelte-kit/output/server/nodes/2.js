import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.5653ea00.js","_app/immutable/chunks/scheduler.b160212f.js","_app/immutable/chunks/index.be747948.js","_app/immutable/chunks/index.32e5b9fd.js"];
export const stylesheets = ["_app/immutable/assets/2.7f0aa3b0.css"];
export const fonts = [];
