import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
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
const chart = "/_app/immutable/assets/chart_view.6af3f10f.webp";
const isabang = "/_app/immutable/assets/isabang_view.9310b79f.webp";
const jejuchanga = "/_app/immutable/assets/jejuchanga_view.52d411ae.webp";
const stake = "/_app/immutable/assets/stake_view.0927ddfa.webp";
const lotto = "/_app/immutable/assets/lotto_view.994e5b35.webp";
const flowercake = "/_app/immutable/assets/flowercake_view.21487a2b.webp";
const calendar = "/_app/immutable/assets/calendar_view.30b1ef8a.webp";
const todo = "/_app/immutable/assets/todo_view.a076baff.webp";
const afly = "/_app/immutable/assets/afly_view.b62f53a5.webp";
const bjp = "/_app/immutable/assets/bjp_view.111c0642.webp";
const finco = "/_app/immutable/assets/finco_view.3fa75a11.webp";
const fullpage = "/_app/immutable/assets/fullpage_view.f4851309.webp";
const license = "/_app/immutable/assets/license_view.d36cdfba.webp";
const jamong = "/_app/immutable/assets/jamong_view.37863c50.webp";
const playup = "/_app/immutable/assets/playup_view.f52603d6.webp";
const pyeongtaek = "/_app/immutable/assets/pyeongtaek_view.9280895f.webp";
const sort = "/_app/immutable/assets/sort_view.94d899eb.webp";
const swiper = "/_app/immutable/assets/swiper_view.81b064e2.webp";
const publing = "/_app/immutable/assets/publing_view.454f5fad.webp";
const hersit = "/_app/immutable/assets/hersit_view.9fbba929.webp";
const hankyung = "/_app/immutable/assets/hankyung_view.4706acce.webp";
const mentor = "/_app/immutable/assets/mentor_view.0556e231.webp";
const lawadviser = "/_app/immutable/assets/lawadviser_view.c88416e5.webp";
const isearch = "/_app/immutable/assets/isearch_view.ff7ab3d6.webp";
const cpa = "/_app/immutable/assets/cpa_view.47484071.webp";
const makefly = "/_app/immutable/assets/makefly_view.5834ce34.webp";
const linefly = "/_app/immutable/assets/linefly_view.9dcf9fe0.webp";
const kanghan = "/_app/immutable/assets/kanghan_view.b28c109e.webp";
const implant = "/_app/immutable/assets/implant_view.a2c990e6.webp";
const chungin = "/_app/immutable/assets/chungin_view.fbae9e11.webp";
const isafly = "/_app/immutable/assets/24fly_view.b2db7f17.webp";
const views = [
  isabang3,
  fasttrack,
  evlabs,
  petfly,
  isabang2,
  slimcare,
  goldclass,
  blacklabel,
  alevel,
  corevac,
  airclean,
  isabang,
  jejuchanga,
  fastdealer,
  fasthunter,
  classeum,
  stake,
  chart,
  lotto,
  flowercake,
  calendar,
  todo,
  afly,
  bjp,
  finco,
  fullpage,
  license,
  jamong,
  playup,
  pyeongtaek,
  sort,
  swiper,
  publing,
  hersit,
  hankyung,
  mentor,
  lawadviser,
  isearch,
  cpa,
  makefly,
  linefly,
  kanghan,
  implant,
  chungin,
  isafly
];
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const arr = [...views].reverse(), src = arr[data.id - 1];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `  <section class="section view"><div class="area"><div class="container"><div class="view_img"><img${add_attribute("src", src, 0)}${add_attribute("alt", data.title, 0)}></div></div></div></section>`;
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
