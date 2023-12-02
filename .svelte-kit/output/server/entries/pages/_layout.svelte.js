import { c as create_ssr_component, b as add_attribute, d as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { n as navigating } from "../../chunks/stores.js";
import Lenis from "@studio-freight/lenis";
const common = "";
const mail = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGRSURBVFiF7Ze9TgJBEMd/S+hNjK0RKyu+OiueiNhY8gJ8J1LRmfgOxoaKylcwIRFrRRpbHAsHbjy44044tmGSTeZm5/b/u9vduT0nIvi0nFf1IwCQXzrOuQvg8kC6ryLytrwoAE/AApADtYVqFhxwB9wozDPwksUjG7sCrtUfAMwN2TtQFBGyaEBRNZZ6c9SZAn0DUcpAvGTE+6opKwBNygQiLK6xdQDt6O0TIiTeM/HNANrZ1fgHUN5BvKxjCNAN9UUDaEJnF4iQeGdDfzyAJrUNRCWFeMWItyNytgNoYktzZkkgVHym97Ri8pIBaHLTQFRj8qpGvLllzCkgaT9Gp8DIOVcNd2hspDmpLM0UDI1fB0601c2TD9nXFBAswtWrBxrAt8a/tInGGhum4n+LkGAbri0+oAaMDcAYqMUsxnTbkL+FKHLl83ugySXcjskKEUEp3qkKmvFsQYovxfj8GGUlHgVhAXweSD7zwAPBkWwC3DrnyNAmwJn69+DvUPoInDt9Nd6O5SsAX+b9z+gI8AO0QbwygIe5ewAAAABJRU5ErkJggg==";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { w } = $$props;
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  return `  <header class="header section"><div class="inner"><h1 class="logo" data-svelte-h="svelte-12hbxbt"><a href="/">Home</a></h1> <nav><ul><li><a href="mailto:bw03306@gmail.com" class="buttons">${w > 768 ? `bw03306@gmail.com` : `<img${add_attribute("src", mail, 0)} alt="">`}</a></li></ul></nav></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  let w = 0;
  const lenis = new Lenis({ duration: 0.6 });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_navigating();
  return `  ${$$result.head += `<!-- HEAD_svelte-mnx22g_START -->${$$result.title = `<title>MyWorklist</title>`, ""}<!-- HEAD_svelte-mnx22g_END -->`, ""}  ${$navigating ? `<div class="loading" data-svelte-h="svelte-nwvufk"><svg width="80px" height="80px" viewBox="0 0 80 80"><path stroke-width="10" stroke-linecap="round" fill="none" d="M40,10 A30,30 0 1,0 70,40"></path></svg></div>` : ``} <div id="app">${validate_component(Header, "Header").$$render($$result, { w }, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> <footer class="footer section" data-svelte-h="svelte-1a5e97w"><article class="container">Copyright ©2023. my worklist</article></footer> ${``}</div>`;
});
export {
  Layout as default
};
