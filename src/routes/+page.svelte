<!-- routes > page -->
<script>
    import { onMount } from 'svelte';
    import { scroll } from '@js/scroll'
    import '@scss/set/common.scss'
    import Quick from '@lib/common/Quick.svelte'
    import Visual from '@lib/visual/Visual.svelte'
    import About from '@lib/about/About.svelte'
    import Portfolio from '@lib/portfolio/Portfolio.svelte'
    import Contact from '@lib/contact/Contact.svelte';

    export let data;

    onMount(() => {
        scroll()
    })
</script>

<Quick />
<div class="pin">
    <Visual />
    <About />
    <Portfolio { data } />
    <Contact />
</div>