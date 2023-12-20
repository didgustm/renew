<!-- routes > layout -->
<script>
    import { navigating } from '$app/stores'
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import Lenis from '@studio-freight/lenis'
    import '@scss/common/common.scss'
    import icon from '@images/top.png'
    import Header from '@comp/Header.svelte'
    export let data;

    gsap.registerPlugin(ScrollTrigger)

    let w, h, scrollY = 0, pos = {x:0, y:0};
    let app, thumb, dragging = false;
    let isMobile = window.matchMedia('(pointer:coarse)').matches;
    
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
            gsap.to('.cursor', {x: pos.x, y: pos.y + lenis.scroll, duration:0})
        }
    }

    const onResize = () => {
        isMobile = window.matchMedia('(pointer:coarse)').matches;
        h = window.innerHeight;
        let scrollH = h / (app.offsetHeight / h);
        if(!isMobile) thumb.style.height = `${scrollH}px`;
    }

    const onPointerDown = () => {
        if(!dragging){
            dragging = true
        }
    }

    const onPointerMove = (e) => {
        let scrollH = h / (app.offsetHeight / h);
        if(dragging && !isMobile){
            lenis.scrollTo(app.offsetHeight * ((e.y - scrollH / 2) / h))
        }
    }

    const onPointerUp = () => {
        dragging = false
    }

    onMount(() => {
        let scrollH = h / (app.offsetHeight / h);
        if(!isMobile){
            thumb.style.height = `${scrollH}px`
            ScrollTrigger.create({
                trigger: app,
                onUpdate: self => {
                    gsap.to('.thumb', {y: lenis.progress * (h - scrollH), duration: 0.1})
                    gsap.to('.cursor', {x: pos.x, y: pos.y + lenis.scroll, duration:0})
                }
            })
        }
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
    on:pointermove={e => onPointerMove(e)}
    on:pointerup={onPointerUp}
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
    {#if scrollY > 100}
    <button type="button" class="btn_top" on:click={onclick}>
        <img src="{ icon }" alt="상단 바로가기">
    </button>
    {/if}
</div>
{/key}
{#if !isMobile}
<div class="cursor"></div>
<div class="scrollbar">
    <div class="track">
        <div 
            class="thumb" 
            bind:this={thumb}
            on:pointerdown={onPointerDown}
        >
        </div>
    </div>
</div>
{/if}