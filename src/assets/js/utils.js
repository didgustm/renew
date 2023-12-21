// js > utils
import { gsap } from 'gsap';

export const setGridLayout = (w) => {
    const gridContainer = document.querySelector('.grid'),
            items = gridContainer.querySelectorAll('.item'),
            leng = items.length,
            gridW = gridContainer.clientWidth,
            step = w < 450? 1: w < 768? 2: w <=1400? 3: 4,
            gap = w < 450? 0: w < 600? 20: 30,
            h = items[0].offsetHeight;
    items.forEach(x => {
        x.style.width = `${(gridW - (gap * (step - 1))) / step}px`
    })
    gridContainer.style.height = `${Math.ceil(leng / step) * h + (20 * Math.floor(leng / step))}px`;
}

export const setItemLayout = (items, hideItem, duration=0, w) => {
    const step = w < 450? 1: w < 768? 2: w <=1400? 3: 4,
        gap = w < 450? 0: w < 600? 20: 30,
        gridContainer = document.querySelector('.grid'),
        itemW = (gridContainer.clientWidth - (gap * (step - 1))) / step,
        itemH = gridContainer.firstChild.offsetHeight;
    
    items.forEach((item, idx) => {
        let row = Math.floor(idx / step),
                column = idx % step;
        let mo = item.querySelector('a');
        gsap.fromTo(item, {opacity:1}, {x:column*itemW + (gap*column), y:row*itemH + (20*row), scale:1, duration });
        if(duration > 0) gsap.to(mo, {opacity:1, y:0, duration:0})
    });
    if(hideItem != 0){
        hideItem.forEach(item => {
            gsap.to(item, {opacity:0, scale:0, duration})
        })
    }
}

export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/list/*.md'),
                iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);
            return {
                meta: metadata,
                path: postPath
            }
        })
    )

    return allPosts
}

export const observation = (node, params) => {
    function io(entries){
        entries.forEach(x => {
            if(!x.isIntersecting && x.boundingClientRect.y > 0) return;
            const { target } = x,
            originTarget = target.querySelector('img'),
            mo = target.querySelector('a');
            
            originTarget.setAttribute('src', originTarget.dataset.src);
            gsap.to(mo, {opacity:1, y:0, duration:0.8, delay:0.3})
            observer.unobserve(target);
        })
    }

    const observer = new IntersectionObserver(io, params);

    const items = node.querySelectorAll('.item');
    items.forEach(item => {
        observer.observe(item)
    });
}