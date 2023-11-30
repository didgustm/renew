

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a5c22186.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.4e1a926f.js","_app/immutable/chunks/stores.62a875e7.js","_app/immutable/chunks/singletons.21f2c1bb.js"];
export const stylesheets = [];
export const fonts = [];
