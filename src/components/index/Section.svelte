<!-- components > index > section -->
<script>
    import Menu from "./Menu.svelte"
    import Grid from "./Grid.svelte"

    export let data, items, current, menus, onClick;

    
</script>

<section class="section list">
    <div class="area">
        <article class="container">
            <Menu { current } { onClick } { menus } />
            <Grid { data } { items } />
        </article>
    </div>
</section>