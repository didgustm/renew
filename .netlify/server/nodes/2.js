import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.23623f2f.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.e7b2270d.js"];
export const stylesheets = ["_app/immutable/assets/2.02acf28e.css","_app/immutable/assets/common.26b56b09.css"];
export const fonts = ["_app/immutable/assets/Montserrat-vf.9aeb30a5.woff","_app/immutable/assets/Pretendard-vf.db0916f0.woff2"];
