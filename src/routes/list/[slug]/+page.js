// routes > list > page
export async function load({ params }){
    const detail = await import(`../${params.slug}.md`);
    const { title, caption, url, view, category, device } = detail.metadata
    return { title, caption, url, view, category, device }
}