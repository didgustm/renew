

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4b444e6f.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.e7b2270d.js","_app/immutable/chunks/singletons.6eb63386.js","_app/immutable/chunks/paths.04235f2d.js"];
export const stylesheets = [];
export const fonts = [];
