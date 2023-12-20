import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.422fd6dd.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.5b7eef27.js","_app/immutable/chunks/index.32e5b9fd.js","_app/immutable/chunks/stores.5f4cde04.js","_app/immutable/chunks/singletons.3e68a8c0.js"];
export const stylesheets = ["_app/immutable/assets/0.d7229d80.css"];
export const fonts = ["_app/immutable/assets/Montserrat-vf.9aeb30a5.woff","_app/immutable/assets/Pretendard-vf.db0916f0.woff2"];
