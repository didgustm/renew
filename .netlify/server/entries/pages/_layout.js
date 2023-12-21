const ssr = false;
const prerender = false;
const load = ({ url }) => {
  const currentRoute = url.pathname;
  return { currentRoute };
};
export {
  load,
  prerender,
  ssr
};
