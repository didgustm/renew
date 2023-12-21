<!-- routes > layout -->
<script>
    import { navigating } from '$app/stores'
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import Lenis from '@studio-freight/lenis'
    import '/src/assets/scss/common/common.scss'
    import icon from '/src/assets/images/top.png'
    import Header from '/src/components/Header.svelte'
    export let data;

    gsap.registerPlugin(ScrollTrigger)

    let w, h, scrollY = 0, pos = {x:0, y:0};
    let app, cursor, isMobile = window.matchMedia('(pointer:coarse)').matches;
    
    function onclick(){
        lenis.scrollTo(0);
    }
    
    // Lenis
    const lenis = new Lenis();
	lenis.on('scroll', () => {
        ScrollTrigger.update
    });
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    });
    gsap.ticker.lagSmoothing(0);

    const onMouseMove = (e) => {
        if(!isMobile){
            pos.x = e.clientX;
            pos.y = e.clientY;
            gsap.to(cursor, {x: pos.x, y: pos.y + lenis.scroll, duration:0})
        }
    }

    const onResize = () => {
        isMobile = window.matchMedia('(pointer:coarse)').matches;
        h = window.innerHeight;
    }

    onMount(() => {
        ScrollTrigger.create({
            trigger: app,
            onUpdate: self => {
                if(!isMobile) gsap.to(cursor, {x: pos.x, y: pos.y + lenis.scroll, duration:0})
            }
        })
    });

</script>

<svelte:head>
    <title>MyWorklist</title>
</svelte:head>

<svelte:window
    on:scroll={() => {
        window.scrollY > 0?
        document.querySelector('.header').classList.add('active'):
        document.querySelector('.header').classList.remove('active');
    }}
    on:mousemove={onMouseMove}
    on:resize={onResize}
    bind:innerWidth={w}
    bind:innerHeight={h}
    bind:scrollY={scrollY}
/>

{#key data.currentRoute}
<div id="app" bind:this={app}>
    <Header { w } />
    {#if $navigating}
    <div class="loading" out:fade={{duration:200, delay:150}}>
        <svg width="80px" height="80px" viewBox="0 0 80 80">
            <path stroke-width="10" stroke-linecap="round" fill="none" d="M40,10 A30,30 0 1,0 70,40"></path>
        </svg>
    </div>
    {:else}
    <main in:fade={{duration:200, delay:150}}>
        <slot />
    </main>
    {/if}
    <footer class="footer section">
        <article class="container">
            Copyright ©2023. my worklist
        </article>
    </footer>
</div>
{/key}
{#if scrollY > 100}
<button type="button" class="btn_top" on:click={onclick}>
    <img src="{ icon }" alt="상단 바로가기">
</button>
{/if}
{#if !isMobile}
<div class="cursor" bind:this={cursor}></div>
{/if}