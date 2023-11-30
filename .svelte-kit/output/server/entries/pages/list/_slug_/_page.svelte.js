import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
const style = "";
const Top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `  <section class="top"><article class="container"><p class="caption ts-up">${escape(data.caption)}</p> <h2 class="title"><div><p>${escape(data.title)}</p></div></h2> <a${add_attribute("href", data.url, 0)} class="url ts-up" target="_blank">${escape(data.url)}</a> <div class="category ts-up"><p>${escape(data.category)}</p> <span data-svelte-h="svelte-1j4g6zq">⋅</span> <p>${escape(data.device)}</p></div></article></section>`;
});
const isabang3 = "/_app/immutable/assets/isabang3_view.3837d08a.webp";
const fasttrack = "/_app/immutable/assets/fasttrack_view.4f3f9a88.webp";
const petfly = "/_app/immutable/assets/petfly_view.79a97290.webp";
const evlabs = "/_app/immutable/assets/evlabs_view.5a287b8a.webp";
const isabang2 = "/_app/immutable/assets/isabang2_view.f642df79.webp";
const blacklabel = "/_app/immutable/assets/blacklabel_view.023041b9.webp";
const alevel = "/_app/immutable/assets/alevel_view.6db03a9f.webp";
const classeum = "/_app/immutable/assets/classeum_view.c136c421.webp";
const goldclass = "/_app/immutable/assets/goldclass_view.ddfe6e82.webp";
const slimcare = "/_app/immutable/assets/slimcare_view.877c3128.webp";
const corevac = "/_app/immutable/assets/corevac_view.2316d6cb.webp";
const fastdealer = "/_app/immutable/assets/fastdealer_view.97796d91.webp";
const fasthunter = "/_app/immutable/assets/fasthunter_view.bea42fc0.webp";
const airclean = "/_app/immutable/assets/airclean_view.7f56f4ff.webp";
const calendar = "/_app/immutable/assets/calendar_view.30b1ef8a.webp";
const todo = "/_app/immutable/assets/todo_view.a076baff.webp";
const chart = "/_app/immutable/assets/chart_view.6af3f10f.webp";
const isabang = "/_app/immutable/assets/isabang_view.9310b79f.webp";
const views = [
  isabang3,
  fasttrack,
  petfly,
  evlabs,
  isabang2,
  blacklabel,
  alevel,
  classeum,
  goldclass,
  slimcare,
  corevac,
  fastdealer,
  fasthunter,
  airclean,
  calendar,
  todo,
  chart,
  isabang
];
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const title = data.currentRoute.slice(6);
  let num = views.filter((x, index) => {
    if (x.indexOf(title) !== -1) {
      return index;
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `  <section class="section view"><div class="area"><div class="container"><div class="view_img"><img${add_attribute("src", num[0], 0)} alt=""></div></div></div></section>`;
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
