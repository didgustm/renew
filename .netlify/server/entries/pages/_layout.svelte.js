import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
/* empty css                   */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let app;
  window.matchMedia("(pointer:coarse)").matches;
  return `  ${$$result.head += `<!-- HEAD_svelte-wdlemp_START -->${$$result.title = `<title>Portfolio</title>`, ""}<!-- HEAD_svelte-wdlemp_END -->`, ""}  <div id="app"${add_attribute("this", app, 0)}><main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
