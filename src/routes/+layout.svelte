<!-- routes > layout -->
<script>
    import { navigating } from '$app/stores'
    import { onMount } from 'svelte'
    import '@scss/set/common.scss'

    let w, h, scrollY = 0;
    let app, isMobile = window.matchMedia('(pointer:coarse)').matches;
    


    const onResize = () => {
        isMobile = window.matchMedia('(pointer:coarse)').matches;
        h = window.innerHeight;
    }

    onMount(() => {

    });

</script>

<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<svelte:window

    on:resize={onResize}
    bind:innerWidth={w}
    bind:innerHeight={h}
    bind:scrollY={scrollY}
/>

{#key data.currentRoute}
<div id="app" bind:this={app}>
    <main>
        <slot />
    </main>
</div>
{/key}