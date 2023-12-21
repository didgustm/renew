<!-- components > index > menu -->
<script>
    export let current, onClick, menus;
</script>

<ul class="sort_menu">
    {#each menus as menu, idx}
        {#if current == idx}
        <li class="btn{idx} on">
            <button type="button" class="buttons"
                on:click={() => onClick(idx)}
            >
                {menu}
            </button>
        </li>
        {:else}
        <li class="btn{idx}">
            <button type="button" class="buttons"
                on:click={() => onClick(idx)}
            >
                {menu}
            </button>
        </li>
        {/if}
    {/each}
</ul>