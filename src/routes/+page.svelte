<!-- +page.svelte -->
<script>
    import { onMount } from 'svelte'
    import '@scss/index/style.scss'
    import Top from '@comp/index/Top.svelte';
    import Section from '@comp/index/Section.svelte';
    import { setGridLayout, setItemLayout } from '@js/utils';
        
    export let data;

    let items = [], showItems = [], hideItems = [];
    $: current = 0;
    $: w = 0;
    const menus = ['All', 'Car', 'Stock', 'Web', 'Life', 'Etc'];

    onMount(() => {
        setGridLayout(items, w);
        setItemLayout(items, hideItems, 0, w);
        
        window.addEventListener('resize', () => {
            w = window.innerWidth;
            if(items[0] != null){
                if(current != 0){
                    showItems = items.filter(ele => ele.dataset.sort == menus[current]);
                    hideItems = items.filter(ele => ele.dataset.sort != menus[current]);
                    setItemLayout(showItems, hideItems, 0, w);
                    setGridLayout(showItems, w)
                } else{
                    setItemLayout(items, '', 0, w)
                    setGridLayout(items, w);
                }
            }
        })
    });

    const onClick = idx => {
        current = idx;
        if(current != 0){
            showItems = items.filter(ele => ele.dataset.sort == menus[current]);
            hideItems = items.filter(ele => ele.dataset.sort != menus[current]);
            setItemLayout(showItems, hideItems, 0.4, w);
            setGridLayout(showItems, w)
        } else{
            setItemLayout(items, '', 0.4, w)
            setGridLayout(items, w);
        }
    }
</script>

<svelte:window
    bind:innerWidth={w}
/>
<Top />
<Section { data } { items } { current } { menus } { onClick } />