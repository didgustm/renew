

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.83800174.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.5b7eef27.js","_app/immutable/chunks/stores.a46e84ed.js","_app/immutable/chunks/singletons.e1ffe332.js"];
export const stylesheets = [];
export const fonts = [];
