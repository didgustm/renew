import { f as fetchMarkdownPosts } from "../../../chunks/utils.js";
import { j as json } from "../../../chunks/index.js";
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return b.meta.id - a.meta.id;
  });
  return json(sortedPosts);
};
export {
  GET
};
