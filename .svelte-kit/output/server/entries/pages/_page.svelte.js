import { c as create_ssr_component, f as each, e as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { s as setItemLayout, a as setGridLayout } from "../../chunks/utils.js";
const style = "";
const Top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <section class="top" data-svelte-h="svelte-1go8xkq"><article class="container"><h2 class="title"><div><p>Desktop, Mobile and</p></div> <div><p>Responsive web coding</p></div></h2></article></section>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { current, onClick, menus } = $$props;
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.menus === void 0 && $$bindings.menus && menus !== void 0)
    $$bindings.menus(menus);
  return `  <ul class="sort_menu">${each(menus, (menu, idx) => {
    return `${current == idx ? `<li class="${"btn" + escape(idx, true) + " on"}"><button type="button" class="buttons">${escape(menu)}</button> </li>` : `<li class="${"btn" + escape(idx, true)}"><button type="button" class="buttons">${escape(menu)}</button> </li>`}`;
  })}</ul>`;
});
const isabang3 = "/_app/immutable/assets/isabang3.8e6934ad.jpg";
const fasttrack = "/_app/immutable/assets/fasttrack.8a463bfa.jpg";
const petfly = "/_app/immutable/assets/petfly.00e1bd15.jpg";
const evlabs = "/_app/immutable/assets/evlabs.fe4fc1e9.jpg";
const isabang2 = "/_app/immutable/assets/isabang2.c551eaf3.jpg";
const blacklabel = "/_app/immutable/assets/blacklabel.a38181f0.jpg";
const alevel = "/_app/immutable/assets/alevel.c64aa762.jpg";
const classeum = "/_app/immutable/assets/classeum.3fee3df6.jpg";
const goldclass = "/_app/immutable/assets/goldclass.c8a0ea72.jpg";
const slimcare = "/_app/immutable/assets/slimcare.25766449.jpg";
const corevac = "/_app/immutable/assets/corevac.2581d499.jpg";
const fastdealer = "/_app/immutable/assets/fastdealer.1cd3468e.jpg";
const fasthunter = "/_app/immutable/assets/fasthunter.e0081098.jpg";
const airclean = "/_app/immutable/assets/airclean.6a9bb18e.jpg";
const calendar = "/_app/immutable/assets/calendar.c4172ece.jpg";
const todo = "data:image/jpeg;base64,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";
const js = "/_app/immutable/assets/js.f845a25b.jpg";
const isabang = "/_app/immutable/assets/isabang.988ece91.jpg";
const jejuchanga = "/_app/immutable/assets/jejuchanga.0062a899.jpg";
const stake = "/_app/immutable/assets/stake.b4ea4f31.jpg";
const lotto = "/_app/immutable/assets/lotto.fe8099ca.jpg";
const flowercake = "/_app/immutable/assets/flowercake.c34bca24.jpg";
const afly = "/_app/immutable/assets/afly.bb9d99da.jpg";
const bjp = "/_app/immutable/assets/bjp.9b51c385.jpg";
const finco = "/_app/immutable/assets/finco.12eac243.jpg";
const license = "/_app/immutable/assets/license.2f030767.jpg";
const jamong = "/_app/immutable/assets/jamong.e6783c80.jpg";
const playup = "/_app/immutable/assets/playup.74e6688c.jpg";
const pyeongtaek = "/_app/immutable/assets/pyeongtaek.d1e8480a.jpg";
const publing = "/_app/immutable/assets/publing.86873f5f.jpg";
const hersit = "/_app/immutable/assets/hersit.9eadd919.jpg";
const hankyung = "/_app/immutable/assets/hankyung.998000fa.jpg";
const mentor = "/_app/immutable/assets/mentor.45e70c16.jpg";
const lawadviser = "data:image/jpeg;base64,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";
const isearch = "/_app/immutable/assets/isearch.cdcd73e3.jpg";
const cpa = "/_app/immutable/assets/cpa.110c2320.jpg";
const makefly = "/_app/immutable/assets/makefly.9f120195.jpg";
const linefly = "data:image/jpeg;base64,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";
const kanghan = "/_app/immutable/assets/kanghan.97e7d943.jpg";
const implant = "/_app/immutable/assets/implant.72e4e9f5.jpg";
const chungin = "data:image/jpeg;base64,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";
const isafly = "/_app/immutable/assets/24fly.daca89ed.jpg";
const thumnails = [
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
  js,
  lotto,
  flowercake,
  calendar,
  todo,
  afly,
  bjp,
  finco,
  js,
  license,
  jamong,
  playup,
  pyeongtaek,
  js,
  js,
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
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data, items } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `  <ul class="grid">${each(data.lists, (list, idx) => {
    return `<li class="item"${add_attribute("data-sort", list.meta.category, 0)}${add_attribute("this", items[idx], 0)}><a${add_attribute("href", list.path, 0)}><div class="thumnail"><img${add_attribute("data-src", thumnails[idx], 0)}${add_attribute("alt", list.meta.title, 0)}></div> <div class="info"><p class="caption">${escape(list.meta.caption)}</p> <p class="name">${escape(list.meta.title)}</p> <p class="category">${escape(list.meta.category)}</p> </div></a> </li>`;
  })}</ul>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data, items, current, menus, onClick } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  if ($$props.menus === void 0 && $$bindings.menus && menus !== void 0)
    $$bindings.menus(menus);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `  <section class="section list"><div class="area"><article class="container">${validate_component(Menu, "Menu").$$render($$result, { current, onClick, menus }, {}, {})} ${validate_component(Grid, "Grid").$$render($$result, { data, items }, {}, {})}</article></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current;
  let w;
  let { data } = $$props;
  let items = [], showItems = [], hideItems = [];
  const menus = ["All", "Car", "Stock", "Web", "Life", "Etc"];
  const onClick = (idx) => {
    current = idx;
    if (current != 0) {
      showItems = items.filter((ele) => ele.dataset.sort == menus[current]);
      hideItems = items.filter((ele) => ele.dataset.sort != menus[current]);
      setItemLayout(showItems, hideItems, 0.4, w);
      setGridLayout(showItems, w);
    } else {
      setItemLayout(items, "", 0.4, w);
      setGridLayout(items, w);
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  current = 0;
  w = 0;
  return `   ${validate_component(Top, "Top").$$render($$result, {}, {}, {})} ${validate_component(Section, "Section").$$render($$result, { data, items, current, menus, onClick }, {}, {})}`;
});
export {
  Page as default
};
