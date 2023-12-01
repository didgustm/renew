<!-- components > list > view -->
<script>
    import { views } from '@js/view';
    export let data

    const arr = [...views].reverse(),
                src = arr[data.id - 1]
</script>

<section class="section view">
    <div class="area">
        <div class="container">
            <div class="view_img">
                <img { src } alt="{ data.title }">
            </div>
        </div>
    </div>
</section>