const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const detail = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../24fly.md": () => import("../../../../chunks/24fly.js"), "../afly.md": () => import("../../../../chunks/afly.js"), "../airclean.md": () => import("../../../../chunks/airclean.js"), "../alevel.md": () => import("../../../../chunks/alevel.js"), "../bjp.md": () => import("../../../../chunks/bjp.js"), "../blacklabel.md": () => import("../../../../chunks/blacklabel.js"), "../calendar.md": () => import("../../../../chunks/calendar.js"), "../chart.md": () => import("../../../../chunks/chart.js"), "../chungin.md": () => import("../../../../chunks/chungin.js"), "../classeum.md": () => import("../../../../chunks/classeum.js"), "../corevac.md": () => import("../../../../chunks/corevac.js"), "../cpa.md": () => import("../../../../chunks/cpa.js"), "../evlabs.md": () => import("../../../../chunks/evlabs.js"), "../fastdealer.md": () => import("../../../../chunks/fastdealer.js"), "../fasthunter.md": () => import("../../../../chunks/fasthunter.js"), "../fasttrack.md": () => import("../../../../chunks/fasttrack.js"), "../finco.md": () => import("../../../../chunks/finco.js"), "../flowercake.md": () => import("../../../../chunks/flowercake.js"), "../fullpage.md": () => import("../../../../chunks/fullpage.js"), "../goldclass.md": () => import("../../../../chunks/goldclass.js"), "../hankyung.md": () => import("../../../../chunks/hankyung.js"), "../hersit.md": () => import("../../../../chunks/hersit.js"), "../implant.md": () => import("../../../../chunks/implant.js"), "../isabang.md": () => import("../../../../chunks/isabang.js"), "../isabang2.md": () => import("../../../../chunks/isabang2.js"), "../isabang3.md": () => import("../../../../chunks/isabang3.js"), "../isearch.md": () => import("../../../../chunks/isearch.js"), "../jamong.md": () => import("../../../../chunks/jamong.js"), "../jejuchanga.md": () => import("../../../../chunks/jejuchanga.js"), "../kanghan.md": () => import("../../../../chunks/kanghan.js"), "../lawadviser.md": () => import("../../../../chunks/lawadviser.js"), "../license.md": () => import("../../../../chunks/license.js"), "../linefly.md": () => import("../../../../chunks/linefly.js"), "../lotto.md": () => import("../../../../chunks/lotto.js"), "../makefly.md": () => import("../../../../chunks/makefly.js"), "../mentor.md": () => import("../../../../chunks/mentor.js"), "../petfly.md": () => import("../../../../chunks/petfly.js"), "../playup.md": () => import("../../../../chunks/playup.js"), "../publing.md": () => import("../../../../chunks/publing.js"), "../pyeongtaek.md": () => import("../../../../chunks/pyeongtaek.js"), "../slimcare.md": () => import("../../../../chunks/slimcare.js"), "../sort.md": () => import("../../../../chunks/sort.js"), "../stake.md": () => import("../../../../chunks/stake.js"), "../swiper.md": () => import("../../../../chunks/swiper.js"), "../todo.md": () => import("../../../../chunks/todo.js") }), `../${params.slug}.md`);
  const { id, title, caption, url, view, category, device } = detail.metadata;
  return { id, title, caption, url, view, category, device };
}
export {
  load
};
