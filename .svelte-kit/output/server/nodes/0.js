import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.133e5668.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.5b7eef27.js","_app/immutable/chunks/index.32e5b9fd.js","_app/immutable/chunks/stores.3f5af1ec.js","_app/immutable/chunks/singletons.3b9c8d05.js"];
export const stylesheets = ["_app/immutable/assets/0.31a44bdf.css"];
export const fonts = ["_app/immutable/assets/Montserrat-vf.9aeb30a5.woff","_app/immutable/assets/Pretendard-vf.db0916f0.woff2"];
