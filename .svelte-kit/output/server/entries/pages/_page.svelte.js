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
const chart = "/_app/immutable/assets/js.f845a25b.jpg";
const isabang = "/_app/immutable/assets/isabang.988ece91.jpg";
const thumnails = [
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
