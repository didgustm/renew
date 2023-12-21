import { gsap } from "gsap";
const setGridLayout = (items, w) => {
  const gridContainer = document.querySelector(".grid"), leng = items.length, gridW = gridContainer.clientWidth, h = gridContainer.firstChild.offsetHeight, step = w < 450 ? 1 : w < 768 ? 2 : w <= 1400 ? 3 : 4, gap = w < 450 ? 0 : w < 600 ? 20 : 30;
  items.forEach((x) => {
    x.style.width = `${(gridW - gap * (step - 1)) / step}px`;
  });
  gridContainer.style.height = `${Math.ceil(leng / step) * h + 20 * Math.floor(leng / step)}px`;
};
const setItemLayout = (items, hideItem, duration = 0, w) => {
  const step = w < 450 ? 1 : w < 768 ? 2 : w <= 1400 ? 3 : 4, gap = w < 450 ? 0 : w < 600 ? 20 : 30, gridContainer = document.querySelector(".grid"), itemW = (gridContainer.clientWidth - gap * (step - 1)) / step, itemH = gridContainer.firstChild.offsetHeight;
  items.forEach((item, idx) => {
    let row = Math.floor(idx / step), column = idx % step;
    let mo = item.querySelector("a");
    gsap.fromTo(item, { opacity: 1 }, { x: column * itemW + gap * column, y: row * itemH + 20 * row, scale: 1, duration });
    if (duration > 0)
      gsap.to(mo, { opacity: 1, y: 0, duration: 0 });
  });
  if (hideItem != 0) {
    hideItem.forEach((item) => {
      gsap.to(item, { opacity: 0, scale: 0, duration });
    });
  }
};
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/list/24fly.md": () => import("./24fly.js"), "/src/routes/list/afly.md": () => import("./afly.js"), "/src/routes/list/airclean.md": () => import("./airclean.js"), "/src/routes/list/alevel.md": () => import("./alevel.js"), "/src/routes/list/bjp.md": () => import("./bjp.js"), "/src/routes/list/blacklabel.md": () => import("./blacklabel.js"), "/src/routes/list/calendar.md": () => import("./calendar.js"), "/src/routes/list/chart.md": () => import("./chart.js"), "/src/routes/list/chungin.md": () => import("./chungin.js"), "/src/routes/list/classeum.md": () => import("./classeum.js"), "/src/routes/list/corevac.md": () => import("./corevac.js"), "/src/routes/list/cpa.md": () => import("./cpa.js"), "/src/routes/list/evlabs.md": () => import("./evlabs.js"), "/src/routes/list/fastdealer.md": () => import("./fastdealer.js"), "/src/routes/list/fasthunter.md": () => import("./fasthunter.js"), "/src/routes/list/fasttrack.md": () => import("./fasttrack.js"), "/src/routes/list/finco.md": () => import("./finco.js"), "/src/routes/list/flowercake.md": () => import("./flowercake.js"), "/src/routes/list/fullpage.md": () => import("./fullpage.js"), "/src/routes/list/goldclass.md": () => import("./goldclass.js"), "/src/routes/list/hankyung.md": () => import("./hankyung.js"), "/src/routes/list/hersit.md": () => import("./hersit.js"), "/src/routes/list/implant.md": () => import("./implant.js"), "/src/routes/list/isabang.md": () => import("./isabang.js"), "/src/routes/list/isabang2.md": () => import("./isabang2.js"), "/src/routes/list/isabang3.md": () => import("./isabang3.js"), "/src/routes/list/isearch.md": () => import("./isearch.js"), "/src/routes/list/jamong.md": () => import("./jamong.js"), "/src/routes/list/jejuchanga.md": () => import("./jejuchanga.js"), "/src/routes/list/kanghan.md": () => import("./kanghan.js"), "/src/routes/list/lawadviser.md": () => import("./lawadviser.js"), "/src/routes/list/license.md": () => import("./license.js"), "/src/routes/list/linefly.md": () => import("./linefly.js"), "/src/routes/list/lotto.md": () => import("./lotto.js"), "/src/routes/list/makefly.md": () => import("./makefly.js"), "/src/routes/list/mentor.md": () => import("./mentor.js"), "/src/routes/list/petfly.md": () => import("./petfly.js"), "/src/routes/list/playup.md": () => import("./playup.js"), "/src/routes/list/publing.md": () => import("./publing.js"), "/src/routes/list/pyeongtaek.md": () => import("./pyeongtaek.js"), "/src/routes/list/slimcare.md": () => import("./slimcare.js"), "/src/routes/list/sort.md": () => import("./sort.js"), "/src/routes/list/stake.md": () => import("./stake.js"), "/src/routes/list/swiper.md": () => import("./swiper.js"), "/src/routes/list/template01.md": () => import("./template01.js"), "/src/routes/list/todo.md": () => import("./todo.js") }), iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
export {
  setGridLayout as a,
  fetchMarkdownPosts as f,
  setItemLayout as s
};
