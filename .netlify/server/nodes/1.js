

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cec4d2c1.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.5b7eef27.js","_app/immutable/chunks/stores.123af38e.js","_app/immutable/chunks/singletons.c8ffabf0.js"];
export const stylesheets = [];
export const fonts = [];
