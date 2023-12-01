

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e23fb7b6.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.4e1a926f.js","_app/immutable/chunks/stores.25222f80.js","_app/immutable/chunks/singletons.9b8b730c.js"];
export const stylesheets = [];
export const fonts = [];
