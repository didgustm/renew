

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b20289ff.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.5b7eef27.js","_app/immutable/chunks/stores.3073f141.js","_app/immutable/chunks/singletons.1b0ca554.js"];
export const stylesheets = [];
export const fonts = [];
