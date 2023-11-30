<!-- components > index > grid -->
<script>
    import { observation } from '@js/utils';
    import { thumnails } from '@js/thumnail';
    export let data, items
</script>

<ul class="grid" use:observation={{rootMargin: '-150px'}}>
    {#each data.lists as list, idx}
    <li class="item" data-sort="{list.meta.category}" bind:this={items[idx]}>
        <a href="{list.path}">
            <div class="thumnail"><img data-src="{ thumnails[idx] }" alt="{list.meta.title}"></div>
            <div class="info">
                <p class="caption">{list.meta.caption}</p>
                <p class="name">{list.meta.title}</p>
                <p class="category">{list.meta.category}</p>
            </div>
        </a>
    </li>
    {/each}
</ul>