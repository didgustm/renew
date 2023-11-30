<!-- components > list > top -->
<script>
    export let data
</script>

<section class="top">
    <article class="container">
        <p class="caption ts-up">{data.caption}</p>
        <h2 class="title">
            <div>
                <p>{data.title}</p>
            </div>
        </h2>
        <a href="{data.url}" class="url ts-up" target="_blank">{data.url}</a>
        <div class="category ts-up">
            <p>{data.category}</p>
            <span>&#8901;</span>
            <p>{data.device}</p>
        </div>
    </article>
</section>