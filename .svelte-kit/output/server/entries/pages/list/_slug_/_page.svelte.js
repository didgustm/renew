import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
const style = "";
const Top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `  <section class="top"><article class="container"><p class="caption ts-up">${escape(data.caption)}</p> <h2 class="title"><div><p>${escape(data.title)}</p></div></h2> <a${add_attribute("href", data.url, 0)} class="url ts-up" target="_blank">${escape(data.url)}</a> <div class="category ts-up"><p>${escape(data.category)}</p> <span data-svelte-h="svelte-1j4g6zq">⋅</span> <p>${escape(data.device)}</p></div></article></section>`;
});
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `  <section class="section view"><div class="area"><div class="container"><div class="view_img"><img${add_attribute("src", data.view, 0)} alt=""></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `  ${validate_component(Top, "Top").$$render($$result, { data }, {}, {})} ${validate_component(View, "View").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
