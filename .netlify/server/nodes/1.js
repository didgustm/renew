

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.35416659.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.5b7eef27.js","_app/immutable/chunks/stores.3f5af1ec.js","_app/immutable/chunks/singletons.3b9c8d05.js"];
export const stylesheets = [];
export const fonts = [];
