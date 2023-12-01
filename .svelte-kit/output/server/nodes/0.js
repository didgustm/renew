import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.dbe0e384.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.4e1a926f.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/stores.25222f80.js","_app/immutable/chunks/singletons.9b8b730c.js"];
export const stylesheets = ["_app/immutable/assets/0.2a5bc55b.css"];
export const fonts = ["_app/immutable/assets/Montserrat-vf.9aeb30a5.woff","_app/immutable/assets/Pretendard-vf.db0916f0.woff2"];
