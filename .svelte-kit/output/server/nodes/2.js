import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.1a4e8c3e.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.4e1a926f.js","_app/immutable/chunks/globals.7f7f1b26.js"];
export const stylesheets = ["_app/immutable/assets/2.2a6c88db.css"];
export const fonts = [];