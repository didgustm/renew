import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.21f33de5.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.e7b2270d.js","_app/immutable/chunks/paths.04235f2d.js"];
export const stylesheets = ["_app/immutable/assets/common.26b56b09.css"];
export const fonts = ["_app/immutable/assets/Montserrat-vf.9aeb30a5.woff","_app/immutable/assets/Pretendard-vf.db0916f0.woff2"];
