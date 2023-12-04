import { n as noop, c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { n as navigating } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index2.js";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const common = "";
const mail = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGRSURBVFiF7Ze9TgJBEMd/S+hNjK0RKyu+OiueiNhY8gJ8J1LRmfgOxoaKylcwIRFrRRpbHAsHbjy44044tmGSTeZm5/b/u9vduT0nIvi0nFf1IwCQXzrOuQvg8kC6ryLytrwoAE/AApADtYVqFhxwB9wozDPwksUjG7sCrtUfAMwN2TtQFBGyaEBRNZZ6c9SZAn0DUcpAvGTE+6opKwBNygQiLK6xdQDt6O0TIiTeM/HNANrZ1fgHUN5BvKxjCNAN9UUDaEJnF4iQeGdDfzyAJrUNRCWFeMWItyNytgNoYktzZkkgVHym97Ri8pIBaHLTQFRj8qpGvLllzCkgaT9Gp8DIOVcNd2hspDmpLM0UDI1fB0601c2TD9nXFBAswtWrBxrAt8a/tInGGhum4n+LkGAbri0+oAaMDcAYqMUsxnTbkL+FKHLl83ugySXcjskKEUEp3qkKmvFsQYovxfj8GGUlHgVhAXweSD7zwAPBkWwC3DrnyNAmwJn69+DvUPoInDt9Nd6O5SsAX+b9z+gI8AO0QbwygIe5ewAAAABJRU5ErkJggg==";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { w } = $$props;
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  return `  <header class="header section"><div class="inner"><h1 class="logo" data-svelte-h="svelte-12hbxbt"><a href="/">Home</a></h1> <nav><ul><li><a href="mailto:bw03306@gmail.com" class="buttons">${w > 768 ? `bw03306@gmail.com` : `<img${add_attribute("src", mail, 0)} alt="">`}</a></li></ul></nav></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pos, $$unsubscribe_pos;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  let w = 0, cursor, posy2 = 0, scrolling = false;
  const pos = spring({ x: 0, y: 0 });
  $$unsubscribe_pos = subscribe(pos, (value) => $pos = value);
  const lenis = new Lenis({ duration: 0.6 });
  function raf2(time) {
    lenis.raf(time);
    requestAnimationFrame(raf2);
  }
  requestAnimationFrame(raf2);
  lenis.on("scroll", (e) => {
    scrolling = lenis.isScrolling;
    posy2 = lenis.animatedScroll;
    if (scrolling) {
      gsap.to(cursor, {
        x: $pos.x - 8,
        y: $pos.y + posy2 - 8,
        duration: 0
      });
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_pos();
  $$unsubscribe_navigating();
  return `  ${$$result.head += `<!-- HEAD_svelte-mnx22g_START -->${$$result.title = `<title>MyWorklist</title>`, ""}<!-- HEAD_svelte-mnx22g_END -->`, ""}  ${$navigating ? `<div class="loading" data-svelte-h="svelte-nwvufk"><svg width="80px" height="80px" viewBox="0 0 80 80"><path stroke-width="10" stroke-linecap="round" fill="none" d="M40,10 A30,30 0 1,0 70,40"></path></svg></div>` : ``} <div id="app">${validate_component(Header, "Header").$$render($$result, { w }, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> <footer class="footer section" data-svelte-h="svelte-1a5e97w"><article class="container">Copyright ©2023. my worklist</article></footer> ${``}</div> <div class="cursor"${add_attribute("this", cursor, 0)} data-svelte-h="svelte-82elu1"></div>`;
});
export {
  Layout as default
};
