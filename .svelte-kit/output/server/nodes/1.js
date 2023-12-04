

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.214cfe28.js","_app/immutable/chunks/scheduler.b160212f.js","_app/immutable/chunks/index.be747948.js","_app/immutable/chunks/stores.ea9adf0d.js","_app/immutable/chunks/singletons.06b582be.js"];
export const stylesheets = [];
export const fonts = [];
