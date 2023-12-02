<!-- routes > layout -->
<script>
    import { navigating } from '$app/stores'
    import { fade } from 'svelte/transition'
    import Lenis from '@studio-freight/lenis'
    import '@scss/common/common.scss'
    import icon from '@images/top.png'
    import Header from '@comp/Header.svelte'
    export let data;

    let w = 0, scrollY = 0;
    
    function onclick(){
        window.scrollTo({top:0, behavior:'smooth'});
    }
    
    // Lenis
    const lenis = new Lenis({
		duration: 0.6
	});
	function raf(time){
		lenis.raf(time);
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf);
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
    bind:innerWidth={w}
    bind:scrollY={scrollY}
/>

{#if $navigating}
<div class="loading" out:fade={{duration:200, delay:150}}>
    <svg width="80px" height="80px" viewBox="0 0 80 80">
        <path stroke-width="10" stroke-linecap="round" fill="none" d="M40,10 A30,30 0 1,0 70,40"></path>
    </svg>
</div>
{/if}
{#key data.currentRoute}
<div
    id="app"
    in:fade={{duration:200, delay:150}}
>
    <Header { w } />
    <main>
        <slot />
    </main>
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