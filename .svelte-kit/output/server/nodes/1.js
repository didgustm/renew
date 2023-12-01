

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.745bbf39.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.4e1a926f.js","_app/immutable/chunks/stores.07595ae0.js","_app/immutable/chunks/singletons.870294bf.js"];
export const stylesheets = [];
export const fonts = [];
